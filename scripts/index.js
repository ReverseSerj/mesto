import {
  validationCfg,
  popupAddPost,
  popupPictureScale,
  popupEditProfile,
  popupEditProfileForm,
  popupAddPostForm,
  popupEditProfileClose,
  popupAddPostClose,
  popupPictureScaleClose,
  popupEditProfileName,
  popupEditProfileStatus,
  popupAddPostTitle,
  popupAddPostLink,
  popupPictureScaleImg,
  popupPictureScaleCpt,
  btnAddPost,
  btnEditProfile,
  profileName,
  profileStatus,
  elementContainer,
  templateClassName,
  initialCards
} from './constants.js'

import Card from './Card.js';
import FormValidation from './FormValidator.js';

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleKeydownEscape);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleKeydownEscape);
}

function openPopupProfile(popup) {
  popupEditProfileName.value = profileName.textContent;
  popupEditProfileStatus.value = profileStatus.textContent;
  profileFormValidator.validationForm();
  openPopup(popup);
}

function openPopupPost(popup) {
  addPostFormValidator.validationForm();
  openPopup(popup);
}

btnEditProfile.addEventListener('click', () => {openPopupProfile(popupEditProfile)});
btnAddPost.addEventListener('click', () => {openPopupPost(popupAddPost)});

popupEditProfileClose.addEventListener('click', () => {closePopup(popupEditProfile)});
popupAddPostClose.addEventListener('click', () => {closePopup(popupAddPost)});
popupPictureScaleClose.addEventListener('click', () => {closePopup(popupPictureScale)});

//Функция изменения и статуса
function handleFormSubmitProfile(evt, ) {
  evt.preventDefault();
  profileName.textContent = popupEditProfileName.value;
  profileStatus.textContent = popupEditProfileStatus.value;
  closePopup(popupEditProfile);
}

popupEditProfileForm.addEventListener('submit', handleFormSubmitProfile);

//Функция добавления карточки
function addPost(name, link) {
  const card = new Card(name, link, templateClassName, openPopupPictureScale);
  elementContainer.prepend(card.getCard());
}

//Обработка отправки формы
function handleFormSubmitAddPost(evt) {
  evt.preventDefault();
  addPost(popupAddPostTitle.value, popupAddPostLink.value);
  closePopup(popupAddPost)
  popupAddPostForm.reset();
}

//Фунция Открытия картинки
function openPopupPictureScale(name, link) {
  popupPictureScaleImg.src = link;
  popupPictureScaleImg.alt = name;
  popupPictureScaleCpt.textContent = name;
  openPopup(popupPictureScale);
}

initialCards.forEach((obj)=> {addPost(obj.name, obj.link)});

popupAddPostForm.addEventListener('submit', handleFormSubmitAddPost);

//Закрытие popup на ESC
function handleKeydownEscape(anyKey){
  if(anyKey.key === 'Escape'){
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
};

//Закрытие по нажатию на Overlay
function popupCloseOverlay(){
  const popups = Array.from(document.querySelectorAll('.popup'));
  popups.forEach((popup) =>{
    popup.addEventListener('click', (evt) => {
      if(evt.target.classList.contains('popup')) {
        closePopup(evt.target);
      };
    });
  });
}

popupCloseOverlay();

const profileFormValidator = new FormValidation(validationCfg, popupEditProfileForm);
profileFormValidator.enableValidation();

const addPostFormValidator = new FormValidation(validationCfg, popupAddPostForm);
addPostFormValidator.enableValidation();




















