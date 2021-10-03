export const config = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};

export const cardList = [
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

// card container
export const cardsContainer = document.querySelector(".elements");

// popup containers
export const popupTypeEdit = document.querySelector(".popup_type_edit");
export const popupTypeAdd = document.querySelector(".popup_type_add");

// close buttons
export const popupCloseCard = document.querySelector(".popup__close_type_card");
export const popupCloseProfile = document.querySelector(
  ".popup__close_type_profile"
);

// open buttons
export const editButton = document.querySelector(".profile__editbutton");
export const addCard = document.querySelector(".profile__big-rectangle");

// inputs
export const inputName = document.querySelector(".form__input_type_name");
export const inputAbout = document.querySelector(".form__input_type_about");