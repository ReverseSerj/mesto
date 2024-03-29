export default class Popup {
  constructor(popupSelector) {
   this._popup = document.querySelector(popupSelector);
   this._closeButton = this._popup.querySelector('.popup__close');
   this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(anyKey) {
    if(anyKey.key === 'Escape'){
      this.close();
    }
  }

  setEventListeners() {
    this._closeButton.addEventListener('click', () => {this.close()});
    this._popup.addEventListener('click', (evt) => {
      if(evt.target.classList.contains('popup')) {
        this.close();
      };
    });
  }
}
