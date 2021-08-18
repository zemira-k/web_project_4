let profileName = document.querySelector('.profile__name');
let profileTask = document.querySelector('.profile__task');
let formName = document.querySelector('.form__item_name');
let formAbout = document.querySelector('.form__item_about');
let formElement = document.querySelector('.form');
let formPopup = document.querySelector('.form__popup');
let formPopupOpened = document.querySelector('.form__popup_opened');
let elementNameHeart = document.querySelector('.element__name_heart')

function openForm() {  
  formName.value = profileName.textContent;
  formAbout.value = profileTask.textContent;
  formPopup.classList.add("form__popup_opened");
  formPopupOpened.setAttribute("style", "display:block");
}

function closeForm() {  
  if (formPopup.classList.contains("form__popup_opened")){
        formPopup.classList.remove("form__popup_opened");
        formPopup.setAttribute("style", "display:none");
  }
  else {
       formPopup.classList.add("form__popup_opened");
       formPopupOpened.setAttribute("style", "display:block");
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
