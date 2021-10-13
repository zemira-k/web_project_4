export class FormValidator {
  constructor(settings, form) {
    this._settings = settings;
    this._formElement = form;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    this._inputSelector = settings.inputSelector; 
    this._inputList = Array.from(
    this._formElement.querySelectorAll(this._inputSelector)
    );
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
  _toggleButtonState = () => {
    const { inactiveButtonClass } = this._settings;    
    const isFormValid = this._inputList.every((input) => input.validity.valid);
    if (isFormValid) {
      this._buttonElement.disabled = false;
      this._buttonElement.classList.remove(inactiveButtonClass);
    } else {
      this._buttonElement.disabled = "disabled";
      this._buttonElement.classList.add(inactiveButtonClass);
    }
  };

  // reset validation
  resetValidation = () => {        
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
    this._toggleButtonState();
  };

  // run validation
  enableValidation = () => {        
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  };
}
