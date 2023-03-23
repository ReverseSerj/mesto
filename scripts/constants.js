//scalable config
const validationCfg = {
  popupsBody: '.popup__body',
  popupSubmitButtonOn: '.popup__submit',
  popupSubmitButtonOff: 'popup__submit_inactive',
  popupField: '.popup__field',
  fieldErrorTextOff: '.popup__field-error',
  fieldErrorTextOn: 'popup__field-error_active',
  popupInvalidField: 'popup__field_invalid'
};

//popup
const popupAddPost = document.querySelector('.popup_type_post');
const popupPictureScale = document.querySelector('.popup_type_photo');
const popupEditProfile = document.querySelector('.popup_type_profile');

//popupForm
const popupEditProfileForm = document.querySelector('.popup__body_type_profile');
const popupAddPostForm = document.querySelector('.popup__body_type_post');

//popupCloseBtn
const popupEditProfileClose = document.querySelector('.popup__close_type_profile');
const popupAddPostClose = document.querySelector('.popup__close_type_post');
const popupPictureScaleClose = document.querySelector('.popup__close_type_photo');

//popupInputs
const popupEditProfileName = document.querySelector('.popup__field_type_name');
const popupEditProfileStatus = document.querySelector('.popup__field_type_status');
const popupAddPostTitle = document.querySelector('.popup__field_type_title');
const popupAddPostLink = document.querySelector('.popup__field_type_link');

//popupPictureScale
const popupPictureScaleImg = document.querySelector('.popup__img');
const popupPictureScaleCpt = document.querySelector('.popup__caption');

//pageBtns
const btnAddPost = document.querySelector('.profile__add-post');
const btnEditProfile = document.querySelector('.profile__edit');

//otherSelector
const profileName = document.querySelector('.profile__nickname');
const profileStatus = document.querySelector('.profile__status');
const elementContainer = document.querySelector('.elements');

//template
const templateCard = document.querySelector('#post-card').content;
const elementCard = templateCard.querySelector('.element');
const templateClassName = '#post-card';

//initialCardsArray
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export {
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
  templateCard,
  elementCard,
  templateClassName,
  initialCards
};
