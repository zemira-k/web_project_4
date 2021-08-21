let profileName = document.querySelector('.profile__name');
let profileTask = document.querySelector('.profile__task');
let formName = document.querySelector('.form__item_type_name');
let formAbout = document.querySelector('.form__item_type_about');
let editbutton = document.querySelector('.profile__editbutton');
let formElement = document.querySelector('.form');
let Popup = document.querySelector('.popup');
let PopupOpened = document.querySelector('.popup_opened');
let formButton = document.querySelector('.form__button');

function openForm() {  
  formName.value = profileName.textContent;
  formAbout.value = profileTask.textContent;
  Popup.classList.add("popup_opened");
}

function closeForm() {    
  Popup.classList.remove("popup_opened"); 
}

function handleFormSubmit(evt) {
  evt.preventDefault(); 
  profileName.textContent = formName.value;
  profileTask.textContent = formAbout.value;
  closeForm();
}

editbutton.addEventListener("click", openForm);
btnClose.addEventListener("click", closeForm);
formElement.addEventListener('submit', handleFormSubmit);