import { PopupWithImage } from "./popupWithImage.js";

const popupBigImage = new PopupWithImage(".popup_type_image")

export class Card {
  constructor({ name, link }, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;

    this._cardTemplate = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element");
  }

  // handles
  _handleLikeBtnToggle = (evt) =>
    evt.target.classList.toggle("element__name-heart_type_black");

  _handleRemoveCard = () => {
    this._cardElement.remove();
    this._cardElement = "null";
  };

  _handleOpenPopupImage = () => {    
    popupBigImage.open(this._name, this._link)

  };

  // listeners

  _addEventListeners() {
    const likeBtn = this._cardElement.querySelector(".element__name-heart");
    const trashBtn = this._cardElement.querySelector(
      ".element__btn_type_trash"
    );
    const openPopupImage = this._cardElement.querySelector(
      ".element__btn_type_image"
    );

    likeBtn.addEventListener("click", this._handleLikeBtnToggle);
    trashBtn.addEventListener("click", this._handleRemoveCard);
    openPopupImage.addEventListener("click", this._handleOpenPopupImage);
  }

  // create card element
  getCardElement() {
    this._cardElement = this._cardTemplate.cloneNode(true);
    const cardImage = this._cardElement.querySelector(".element__item");

    cardImage.src = this._link;
    this._cardElement.querySelector(".element__name-text").textContent =
      this._name;

    this._addEventListeners();
    return this._cardElement;
  }
}