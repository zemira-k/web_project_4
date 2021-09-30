import { Popup } from "./popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, submitHandler) {      
    super(popupSelector);
    this._submitHandler = submitHandler;
    this._form = this._popupElement.querySelector(".form")
  }

  _getInputValues() {
    const inputs = Array.from(this._form
        .querySelectorAll(".form__input"));
    const inputValues = {}

    inputs.forEach((input) => {
      inputValues[input.name] = input.value;
      console.log(input.value)
    })
    return inputValues;
  }
  
  setEventListeners() {    
    super.setEventListeners()    
    this._form.addEventListener("submit", () =>       
      this._submitHandler(this._getInputValues()))      
  }

  close() {
    super.close();
    this._form.reset();
  }
}
/*
const profileName = document.querySelector(".profile__name");
const profileTask = document.querySelector(".profile__task");

const editModal = new PopupWithForm(".popup_type_edit", (data) => {
    profileName.textContent = data.formName;
    profileTask.textContent = data.formAbout;
})*/