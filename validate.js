// popup list
const popupList = Array.from(document.querySelectorAll(".popup"));

//submit buutons
const buttonAdd = document.querySelector(".form__button_type_add");

// forms to submit
const formAdd = document.forms.formAddCard;

// inputs
const formTitle = document.querySelector(".form__input_type_title");
const formLink = document.querySelector(".form__input_type_img-link");

// close popup by escape or by clicking on popup-overlay
function keyHandler(evt) {
  popupList.forEach((popupElement) => {
    if (popupElement.classList.contains("popup_opened")) {
      if (evt.target === popupElement || evt.key === "Escape") {
        closeModalWindow(popupElement);
      }
    }
    else { return; }
  });
};

function resetForms() { 
  popupList.forEach(popupElement => {
    popupElement.addEventListener("submit", (evt) => {
      if (popupElement === popupTypeAdd) {
        createCard({ name: formTitle.value, link: formLink.value });             
        formAdd.reset();
      }
      else {
        editProfileValue();
      }
      closeModalWindow(popupElement);
      buttonAdd.disabled = 'disabled';   
      buttonAdd.classList.add("form__button_disabled");
       const inputList = Array.from(popupElement.querySelectorAll(".form__input"));       
        inputList.forEach(inputElement => {
          const errorElement = document.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add("form__input_type_error");        
        errorElement.classList.add("form__input-error_active");
      })
    });
  });
}

function toggleButtonState(inputList, buttonElement, settings) {
  const isFormValid = inputList.every(inputList => inputList.validity.valid)
  const { inactiveButtonClass } = settings
  if (isFormValid) {
    buttonElement.disabled = false
    buttonElement.classList.remove(inactiveButtonClass);
    resetForms();
  }
  else {
    buttonElement.disabled = 'disabled'
    buttonElement.classList.add(inactiveButtonClass);
  }
}

// show Input Error
function showInputError(inputElement, settings) {
  const { inputErrorClass, errorClass } = settings;
  const error = inputElement.validationMessage;
  const errorElement = document.querySelector(`#${inputElement.id}-error`);
  errorElement.textContent = error;
  inputElement.classList.add(inputErrorClass);
  errorElement.classList.add(errorClass);
};

// hide Input Error
function hideInputError(inputElement, settings) {
  const { inputErrorClass, errorClass } = settings;
  inputElement.classList.remove(inputErrorClass);
  const errorElement = document.querySelector(`#${inputElement.id}-error`);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = "";
};

// check Input Validity
function checkInputValidity(inputElement, settings) {
  if (!inputElement.validity.valid) {
    showInputError(inputElement, settings);
  } else {
    hideInputError(inputElement, settings);
  }
};

function enableValidation(settings) {

  // listener of keydown & click
  document.addEventListener("keydown", keyHandler);
  document.addEventListener("click", keyHandler);

  const { formSelector, inputSelector, submitButtonSelector, ...rest } = settings;
  const formList = Array.from(document.querySelectorAll(formSelector));


  formList.forEach(formElement => {
    formElement.addEventListener("submit", (evt) => evt.preventDefault());
 

  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);

  inputList.forEach(inputElement => {

    inputElement.addEventListener("input", () => {
      checkInputValidity(inputElement, rest);
      toggleButtonState(inputList, buttonElement, rest);
    });
  });
});
}

const config = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active"
}

enableValidation(config);