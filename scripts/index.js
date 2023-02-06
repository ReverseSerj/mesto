const profileEditButtonOn = document.querySelector('.profile__edit');
const profileEditButtonOff = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');
let nameInput = document.querySelector('.popup__field_type_name');
let statusInput = document.querySelector('.popup__field_type_status');
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
