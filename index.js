import {Card} from "./card.js";
import {FormValidator} from "./formvalidator.js";
import {openModalWindow, removeListener} from "./utils.js"

const config = {  
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};

const cardList = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];
cardList.reverse();
 
const cardsContainer = document.querySelector(".elements");

// popup containers 
const popupTypeEdit = document.querySelector(".popup_type_edit"); 
const popupTypeAdd = document.querySelector(".popup_type_add"); 
const popupTypeImage = document.querySelector(".popup_type_image"); 

const editFormValidator = new FormValidator(config, popupTypeEdit);
const addCardFormValidator = new FormValidator(config, popupTypeAdd);

editFormValidator.enableValidation();

// close buttons 
const popupCloseCard = document.querySelector(".popup__close_type_card");
const popupCloseProfile = document.querySelector(".popup__close_type_profile");
const popupCloseImage = document.querySelector(".popup__close_type_image");  

// forms to submit 
const formAdd = document.forms.formAddCard;  

// open buttons
const editButton = document.querySelector(".profile__editbutton"); 
const addCard = document.querySelector(".profile__big-rectangle");  

// profile data 
const profileName = document.querySelector(".profile__name"); 
const profileTask = document.querySelector(".profile__task");  

// inputs 
const inputName = document.querySelector(".form__input_type_name"); 
const inputAbout = document.querySelector(".form__input_type_about"); 
const inputTitle = document.querySelector(".form__input_type_title");
const inputLink = document.querySelector(".form__input_type_img-link"); 

//submit buttons
const buttonAdd = document.querySelector(".form__button_type_add");  

// reset form-Edit value 
function resetFormEditValue() { 
  inputName.value = profileName.textContent; 
  inputAbout.value = profileTask.textContent; 
}  



//close popup
export function closeModalWindow(modalWindow) { 
  if (modalWindow !== popupTypeImage) {
    editFormValidator.resetValidation();
    addCardFormValidator.resetValidation();
  } 
  modalWindow.classList.remove("popup_opened");
  removeListener();
} 

// call functions to edit profile 
editButton.addEventListener("click", () => { 
  resetFormEditValue(); 
  openModalWindow(popupTypeEdit);
});  

// call functions to close & reset form of edit profile
popupCloseProfile.addEventListener("click", () => { 
  closeModalWindow(popupTypeEdit);
});  

// edit value of profile 
function editProfileValue() { 
  profileName.textContent = inputName.value;
  profileTask.textContent = inputAbout.value; 
}  

//submit edit form
popupTypeEdit.addEventListener("submit", (evt) => { 
  evt.preventDefault(); 
  editProfileValue(); 
  closeModalWindow(popupTypeEdit);
});  

// call functions to open form to add card 
addCard.addEventListener("click", () => { 
  openModalWindow(popupTypeAdd); 
});  

// call functions to close & reset form of add card 
popupCloseCard.addEventListener("click", () => {   
  closeModalWindow(popupTypeAdd); 
  formAdd.reset(); 
});  

//submit form of add card 
formAdd.addEventListener("submit", (evt) => { 
  evt.preventDefault(); 
  renderElements({ name: inputTitle.value, link: inputLink.value }); 
  closeModalWindow(popupTypeAdd); 
  formAdd.reset(); 
}); 

// call functions to close big image 
popupCloseImage.addEventListener("click", () => { 
  closeModalWindow(popupTypeImage); 
});  

const renderElements = (item) => {  
  const card = new Card(item, ".card-template");  
	const cardElement = card.getCardElement();
	cardsContainer.prepend(cardElement);  
};

cardList.forEach((card) => {
  renderElements(card);
});