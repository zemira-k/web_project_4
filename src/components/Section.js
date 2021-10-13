export class Section {
  constructor({ items, renderer }, containerSelector) {
  // constructor(containerSelector) {
    this._cardList = items;    
    this._renderer = renderer;
    this._cardsContainer = document.querySelector(containerSelector);
  }

  renderItems() {
    this._cardList.forEach((cardItem) => {      
      this._renderer(cardItem);
    });
  }

  addItem(element) {    
    this._cardsContainer.prepend(element);
  }
}