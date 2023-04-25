export default class Card {
  constructor(obj, templateSelector, openPopupPictureScale, myUserId, delCardCallBack) {
    this._name = obj.name;
    this._link = obj.link;
    this._timeCreate = obj.createdAt;
    this._owner = obj.owner;
    this._id = obj._id;
    this._likes = obj.likes;

    this._delCardCallBack = delCardCallBack;

    this._isOwner = (myUserId === this._owner._id);
    this._isLike = (this._likes.some(item => {
      return((myUserId === item._id));
    }))

    this._templateSelector = templateSelector;
    this._openPopup = openPopupPictureScale;

    this._element = this._getTemplate();

    this._elementImg = this._element.querySelector('.element__img');
    this._elementName = this._element.querySelector('.element__name');
    this._elementDelPost = this._element.querySelector('.element__delete-post');
    if(!this._isOwner) {
      this._elementDelPost.remove();
    }
    this._elementLike = this._element.querySelector('.element__like');
    this._likeQuantity = this._element.querySelector('.element__like-quantity');

    this._setCardData();
    this._setEventListeners();
  }

  _setCardData() {
    this._elementName.textContent = this._name;
    this._elementImg.src = this._link;
    this._elementImg.alt = this._name;
    this._likeQuantity.textContent = this._likes.length;
  }

  _setEventListeners() {
    this._elementImg.addEventListener('click', () => {this._openPopup(this._name, this._link)});
    this._elementLike.addEventListener('click', () => {this._handleLike()});
    if(this._isOwner) {
      this._elementDelPost.addEventListener('click', this._deletePost.bind(this));
    };
  }

  _handleLike() {
    this._elementLike.classList.toggle('element__like_active');
  }

  _deletePost() {
    this._delCardCallBack(this);
  }

  _getTemplate() {
    const newCard = document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);
    return newCard;
  }

  getCard() {
    return(this._element);
  }

  removeCard() {
    this._element.remove();
  }

  getId() {
    return(this._id);
  }
};
