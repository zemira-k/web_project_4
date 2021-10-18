import { Popup } from "./popup.js";

export class PopupWithForm extends Popup {
  constructor({ popupSelector, submitHandler }) {
    super(popupSelector);
    this._submitHandler = submitHandler;
    this._form = this._popupElement.querySelector(".form");
    this._inputs = Array.from(this._form.querySelectorAll(".form__input"));
    this._formButton = this._popupElement.querySelector(".form__button");
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._formButton.textContent = "saving...";
    } else {
      this._formButton.textContent = this._formButton.value;
    }
  }

  _getInputValues() {
    this._inputValues = {};

    this._inputs.forEach(
      (input) => (this._inputValues[input.name] = input.value)
    );
    return this._inputValues;
  }

  setEventListeners() {
    this._popupElement.addEventListener("submit", (e) => {
      e.preventDefault();
      this.renderLoading(true);
      this._submitHandler(this._getInputValues());
    });
    super.setEventListeners();
  }
  
  close() {
    this._form.reset();
    super.close();
  }
}