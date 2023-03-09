function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleKeydownEscape);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleKeydownEscape);
}

function openPopupProfile(popup, options) {
  popupEditProfileName.value = profileName.textContent;
  popupEditProfileStatus.value = profileStatus.textContent;
  validationPopup(popup, options);
  openPopup(popup);
}

function openPopupPost(popup, options) {
  validationPopup(popup, options);
  openPopup(popup);
}

btnEditProfile.addEventListener('click', () => {openPopupProfile(popupEditProfile, validationCfg)});
btnAddPost.addEventListener('click', () => {openPopupPost(popupAddPost, validationCfg)});

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

//Функция создания карточки
function createPost(name, link) {
  const newCard = elementCard.cloneNode(true);

  const elementImg = newCard.querySelector('.element__img');
  const elementDelPost = newCard.querySelector('.element__delete-post');
  const elementLike = newCard.querySelector('.element__like');
  const elementName = newCard.querySelector('.element__name');

  elementName.textContent = name;
  elementImg.src = link;
  elementImg.alt = name;

  elementImg.addEventListener('click', () => openPopupPictureScale(name, link))
  elementLike.addEventListener('click', handleLike);
  elementDelPost.addEventListener('click', deletePost);
  return(newCard);
}

//Функция добавления карточки
function addPost(name, link) {
  const newCard = createPost(name, link);
  elementContainer.prepend(newCard);
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

//Функция Лайк
function handleLike(evt) {
  const elementLike = evt.target;
  elementLike.classList.toggle('element__like_active');
}

//Удаление карточки
function deletePost(evt){
  const delPost = evt.target.closest('.element');
  delPost.remove();
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
enableValidation(validationCfg);
























