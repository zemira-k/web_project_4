// reset validation
function resetValidation(settings, modalWindow) {
  const { inputSelector, submitButtonSelector, inactiveButtonClass } = settings;
  const inputList = Array.from(modalWindow.querySelectorAll(inputSelector));
  inputList.forEach((inputElement) => {
    hideInputError(inputElement, settings);    
  });
  const buttonElement = modalWindow.querySelector(submitButtonSelector);
  buttonElement.disabled = "disabled";
  buttonElement.classList.add(inactiveButtonClass);
}

// toggle Button State
function toggleButtonState(inputList, buttonElement, settings) {
  const isFormValid = inputList.every((inputList) => inputList.validity.valid);
  const { inactiveButtonClass } = settings;
  if (isFormValid) {
    buttonElement.disabled = false;
    buttonElement.classList.remove(inactiveButtonClass);
  } else {
    buttonElement.disabled = "disabled";
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
}

// hide Input Error
function hideInputError(inputElement, settings) {
  const { inputErrorClass, errorClass } = settings;
  inputElement.classList.remove(inputErrorClass);
  const errorElement = document.querySelector(`#${inputElement.id}-error`);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = "";
}

// check Input Validity
function checkInputValidity(inputElement, settings) {
  if (!inputElement.validity.valid) {
    showInputError(inputElement, settings);
  } else {
    hideInputError(inputElement, settings);
  }
}

function enableValidation(settings) {
  const { formSelector, inputSelector, submitButtonSelector, ...rest } =
    settings;
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);
    inputList.forEach((inputElement) => {
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
  errorClass: "form__input-error_active",
};

enableValidation(config);