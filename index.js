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

const cardTemplate = document
  .querySelector(".card-template")
  .content.querySelector(".element");
const cardsContainer = document.querySelector(".elements");

// popup containers
const popupTypeEdit = document.querySelector(".popup_type_edit");
const popupTypeAdd = document.querySelector(".popup_type_add");
const popupTypeImage = document.querySelector(".popup_type_image");

// close buttons
const popupCloseCard = document.querySelector(".popup__close_type_card");
const popupCloseProfile = document.querySelector(".popup__close_type_profile");
const popupCloseImage = document.querySelector(".popup__close_type_image");

// open buttons
const editButton = document.querySelector(".profile__editbutton");
const addCard = document.querySelector(".profile__big-rectangle");

// profile data
const profileName = document.querySelector(".profile__name");
const profileTask = document.querySelector(".profile__task");

//submit buutons
//const buttonAdd = document.querySelector(".form__button_type_add");
//const buttonEdit = document.querySelector(".form__button_type_edit");

// global form
//const form = document.querySelector(".form");

// global input
//const formInput = form.querySelector(".form__input");

// form error
//const formError = form.querySelector(`.${formInput.id}-error`);

// forms to submit
/*const formAdd = document.forms.formAddCard;
const formEdit = document.forms.formEditProfile;*/

// inputs
/*const formTitle = formAdd.elements.formTitle;
const formLink = formAdd.elements.formLink;
const formName = formEdit.elements.formName;
const formAbout = formEdit.elements.formAbout;*/

// open popup
function openModalWindow(modalWindow) {
  modalWindow.classList.add("popup_opened");
} 

//close popup
function closeModalWindow(modalWindow) {
  modalWindow.classList.remove("popup_opened");
} 

// edit value of form
function editFormValue() {
  formName.value = profileName.textContent;
  formAbout.value = profileTask.textContent;
}

// open form to edit profile
editButton.addEventListener("click", () => {
  editFormValue();
  openModalWindow(popupTypeEdit);  
});

// close form of edit profile
popupCloseProfile.addEventListener("click", () => {
  closeModalWindow(popupTypeEdit);  
});

// edit value of profile
/*function editProfileValue() {
  profileName.textContent = formName.value;
  profileTask.textContent = formAbout.value;
}*/

//submit edit form
/*formEdit.addEventListener("submit", (evt) => {  
  evt.preventDefault();  
  editProfileValue();
  closeModalWindow(popupTypeEdit);  
});*/

// open form to add card
addCard.addEventListener("click", () => {
  openModalWindow(popupTypeAdd);  
});

// close form of add card
popupCloseCard.addEventListener("click", () => {
  closeModalWindow(popupTypeAdd);  
});

//submit form of add card
/*formAdd.addEventListener("submit", (evt) => {
  evt.preventDefault();
  createCard({ name: formTitle.value, link: formLink.value });
  closeModalWindow(popupTypeAdd);  
});*/

// close big image
popupCloseImage.addEventListener("click", () => {
  closeModalWindow(popupTypeImage);  
});

// function for all the cards events
function createCard(card) {
  const cardItem = cardTemplate.cloneNode(true);
  const cardText = cardItem.querySelector(".element__name-text");
  const cardImage = cardItem.querySelector(".element__item");
  const trashBtn = cardItem.querySelector(".element__btn_type_trash");
  const likeBtn = cardItem.querySelector(".element__name-heart");  
  const popupImage = document.querySelector(".popup__image");
  const popupCaption = document.querySelector(".popup__caption");

  cardText.textContent = card.name;
  cardImage.style.backgroundImage = `url(${card.link})`;

  // toogling the like button
  likeBtn.addEventListener("click", (evt) => {
    evt.preventDefault();
    likeBtn.classList.toggle("element__name-heart_type_black");
  });

  // removing a card
  trashBtn.addEventListener("click", (evt) => {
    evt.preventDefault();    
    cardItem.remove();
    cardItem = null;
  });

  // opening a big card
  cardImage.addEventListener("click", (evt) => {
    evt.preventDefault();
    openModalWindow(popupTypeImage);     
    popupImage.setAttribute("src", card.link);
    popupImage.setAttribute("alt", card.name);
    popupCaption.textContent = card.name;
  });

  // insert a card in the top of the list
  cardsContainer.prepend(cardItem);
}

// arrange the 6 cards by reverse
cardList.reverse();
cardList.forEach(createCard);


/*function setSubmitButtonState(isFormValid, button) {
  if (isFormValid) {
    button.removeAttribute("disabled");
    button.classList.remove("form__button_disabled"); 
  }
  else {
    button.setAttribute("disabled", true);
    button.classList.add("form__button_disabled"); 
  }
}*/

const checkInputValidity = (formElement, inputElement) => {  
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add("form__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("form__input-error_active");
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove("form__input_type_error");
  errorElement.classList.remove("form__input-error_active");
  errorElement.textContent = "";
};

/*formAdd.addEventListener("submit", function(evt){
  evt.preventDefault();
  formAdd.reset();
  setSubmitButtonState(false, buttonAdd);
});*/

/*formEdit.addEventListener("submit", function(evt){
  evt.preventDefault();
});*/

/*formAdd.addEventListener("input", function (evt) {
  const isValid = (formTitle.value.length>0 && formLink.value.length>0);
  setSubmitButtonState(isValid, buttonAdd);
  checkInputValidity();
});*/

/*formEdit.addEventListener("input", function (evt) {
  const isValid = (formName.value.length>0 && formAbout.value.length>0);
  setSubmitButtonState(isValid, buttonEdit);
  checkInputValidity();
});*/

/*formInput.addEventListener("input", function () {
  checkInputValidity(form, formInput);
});*/

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("form__button_disabled");
  }
  else {
  buttonElement.classList.remove("form__button_disabled");
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".form__input"));
  const buttonElement = formElement.querySelector(".form__button");  
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);     
      toggleButtonState(inputList, buttonElement);
    });
  });
}; 

const enableValidation = () => {  
  const formList = Array.from(document.querySelectorAll(".form"));
   formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {      
      evt.preventDefault();
      closeModalWindow();
    });     
  const fieldsetList = Array.from(formElement.querySelectorAll(".form__set"));
  fieldsetList.forEach((fieldset) => {
    setEventListeners(fieldset);
  });  
  });
};

enableValidation(); 