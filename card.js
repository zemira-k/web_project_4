import {
  openModalWindow,
  popupTypeImage,
  popupImage,
  popupCaption,
} from "./utils.js";

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

  // My tutor said that this is requirement for 8th sprint and I can not fix it
  _handleOpenPopupImage = () => {
    popupImage.setAttribute("src", this._link);
    popupImage.setAttribute("alt", this._name);
    popupCaption.textContent = this._name;
    openModalWindow(popupTypeImage);
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