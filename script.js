let profileName = document.querySelector('.profile__name');
let profileTask = document.querySelector('.profile__task');
let formName = document.querySelector('.form__item_type_name');
let formAbout = document.querySelector('.form__item_type_about');
let editbutton = document.querySelector('.profile__editbutton');
let formTypeProfile = document.querySelector('.form_type_profile');
let formTypeCard = document.querySelector('.form_type_card');
let popup = document.querySelector('.popup');
let popupTypeEdit = document.querySelector('.popup_type_edit');
let popupTypeAdd = document.querySelector('.popup_type_add');
let popupCloseCard = document.querySelector('.popup__close_type_card');
let popupCloseProfile = document.querySelector('.popup__close_type_profile');
let PopupOpened = document.querySelector('.popup_opened');
let formButtonTypeAdd = document.querySelector('.form__button_type_add');
let formButtonTypeEdit = document.querySelector('.form__button_type_edit');
let card = document.querySelector('.element');
let cardImg = document.querySelector('.element__item');
let cardName = document.querySelector('.element__name');
let cardText = document.querySelector('.element__name-text');
let cardLike = document.querySelector('.element__name-heart');
let addCard = document.querySelector('.profile__big-rectangle');
let formTitle = document.querySelector('.form__item_type_title');
let formLink = document.querySelector('.form__item_type_img-link');
let cardsContainer = document.querySelector('.elements');

const cardData = [
  { name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg" },
  { name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg" },
  { name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg" },
  { name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg" },
  { name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg" },
  { name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg" }
]; 


cardData.forEach((card) => {
  const title = card.name;
  const imglink = card.link;
  const cardElement = createCard(title, imglink);
  cardsContainer.prepend(cardElement);
});
/*
const someElement = document.querySelector('.some-class');
function handleSomeEvent(event) {
  console.log(event.target);
}
someElement.addEventListener("click", handleSomeEvent);

someElement.remove();
*/
function createCard(title, imglink) {  
  const cardTemplate = document.querySelector('#card-template').content;
  const card = cardTemplate.querySelector('.element').cloneNode(true);
  const cardImg = card.querySelector('.element__item');
  const cardText = card.querySelector('.element__name-text');  
  cardText.textContent = title;  
  cardImg.setAttribute("src", imglink);  
  return card;
}

function openFormEdit() {  
  formName.value = profileName.textContent;
  formAbout.value = profileTask.textContent;
  popupTypeEdit.classList.add("popup_opened");  
}

function openFormAdd() {  
  popupTypeAdd.classList.add("popup_opened");  
}

function closeFormEdit() {    
  popupTypeEdit.classList.remove("popup_opened"); 
}

function closeFormAdd() {    
  popupTypeAdd.classList.remove("popup_opened"); 
}

function handleFormSubmitEdit(evt) {
  evt.preventDefault(); 
  profileName.textContent = formName.value;
  profileTask.textContent = formAbout.value;
  closeFormEdit();
}

function handleFormSubmitCard(evt) {
  evt.preventDefault();
  const title = formTitle.value;
  const link = formLink.value;
  cardsContainer.prepend(createCard(title, link));
  closeFormAdd();
}

editbutton.addEventListener("click", openFormEdit);
addCard.addEventListener("click", openFormAdd);
popupCloseProfile.addEventListener("click", closeFormEdit);
popupCloseCard.addEventListener("click", closeFormAdd);
formTypeProfile.addEventListener('submit', handleFormSubmitEdit);
formTypeCard.addEventListener('submit', handleFormSubmitCard);