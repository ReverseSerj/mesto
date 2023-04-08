import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._picture = this._popup.querySelector('.popup__img');
    this._caption = this._popup.querySelector('.popup__caption');
  }

  open(namePost, image) {
    this._picture.src = image;
    this._picture.alt = namePost;
    this._caption.textContent = namePost;
    super.open();
  }
}
