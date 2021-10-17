import { Popup } from "./popup.js";

export class PopupConfirm extends Popup {
  setAction(action) {
    this._submitHandler = action;
  }

  setEventListeners() {
    this._popupElement.addEventListener("submit", (e) => {
      e.preventDefault();
      this._submitHandler();
    });
    super.setEventListeners();
  }
}