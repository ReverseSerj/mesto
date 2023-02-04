const profileEditButtonOn = document.querySelector('.profile__edit');
const profileEditButtonOff = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');
let popupFields = document.querySelectorAll('.popup__field');
let nameInput = popupFields[0];
let statusInput = popupFields[1];
let saveChange = document.querySelector('.popup__submit');
let nickName = document.querySelector('.profile__nickname');
let statusAbout = document.querySelector('.profile__status');
let popupBody = document.querySelector('.popup__body');

function popupToggle() {
  popup.classList.toggle('popup_opened');
  nameInput.value = nickName.textContent;
  statusInput.value = statusAbout.textContent;
}

profileEditButtonOn.addEventListener('click', popupToggle);
profileEditButtonOff.addEventListener('click', popupToggle);

function handleFormSubmit (evt) {
  evt.preventDefault();
  nickName.textContent = nameInput.value;
  statusAbout.textContent = statusInput.value;
  popupToggle();
}

popupBody.addEventListener('submit', handleFormSubmit);
