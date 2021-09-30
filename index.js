import { Card } from "./card.js";
import { FormValidator } from "./formvalidator.js";
import { Section } from "./section.js";
import { Popup } from "./popup.js";
import { PopupWithForm } from "./popupWithForm.js";
//import { PopupWithImage } from "./popupWithImage.js";

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

// profile data
const profileName = document.querySelector(".profile__name");
const profileTask = document.querySelector(".profile__task");

// inputs
const inputName = document.querySelector(".form__input_type_name");
const inputAbout = document.querySelector(".form__input_type_about");
const inputTitle = document.querySelector(".form__input_type_title");
const inputLink = document.querySelector(".form__input_type_img-link");

//const popupEdit = new Popup(".popup_type_edit");
//const profileName = document.querySelector(".profile__name");
//const profileTask = document.querySelector(".profile__task");

const popupEdit = new PopupWithForm(".popup_type_edit", (data) => {  
  console.log(data)
    profileName.textContent = data.formName;
    profileTask.textContent = data.formAbout;
})

const popupBigImage = new Popup(".popup_type_image");
const popupAdd = new Popup(".popup_type_add");

//popupEdit.setEventListeners();
popupBigImage.setEventListeners();
popupAdd.setEventListeners();

const renderCard = (data, cardsContainer) => {  
  const card = new Card(data, ".card-template", () => {    
    imageModal.open(data.link, data.name)
  })
  cardsContainer.prepend(card.getCardElement());
};

// reset form-Edit value
function resetFormEditValue() {
  inputName.value = profileName.textContent;
  inputAbout.value = profileTask.textContent;
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
/*
// edit value of profile
function editProfileValue() {
  profileName.textContent = inputName.value;
  profileTask.textContent = inputAbout.value;
}*/
/*
//submit edit form
popupTypeEdit.addEventListener("submit", (evt) => {
  evt.preventDefault();
  //editProfileValue();  
  popupEdit.close()
  editFormValidator.resetValidation();
});*/

// call functions to open form to add card
addCard.addEventListener("click", () => {  
  popupAdd.open()
});

// call functions to close & reset form of add card
popupCloseCard.addEventListener("click", () => {   
  addCardFormValidator.resetValidation();
  formAdd.reset();
});

//submit form of add card
formAdd.addEventListener("submit", (evt) => {
  evt.preventDefault();
  renderCard({ name: inputTitle.value, link: inputLink.value }, cardsContainer);
  popupAdd.close()
  addCardFormValidator.resetValidation();
  formAdd.reset();
});

const cards = new Section({
  items: cardList,
  renderer: (cardItem) => {    
    const card = new Card(cardItem, ".card-template");
    const cardElement = card.getCardElement();
    cards.addItem(cardElement);    
  }
}, ".elements");

cards.renderItems();