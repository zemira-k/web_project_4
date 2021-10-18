export const config = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};

// popup containers
export const popupTypeEdit = document.querySelector(".popup_type_edit");
export const popupTypeAdd = document.querySelector(".popup_type_add");
export const popupTypeEditAvatar = document.querySelector(".popup_type_edit-avatar");

// open buttons
export const editButtonAvatar = document.querySelector(".profile__editbutton_type_avatar");
export const editButtonData = document.querySelector(".profile__editbutton_type_data");
export const addCard = document.querySelector(".profile__big-rectangle");

// inputs
export const inputName = document.querySelector(".form__input_type_name");
export const inputAbout = document.querySelector(".form__input_type_about");