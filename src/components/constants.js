export const config = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};

export const avatarImage = document.querySelector(".profile__avatar");

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
export const editButtonAvatar = document.querySelector(".profile__editbutton_type_avatar");
export const editButtonData = document.querySelector(".profile__editbutton_type_data");
export const addCard = document.querySelector(".profile__big-rectangle");

// inputs
export const inputName = document.querySelector(".form__input_type_name");
export const inputAbout = document.querySelector(".form__input_type_about");