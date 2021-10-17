export class Section {
  constructor({ renderer }, containerSelector) {    
    this._renderer = renderer;
    this._cardsContainer = document.querySelector(containerSelector);
  }

  renderItems(items) {
    items.forEach(cardItem => {      
      this._renderer(cardItem);
    });
  }

  addItem(element) {    
    this._cardsContainer.append(element);
  }
}