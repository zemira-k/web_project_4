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


const cardTemplate = document.querySelector('.card-template').content.querySelector('.element');
const cardsContainer = document.querySelector('.elements');

// popup containers
const popupTypeEdit = document.querySelector('.popup_type_edit');
const popupTypeAdd = document.querySelector('.popup_type_add');
const popupTypeImage = document.querySelector('.popup_type_image');

// close buttons
const popupCloseCard = document.querySelector('.popup__close_type_card');
const popupCloseProfile = document.querySelector('.popup__close_type_profile');
const popupCloseImage = document.querySelector('.popup__close_type_image');

// forms to submit
const editSubmit = document.querySelector('.form_type_profile');
const addSubmit = document.querySelector('.form_type_card');

// open buttons
const editbutton = document.querySelector('.profile__editbutton');
const addCard = document.querySelector('.profile__big-rectangle');

// inputs
const formName = document.querySelector('.form__item_type_name');
const formAbout = document.querySelector('.form__item_type_about');
const formTitle = document.querySelector('.form__item_type_title');
const formLink = document.querySelector('.form__item_type_img-link');

// profile data
const profileName = document.querySelector('.profile__name');
const profileTask = document.querySelector('.profile__task');

// open form to edit profile
editbutton.addEventListener("click", () => {
  formName.value = profileName.textContent;
  formAbout.value = profileTask.textContent;
popupTypeEdit.classList.add("popup_opened");
})

// close form of edit profile
popupCloseProfile.addEventListener("click", () => {
popupTypeEdit.classList.remove("popup_opened");
})

// open form to add card
addCard.addEventListener("click", () => {
  formTitle.value = "Title"
  formLink.value = "Image Link"
popupTypeAdd.classList.add("popup_opened");
})

// close form of add card
popupCloseCard.addEventListener("click", () => {
popupTypeAdd.classList.remove("popup_opened");
})

// close big image
popupCloseImage.addEventListener("click", () => {
  popupTypeImage.classList.remove("popup_opened");
  })

//submit edit form
popupTypeEdit.addEventListener('submit', (evt) => {
  evt.preventDefault();
  profileName.textContent = formName.value;
  profileTask.textContent = formAbout.value;
  popupTypeEdit.classList.remove("popup_opened");
})

// function for all the cards events
function createCard(card) {
  const cardItem = cardTemplate.cloneNode(true)
  const cardText = cardItem.querySelector('.element__name-text')
  const cardImg = cardItem.querySelector('.element__item')
  const trashBtn = cardItem.querySelector('.element__btn_type_trash')
  const btnlike = cardItem.querySelector('.element__name-heart')
  const popupTypeImage = document.querySelector('.popup_type_image');
  const popupImage = document.querySelector('.popup__image');
  const popupCaption = document.querySelector('.popup__caption');  
      
  cardText.textContent = card.name
  cardImg.style.backgroundImage = `url(${card.link})`

// toogling the like button
  btnlike.addEventListener("click", (evt) => { 
    evt.preventDefault();    
    btnlike.classList.toggle("element__name-heart_type_black")
  })
  
// removing a card
  trashBtn.addEventListener('click', (evt) => {
    evt.preventDefault(); 
    cardItem.remove();
  });

// opening a big card
  cardImg.addEventListener('click', (evt) => {
    evt.preventDefault();    
    popupTypeImage.classList.toggle("popup_opened");
    popupImage.setAttribute("src", card.link);
    popupCaption.textContent = card.name;
 })

// insert a card in the top of the list
  cardsContainer.prepend(cardItem)  
}

//submit a new card
addSubmit.addEventListener("submit", (evt) => {
  evt.preventDefault();
  createCard({name:formTitle.value, link:formLink.value})
  popupTypeAdd.classList.remove("popup_opened");  
})

// arrange the 6 cards by reverse
cardData.reverse();
cardData.forEach(createCard);