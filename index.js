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

// inputs
const formName = document.querySelector(".form__input_type_name");
const formAbout = document.querySelector(".form__input_type_about");

// open popup
function openModalWindow(modalWindow) {
  modalWindow.classList.add("popup_opened");
}

//close popup
function closeModalWindow(modalWindow) {
  modalWindow.classList.remove("popup_opened");
}

// edit value of form-Edit
function editFormValue() {
  formName.value = profileName.textContent;
  formAbout.value = profileTask.textContent;
}

// call functions to edit profile
editButton.addEventListener("click", () => {
  editFormValue();
  openModalWindow(popupTypeEdit);
});

// call functions to close form of edit profile
popupCloseProfile.addEventListener("click", () => {
  closeModalWindow(popupTypeEdit);
});

// edit value of profile
function editProfileValue() {
  profileName.textContent = formName.value;
  profileTask.textContent = formAbout.value;
}

// call functions to open form to add card
addCard.addEventListener("click", () => {
  openModalWindow(popupTypeAdd);
});

// call functions to close form of add card
popupCloseCard.addEventListener("click", () => {
  closeModalWindow(popupTypeAdd);
});

// call functions to close big image
popupCloseImage.addEventListener("click", () => {
  closeModalWindow(popupTypeImage);
});

// function for all the cards events
function createCard(card) {
  debugger
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
    cardItem = "null";
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