import "./index.css";

import {
  config,
  popupTypeEdit,
  popupTypeAdd,
  popupTypeEditAvatar,  
  editButtonData,
  editButtonAvatar,  
  addCard,
  inputName,
  inputAbout,
} from "../components/constants.js";
import { api } from "../components/Api";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupConfirm } from "../components/PopupConfirm";

// instances
const editAvatarFormValidator = new FormValidator(config, popupTypeEditAvatar);
const editFormValidator = new FormValidator(config, popupTypeEdit);
const addCardFormValidator = new FormValidator(config, popupTypeAdd);
const info = new UserInfo(
  ".profile__name",
  ".profile__task",
  ".profile__avatar"
);

let userId;

Promise.all([api.getInitialCards(), api.getUserInfo()])
.then(
  ([cardData, userData]) => {
    userId = userData._id;
    cards.renderItems(cardData);
    info.setUserInfo({
      formName: userData.name,
      formAbout: userData.about,
      formLink: userData.avatar,
    });
  }
)
.catch(err => console.log(`Error: ${err}`))

const cards = new Section({renderer: createCard}, ".elements");
const popupBigImage = new PopupWithImage(".popup_type_image");
const popupConfirm = new PopupConfirm(".popup_type_delete-card");

const popupEdit = new PopupWithForm({
  popupSelector: ".popup_type_edit",
  submitHandler: (data) => {
    api.editProfile(data)
      .then((res) => {
        info.setUserInfo({
          formName: res.name,
          formAbout: res.about,
          formLink: res.avatar,
        });
      })
      .catch(err => console.log(`Error: ${err}`))
      .finally(() => {
        popupEdit.renderLoading(false);
        popupEdit.close();
      });
  },
});

const popupChangeProfilePicture = new PopupWithForm({
  popupSelector: ".popup_type_edit-avatar",
  submitHandler: (data) => {    
    api.updateProfileImage(data.avatarImageLink)
    .then((res) => {
      info.setUserInfo({
        formName: res.name,
        formAbout: res.about,
        formLink: res.avatar,
      });         
    })
    .catch(err => console.log(`Error: ${err}`))
    .finally(() => {
      popupChangeProfilePicture.renderLoading(false);
      popupChangeProfilePicture.close();
    });
  },
});

function createCard(data) {
  const card = new Card(
    {
      data,
      handleCardClick: () => {
        popupBigImage.open(data);
      },
      handleLikeClick: (id) => {
        const wasLiked = card.isLiked();
        if (wasLiked) {
          api.deleteLike(id)
          .then((res) => {
            card.likeCard(res.likes);
          })
          .catch(err => console.log(`Error: ${err}`))
        } else {
          api.addLike(id)
          .then((res) => {
            card.likeCard(res.likes);
          })
          .catch(err => console.log(`Error: ${err}`))
        }
      },
      handleDeleteCard: (id) => {
        popupConfirm.open();
        popupConfirm.setAction(() => {
          api.deleteCard(id)
          .then((res) => {
            card.removeCard();
            popupConfirm.close();
          })
          .catch(err => console.log(`Error: ${err}`))
        });
      },
    },
    ".card-template",
    userId
  );
  cards.addItem(card.getCard());
}

const popupAdd = new PopupWithForm({
  popupSelector: ".popup_type_add",
  submitHandler: (data) => {
    api.addCard({ name: data.formTitle, link: data.formLink })
    .then((res) => {
      createCard(res);
      // popupAdd.close();
    })
    .catch(err => console.log(`Error: ${err}`))
    .finally(() => {
      popupAdd.renderLoading(false);
      popupAdd.close();
    });
  },
});

// add card button listener - open form
addCard.addEventListener("click", () => {
  addCardFormValidator.resetValidation();
  popupAdd.open();
});

// reset form-Edit value
function resetFormEditValue() {
  const data = info.getUserInfo();
  inputName.value = data.name;
  inputAbout.value = data.job;
}

// edit button listener - open form and reset
editButtonData.addEventListener("click", () => {
  resetFormEditValue();
  editFormValidator.resetValidation();
  popupEdit.open();
});

// edit Button Avatar listener - open form and reset
editButtonAvatar.addEventListener("click", () => {
  editAvatarFormValidator.resetValidation();
  popupChangeProfilePicture.open();
});

// run validation
editFormValidator.enableValidation();
addCardFormValidator.enableValidation();
editAvatarFormValidator.enableValidation();

// set EventListeners
popupEdit.setEventListeners();
popupChangeProfilePicture.setEventListeners();
popupBigImage.setEventListeners();
popupAdd.setEventListeners();
popupConfirm.setEventListeners();