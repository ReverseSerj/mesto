import '../pages/index.css';
import {
  validationCfg,
  btnAddPost,
  btnEditProfile,
  templateClassName,
  initialCards
} from './constants.js'

import Card from './Card.js';
import FormValidation from './FormValidator.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import Section from './Section.js';
import UserInfo from './UserInfo.js';

//Функция изменения и статуса
function handleFormSubmitProfile(evt, popupObject, inputValues) {
  evt.preventDefault();
  user.setUserInfo({name: inputValues[0], about: inputValues[1]});
  popupObject.close();
}

//Обработка отправки формы
function handleFormSubmitAddPost(evt, popupObject, inputValues) {
  evt.preventDefault();
  elements.addItem(createCard({name: inputValues[0], link: inputValues[1]}));
  popupObject.close();
}

const user = new UserInfo({profileNameSelector:'.profile__nickname', profileAboutSelector:'.profile__status'});
user.setUserInfo({name: 'Жак-Ив Кусто', about:'Исследователь океана'});

const modalEditProfile = new PopupWithForm('.popup_type_profile', handleFormSubmitProfile);
modalEditProfile.setEventListeners();

const modalAddPost = new PopupWithForm('.popup_type_post', handleFormSubmitAddPost);
modalAddPost.setEventListeners();

const modalImage = new PopupWithImage('.popup_type_photo');
modalImage.setEventListeners();

btnEditProfile.addEventListener('click', () => {modalEditProfile.open()});
btnAddPost.addEventListener('click', () => {modalAddPost.open()});

const elements = new Section({items: initialCards, renderer: createCard}, '.elements');
elements.renderItems();

function createCard(obj) {
  const card = new Card(obj.name, obj.link, templateClassName, (name, link) => {modalImage.open(name, link)});
  return(card.getCard());
}

const profileFormValidator = new FormValidation(validationCfg, modalEditProfile.getFormElement());
profileFormValidator.enableValidation();

const addPostFormValidator = new FormValidation(validationCfg, modalAddPost.getFormElement());
addPostFormValidator.enableValidation();






















