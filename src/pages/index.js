import "./index.css";

import {
  config,
  cardList,  
  popupTypeEdit,
  popupTypeAdd,
  editButton,
  addCard,
  inputName,
  inputAbout,
  profileName,
  profileTask,
  profileAvatar
} from "../components/module.js";
import { Api } from "../components/Api";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupWithImage } from "../components/PopupWithImage.js";

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  headers: {
    authorization: "f0ace597-b017-4eaf-8da3-94e369745d83",
    "Content-Type": "application/json"
  }
});

api.getInitialCards()
   .then((cardList) => {     
    const cards = new Section(
        {
          items: cardList,
          renderer: (cardItem) => {      
            renderCard(cardItem);      
          },
        },
        ".elements"
      );
    const renderCard = (data) => {      
      const card = createCard(data);
      const cardElement = card.getCardElement();
      cards.addItem(cardElement);
    };         
    })
   .catch((err) => {
     console.log(err);
   });

   // result.forEach((card) => {
      // const name = card.name;
      // const link = card.link;
      // const id = card._id;
      // cardList.push({name, link, id});          
      // })    

api.getUserInfo()
   .then((result) => {     
      profileName.textContent = result.name;
      profileTask.textContent = result.about;
      profileAvatar.src = result.avatar;
   })
   .catch((err) => {
     console.log(err);
   });

api.editProfile()
// api.addCard()
api.deleteCard()
api.addLike() 
api.deleteLike()
api.updateProfileImage() 

// cardList.reverse();

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

// const cards = new Section(".elements");


const popupAdd = new PopupWithForm(".popup_type_add", (data) => {
  renderCard({ name: data.formTitle, link: data.formLink });
  popupAdd.close();  
});


// function renderItems(cardList) {
//   console.log(cardList)
//   for(let i=0; i<30; i++){
//     console.log(cardList[i])
//     let cardItem = cardList[i];
//     console.log(cardItem);
//     renderCard(cardItem);
//   }    
  //   cardList.forEach((cardItem) => {       
  //     renderCard(cardItem);
  //   });
  //  }
// function renderItems(cardList) {    
//   cardList.forEach((cardItem) => {       
//     renderCard(cardItem);
//   });
// }
// renderItems(cardList);
// 

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

// run validation
editFormValidator.enableValidation();
addCardFormValidator.enableValidation();

// setEventListeners
popupEdit.setEventListeners();
popupBigImage.setEventListeners();
popupAdd.setEventListeners();