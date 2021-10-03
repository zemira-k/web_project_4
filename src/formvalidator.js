export class FormValidator {
  constructor(settings, form) {
    this._settings = settings;
    this._formElement = form;
  }

  // show Input Error
  _showInputError = (inputElement) => {
    const { inputErrorClass, errorClass } = this._settings;
    const error = inputElement.validationMessage;
    const errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    errorElement.textContent = error;
    inputElement.classList.add(inputErrorClass);
    errorElement.classList.add(errorClass);
  };

  // hide Input Error
  _hideInputError = (inputElement) => {
    const { inputErrorClass, errorClass } = this._settings;
    inputElement.classList.remove(inputErrorClass);
    const errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    errorElement.classList.remove(errorClass);
    errorElement.textContent = "";
  };

  // check Input Validity
  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  };

  // toggle Button State
  _toggleButtonState = (inputList) => {
    const { inactiveButtonClass, submitButtonSelector } = this._settings;
    const buttonElement = this._formElement.querySelector(submitButtonSelector);
    const isFormValid = inputList.every(
      (inputList) => inputList.validity.valid
    );
    if (isFormValid) {
      buttonElement.disabled = false;
      buttonElement.classList.remove(inactiveButtonClass);
    } else {
      buttonElement.disabled = "disabled";
      buttonElement.classList.add(inactiveButtonClass);
    }
  };

  // reset validation
  resetValidation = () => {
    const { inputSelector } = this._settings;
    const inputList = Array.from(
      this._formElement.querySelectorAll(inputSelector)
    );
    inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
    this._toggleButtonState(inputList);
  };

  // run validation
  enableValidation = () => {
    const { inputSelector } = this._settings;
    const inputList = Array.from(
      this._formElement.querySelectorAll(inputSelector)
    );
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(inputList);
      });
    });
  };
}
