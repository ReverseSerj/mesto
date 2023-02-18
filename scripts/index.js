const profileEditButtonOn = document.querySelector('.profile__edit');
const profileEditButtonOff = document.querySelector('.popup__close_type_profile');
const popupEditProfile = document.querySelector('.popup_type_profile');
const nameInput = document.querySelector('.popup__field_type_name');
const statusInput = document.querySelector('.popup__field_type_status');
const nickName = document.querySelector('.profile__nickname');
const statusAbout = document.querySelector('.profile__status');
const popupTypeProfile = document.querySelector('.popup_type_profile');
const addPostButton = document.querySelector('.profile__add-post');
const popupAddPost = document.querySelector('.popup_type_post');
const postPopupButtonOff = document.querySelector('.popup__close_type_post');
const popupPictureScale = document.querySelector('.popup_type_photo');
const popupImgBtnClose = document.querySelector('.popup__close_type_photo');


function popupAddToggle() {
  popupAddPost.classList.toggle('popup_opened');
}

function popupImgToggle() {
  popupPictureScale.classList.toggle('popup_opened');
}
popupImgBtnClose.addEventListener('click', popupImgToggle);
addPostButton.addEventListener('click', popupAddToggle);
postPopupButtonOff.addEventListener('click', popupAddToggle);

function popupToggle() {
  popupEditProfile.classList.toggle('popup_opened');
  nameInput.value = nickName.textContent;
  statusInput.value = statusAbout.textContent;
}

profileEditButtonOn.addEventListener('click', popupToggle);
profileEditButtonOff.addEventListener('click', popupToggle);

function handleFormSubmit(evt) {
  evt.preventDefault();
  nickName.textContent = nameInput.value;
  statusAbout.textContent = statusInput.value;
  popupToggle();
}

popupTypeProfile.addEventListener('submit', handleFormSubmit);


const selectorElements = document.querySelector('.elements');

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

function addPosts(name, link) {
  const templateCard = document.querySelector('#post-card').content;
  const elementCard = templateCard.querySelector('.element').cloneNode(true);

  elementCard.querySelector('.element__img').addEventListener('click', (evt) => {
    const popupImg = document.querySelector('.popup__img');
    popupImg.src = evt.target.src;
    const popupCpt = document.querySelector('.popup__caption');
    popupCpt.textContent = name;
    popupImgToggle();
  });
  elementCard.querySelector('.element__img').src = link;
  elementCard.querySelector('.element__img').alt = name;
  elementCard.querySelector('.element__delete-post').addEventListener('click', function(evt){
    const delPost = evt.target.closest('.element');
    delPost.remove();
  });

  elementCard.querySelector('.element__name').textContent = name;
  elementCard.querySelector('.element__like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('element__like_active');
  });
  selectorElements.prepend(elementCard);
}

initialCards.forEach((obj) => {
  addPosts(obj.name, obj.link);
})

const popupTypePost = document.querySelector('.popup_type_post');
const titleInput = document.querySelector('.popup__field_type_title');
const linkInput = document.querySelector('.popup__field_type_link');

popupTypePost.addEventListener('submit', (evt) => {
  evt.preventDefault();
  addPosts(titleInput.value, linkInput.value);
  popupAddToggle();
  titleInput.value = '';
  linkInput.value = '';
})






































