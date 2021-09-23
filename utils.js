export const popupTypeImage = document.querySelector(".popup_type_image");
export const popupImage = document.querySelector(".popup__image");
export const popupCaption = document.querySelector(".popup__caption");
 
import {closeModalWindow} from "./index.js";

// open popup
export function openModalWindow(modalWindow) { 
    modalWindow.classList.add("popup_opened");   
    addListener(); 
} 

// listener of keydown & click 
function addListener() { 
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("click", closeOnClickPopupOverlay);
  }  

// remove listener of keydown & click 
export function removeListener() { 
    document.removeEventListener("keydown", closeOnEscape); 
    document.removeEventListener("click", closeOnClickPopupOverlay); 
  }  
  
  // close popup on escape 
  function closeOnEscape(evt) {
    if (evt.key === "Escape") { 
      const popup = document.querySelector(".popup_opened"); 
      closeModalWindow(popup);  
    } 
  }  
  
  // close popup on overlay-click 
  function closeOnClickPopupOverlay(evt) { 
    const popup = document.querySelector(".popup_opened");
    if (evt.target === popup) { 
      closeModalWindow(popup);    
    } 
  } 