import { Popup } from "./popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {      
    super(popupSelector);
  }

  open(name, link) {
    const imageElement = this._popupElement.querySelector(".popup__image");
    const captionElement = this._popupElement.querySelector(".popup__caption");

    imageElement.src = link;
    imageElement.alt = name;
    captionElement.textContent = name;
    
    super.open();
  }
}