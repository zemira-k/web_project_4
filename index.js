import { Card } from "./card.js";
import { FormValidator } from "./formvalidator.js";
import { Section } from "./section.js";
import { PopupWithForm } from "./popupWithForm.js";
import { UserInfo } from "./userInfo.js";
import { PopupWithImage } from "./popupWithImage.js";

const config = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};

const cardList = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];
cardList.reverse();

// card container
const cardsContainer = document.querySelector(".elements");

// popup containers
const popupTypeEdit = document.querySelector(".popup_type_edit");
const popupTypeAdd = document.querySelector(".popup_type_add");

// create form validator
const editFormValidator = new FormValidator(config, popupTypeEdit);
const addCardFormValidator = new FormValidator(config, popupTypeAdd);

// run validation
editFormValidator.enableValidation();
addCardFormValidator.enableValidation();

// close buttons
const popupCloseCard = document.querySelector(".popup__close_type_card");
const popupCloseProfile = document.querySelector(".popup__close_type_profile");

// forms to submit
const formAdd = document.forms.formAddCard;

// open buttons
const editButton = document.querySelector(".profile__editbutton");
const addCard = document.querySelector(".profile__big-rectangle");

// inputs
const inputName = document.querySelector(".form__input_type_name");
const inputAbout = document.querySelector(".form__input_type_about"); 

const info = new UserInfo(".profile__name", ".profile__task")

const popupEdit = new PopupWithForm(".popup_type_edit", (data) => {
    info.setUserInfo(data)
    popupEdit.close()
    editFormValidator.resetValidation();
})

const popupAdd = new PopupWithForm(".popup_type_add", (data) => {  
  renderCard({ name: data.formTitle, link: data.formLink }, cardsContainer);
  popupAdd.close()
  addCardFormValidator.resetValidation();
});

const popupBigImage = new PopupWithImage(".popup_type_image")


popupEdit.setEventListeners();
popupBigImage.setEventListeners();
popupAdd.setEventListeners();


const renderCard = (data, cardsContainer) => {
  function openCardPopup() {
    popupBigImage.open(data.link, data.name);
  }
  const card = new Card(data, ".card-template", {handleCardClick: openCardPopup})  
  cardsContainer.prepend(card.getCardElement());
};

// reset form-Edit value
function resetFormEditValue() {
  const data = info.getUserInfo()
  inputName.value = data.name;
  inputAbout.value = data.job;
}

// call functions to edit profile
editButton.addEventListener("click", () => {
  resetFormEditValue();
  popupEdit.open()
});

// call functions to close & reset form of edit profile
popupCloseProfile.addEventListener("click", () => {
  editFormValidator.resetValidation();
});

// call functions to open form to add card
addCard.addEventListener("click", () => {
  popupAdd.open()
});

// call functions to close & reset form of add card
popupCloseCard.addEventListener("click", () => {
  addCardFormValidator.resetValidation();
  formAdd.reset();
});

const cards = new Section({
  items: cardList,
  renderer: (cardItem) => {
    function openCardPopup() {
      popupBigImage.open(cardItem.link, cardItem.name);
    }
    const card = new Card(cardItem, ".card-template", {handleCardClick: openCardPopup});
    const cardElement = card.getCardElement();
    cards.addItem(cardElement);
  }
}, ".elements");

cards.renderItems();