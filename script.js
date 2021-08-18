let profileName = document.querySelector('.profile__name');
let profileTask = document.querySelector('.profile__task');
let formName = document.querySelector('.form__item_name');
let formAbout = document.querySelector('.form__item_about');
let formElement = document.querySelector('.form');
let Popup = document.querySelector('.popup');
let PopupOpened = document.querySelector('.popup_opened');
let formButton = document.querySelector('.form__button');

function openForm() {  
  formName.value = profileName.textContent;
  formAbout.value = profileTask.textContent;
  Popup.classList.add("popup_opened");
  PopupOpened.setAttribute("style", "display:block");
}

function closeForm() {  
  if (Popup.classList.contains("popup_opened")){
        Popup.classList.remove("popup_opened");
        Popup.setAttribute("style", "display:none");
  }
  else {
       Popup.classList.add("popup_opened");
       PopupOpened.setAttribute("style", "display:block");
  }
}

function handleFormSubmit(evt) {
  evt.preventDefault(); 
  profileName.textContent = formName.value;
  profileTask.textContent = formAbout.value;
}

btnOpen.addEventListener("click", openForm);
btnClose.addEventListener("click", closeForm);
formElement.addEventListener('submit', handleFormSubmit);
formButton.addEventListener("click", closeForm);