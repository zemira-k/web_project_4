import "./pages/index.css";

import {
  config,
  cardList,
  cardsContainer,
  popupTypeEdit,
  popupTypeAdd,
  popupCloseCard,
  popupCloseProfile,  
  editButton,
  addCard,
  inputName,
  inputAbout,
} from "./module.js";
import { Card } from "./card.js";
import { FormValidator } from "./formvalidator.js";
import { Section } from "./section.js";
import { PopupWithForm } from "./popupWithForm.js";
import { UserInfo } from "./userInfo.js";
import { PopupWithImage } from "./popupWithImage.js";

cardList.reverse();

// instances
const editFormValidator = new FormValidator(config, popupTypeEdit);
const addCardFormValidator = new FormValidator(config, popupTypeAdd);
const info = new UserInfo(".profile__name", ".profile__task");
const popupBigImage = new PopupWithImage(".popup_type_image");

const popupEdit = new PopupWithForm(".popup_type_edit", (data) => {
  info.setUserInfo(data);
  popupEdit.close();
  editFormValidator.resetValidation();
});

const popupAdd = new PopupWithForm(".popup_type_add", (data) => {
  renderCard({ name: data.formTitle, link: data.formLink }, cardsContainer);
  popupAdd.close();
  addCardFormValidator.resetValidation();
});

const renderCard = (data, cardsContainer) => {
  function openCardPopup() {
    popupBigImage.open(data.link, data.name);
  }
  const card = new Card(data, ".card-template", {
    handleCardClick: openCardPopup,
  });
  cardsContainer.prepend(card.getCardElement());
};

const cards = new Section(
  {
    items: cardList,
    renderer: (cardItem) => {
      function openCardPopup() {
        popupBigImage.open(cardItem.link, cardItem.name);
      }
      const card = new Card(cardItem, ".card-template", {
        handleCardClick: openCardPopup,
      });
      const cardElement = card.getCardElement();
      cards.addItem(cardElement);
    },
  },
  ".elements"
);

// run validation
editFormValidator.enableValidation();
addCardFormValidator.enableValidation();

// setEventListeners
popupEdit.setEventListeners();
popupBigImage.setEventListeners();
popupAdd.setEventListeners();

// reset form-Edit value
function resetFormEditValue() {
  const data = info.getUserInfo();
  inputName.value = data.name;
  inputAbout.value = data.job;
}

// edit button listener - open form and reset
editButton.addEventListener("click", () => {
  resetFormEditValue();
  popupEdit.open();
});

// edit-form close-button listener - reset form and validation
popupCloseProfile.addEventListener("click", () => {
  editFormValidator.resetValidation();
});

// add card button listener - open form
addCard.addEventListener("click", () => {
  popupAdd.open();
});

// addCard-form close-button listener reset form and validation
popupCloseCard.addEventListener("click", () => {
  addCardFormValidator.resetValidation();  
});

cards.renderItems();
