export default class Card {
  constructor(name, link, templateSelector, openPopupPictureScale) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._openPopup = openPopupPictureScale;

    this._element = this._getTemplate();

    this._elementImg = this._element.querySelector('.element__img');
    this._elementName = this._element.querySelector('.element__name');
    this._elementDelPost = this._element.querySelector('.element__delete-post');
    this._elementLike = this._element.querySelector('.element__like');

    this._setCardData();
    this._setEventListeners();
  }

  _setCardData() {
    this._elementName.textContent = this._name;
    this._elementImg.src = this._link;
    this._elementImg.alt = this._name;
  }

  _setEventListeners() {
    this._elementImg.addEventListener('click', () => {this._openPopup(this._name, this._link)});
    this._elementLike.addEventListener('click', () => {this._handleLike()});
    this._elementDelPost.addEventListener('click', () => {this._deletePost()});
  }

  _handleLike() {
    this._elementLike.classList.toggle('element__like_active');
  }

  _deletePost() {
    this._element.remove();
    this._element = null;
  }

  _getTemplate() {
    const newCard = document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);
    return newCard;
  }

  getCard() {
    return(this._element);
  }
};
