import '../pages/index.css';
import {
  validationCfg,
  btnAddPost,
  btnEditProfile,
  templateClassName,
  aboutInput,
  nameInput,
  btnEditAvatar
} from '../utils/constants.js'

import Card from '../components/Card.js';
import FormValidation from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/',
  cohort: 'cohort-64',
  token: 'eb252b50-6915-4e03-a8a3-e61dab946d4a'
});

//Функция изменения и статуса
function handleFormSubmitProfile(evt, popupObject, inputValues) {
  evt.preventDefault();
  popupObject.setButtonText(`Сохранение...`);
  user.patchEditPorfile(inputValues)
  .then(res => {
    popupObject.close();
  })
  .catch(res => {
    console.log(res);
  })
  .finally(res => {
    popupObject.setButtonText();
  })
}
//Функция изменения аватара
function handleFormSubmitAvatar(evt, popupObject, inputValues) {
  evt.preventDefault();
  popupObject.setButtonText(`Сохранение...`);
  user.setAvatar(inputValues)
  .then(res => {
    popupObject.close();
  })
  .catch(res => {
    console.log(res);
  })
  .finally(res => {
    popupObject.setButtonText();
  })
}

//Обработка отправки формы
function handleFormSubmitAddPost(evt, popupObject, inputValues) {
  evt.preventDefault();
  popupObject.setButtonText(`Сохранение...`);
  api.addNewCard(inputValues)
  .then(res => {
    elements.addItem(createCard(res));
    popupObject.close();
  })
  .catch(res => {
    console.log(res);
  })
  .finally(res => {
    popupObject.setButtonText();
  })
}

//Функция удаления поста
function handleFormSubmitDelPost(evt, popupObject, inputValues) {
  evt.preventDefault();
  popupObject.setButtonText(`Да...`);
  api.delCard(inputValues.getId())
  .then(res => {
    inputValues.removeCard();
    popupObject.close();
  })
  .catch(res => {
    console.log(res);
  })
  .finally(res => {
    popupObject.setButtonText();
  })
}

const user = new UserInfo({profileNameSelector:'.profile__nickname', profileAboutSelector:'.profile__status', profileAvatarSelector: '.profile__avatar'}, api.patchEditPorfile.bind(api), api.updateAvatar.bind(api));
user.setUserInfo({name: 'Жак-Ив Кусто', about:'Исследователь океана'});

const modalEditProfile = new PopupWithForm('.popup_type_profile', handleFormSubmitProfile);
modalEditProfile.setEventListeners();

const modalAddPost = new PopupWithForm('.popup_type_post', handleFormSubmitAddPost);
modalAddPost.setEventListeners();

const modalImage = new PopupWithImage('.popup_type_photo');
modalImage.setEventListeners();

const modalEditAvatar = new PopupWithForm('.popup_type_edit_avatar', handleFormSubmitAvatar);
modalEditAvatar.setEventListeners();

const modalDelPost = new PopupWithForm('.popup_type_submit_delete', handleFormSubmitDelPost);
modalDelPost.setEventListeners();

const elements = new Section({items: [], renderer: createCard}, '.elements');

function createCard(obj) {
  const card = new Card(obj, templateClassName, (name, link) => {modalImage.open(name, link)}, user.getId(),modalDelPost.open.bind(modalDelPost), api.putLike.bind(api), api.takeOffLike.bind(api));
  return(card.getCard());
}

const profileFormValidator = new FormValidation(validationCfg, modalEditProfile.getFormElement());
profileFormValidator.enableValidation();

const addPostFormValidator = new FormValidation(validationCfg, modalAddPost.getFormElement());
addPostFormValidator.enableValidation();

const avatarFormValidator = new FormValidation(validationCfg, modalEditAvatar.getFormElement());
avatarFormValidator.enableValidation();

btnEditAvatar.addEventListener('click', () => {
  avatarFormValidator.validationForm();
  modalEditAvatar.open();
})

btnEditProfile.addEventListener('click', () => {
  const objectUserData = user.getUserInfo();
  nameInput.value = objectUserData.name;
  aboutInput.value = objectUserData.about;
  profileFormValidator.validationForm();
  modalEditProfile.open();
});
btnAddPost.addEventListener('click', () => {
  addPostFormValidator.validationForm();
  modalAddPost.open();
});

Promise.all([api.getProfileInfo(), api.getInitialCards()])
.then(res => {
 user.updateUserInfo(res[0]);
 elements.renderItems(res[1].reverse());
 console.log(res)
})
.catch(res => {
  console.log(res)
})
