import "./index.css";

import {
  config,
  cardList,
  cardsContainer,
  popupTypeEdit,
  popupTypeAdd,
  editButton,
  addCard,
  inputName,
  inputAbout,
} from "../components/module.js";
import { Popup } from "../components/popup.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupWithImage } from "../components/PopupWithImage.js";

cardList.reverse();

// instances
const editFormValidator = new FormValidator(config, popupTypeEdit);
const addCardFormValidator = new FormValidator(config, popupTypeAdd);
const info = new UserInfo(".profile__name", ".profile__task");
const popupBigImage = new PopupWithImage(".popup_type_image");

const popupEdit = new PopupWithForm(".popup_type_edit", (data) => {
  info.setUserInfo(data);
  popupEdit.close();  
});

function createCard(dataElement) {
  const openCardPopup = () => {
    popupBigImage.open(dataElement.link, dataElement.name);
  }
  const card = new Card(dataElement, ".card-template", {
    handleCardClick: openCardPopup,
  });
  return card;
}

const renderCard = (data) => {  
  const card = createCard(data);
  const cardElement = card.getCardElement();
  cards.addItem(cardElement);
};

const popupAdd = new PopupWithForm(".popup_type_add", (data) => {
  renderCard({ name: data.formTitle, link: data.formLink });
  popupAdd.close();  
});

// run validation
editFormValidator.enableValidation();
addCardFormValidator.enableValidation();

// setEventListeners
popupEdit.setEventListeners();
popupBigImage.setEventListeners();
popupAdd.setEventListeners();

const cards = new Section(
  {
    items: cardList,
    renderer: (cardItem) => { 
      renderCard(cardItem);
    },
  },
  ".elements"
);

// reset form-Edit value
function resetFormEditValue() {
  const data = info.getUserInfo();
  inputName.value = data.name;
  inputAbout.value = data.job;
}

// edit button listener - open form and reset
editButton.addEventListener("click", () => {
  resetFormEditValue();
  editFormValidator.resetValidation();
  popupEdit.open();
});

// add card button listener - open form
addCard.addEventListener("click", () => {
  addCardFormValidator.resetValidation();
  popupAdd.open();
});
cards.renderItems();
