import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._form = this._popup.querySelector('.popup__body');
    this._arrayInputs = Array.from(this._popup.querySelectorAll('.popup__field'));
  }

  _getInputValues() {
    const popupInputs = this._arrayInputs;
    const popupInputValues = [];
    popupInputs.forEach((input) => {
      popupInputValues.push(input.value);
    });
    return(popupInputValues);
  }

  getFormElement() {
    return(this._form);
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {this._submitForm(evt, this, this._getInputValues())});
  }

  close() {
    super.close();
    this._form.reset();
  }
}
