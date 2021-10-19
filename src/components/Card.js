export class Card {
  constructor(
    { data, handleCardClick, handleLikeClick, handleDeleteCard },
    cardSelector,
    userId
  ) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._userId = userId;
    this._ownerId = data.owner._id;
    this._likes = data.likes;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteCard = handleDeleteCard;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }

  // listeners
  _setEventListeners() {
    this._element
      .querySelector(".element__name-heart")
      .addEventListener("click", () => this._handleLikeClick(this._id));
    this._element
      .querySelector(".element__btn_type_image")
      .addEventListener("click", () => this._handleCardClick());
    this._element
      .querySelector(".element__btn_type_trash")
      .addEventListener("click", () => this._handleDeleteCard(this._id));
  }

  _renderLikes() {    
    this._element.querySelector(".element__name-number").textContent =
      this._likes.length;
      if (this.isLiked()) {   
    this._element
      .querySelector(".element__name-heart")
      .classList.add("element__name-heart_type_black");
      } else {
        this._element
        .querySelector(".element__name-heart")
        .classList.remove("element__name-heart_type_black");
      }
  }

  removeCard() {
    if (this._ownerId === this._userId) {
      this._element.remove();
      this._element = null;
    }
  }

  likeCard(newLikes) {
    this._likes = newLikes;
    this._renderLikes();    
  }

  isLiked() {
    return this._likes.some((person) => person._id === this._userId);
  }

  // create card element
  getCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    if (this._ownerId !== this._userId) {
      this._element.querySelector(".element__trash").style.display = "none";
    }    
    this._element.querySelector(".element__item").src = this._link;
    this._element.querySelector(".element__item").alt = this._name;
    this._element.querySelector(".element__name-text").textContent = this._name;    
    this._renderLikes();    
    return this._element;
  }
}