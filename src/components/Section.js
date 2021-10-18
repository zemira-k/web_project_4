export class Section {
  constructor({ renderer }, containerSelector) {    
    this._renderer = renderer;
    this._cardsContainer = document.querySelector(containerSelector);
  }

  renderItems(items) {    
    items.forEach(this._renderer)
  }; 

  addItem(element) {    
    this._cardsContainer.append(element);
  }
}