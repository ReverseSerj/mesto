export default class FormValidation {
  constructor(options, form) {
    this._options = options;
    this._form = form;
    this._inputs = Array.from(this._form.querySelectorAll(this._options.popupField));
    this._button = this._form.querySelector(this._options.popupSubmitButtonOn);
  };

  enableValidation() {
    this._validListennerFields();
  };

  _validListennerFields() {
    this._inputs.forEach((field)=>{
      field.addEventListener('input', (evt) => {
        this._handleEditFields(evt.target, false);
        this._validationButton();
      });
    });
  };

  _handleEditFields(field, emptyfield) {
    const validField = field.validity.valid;
    const fieldSection = field.parentNode;
    const fieldError = fieldSection.querySelector(this._options.fieldErrorTextOff);
    fieldError.textContent = field.validationMessage;
    if(validField || (emptyfield && field.value === '')) {
      field.classList.remove(this._options.popupInvalidField);
      fieldError.classList.remove(this._options.fieldErrorTextOn);
    } else {
      field.classList.add(this._options.popupInvalidField);
      fieldError.classList.add(this._options.fieldErrorTextOn);
    }
  };

  _validationButton() {
    const fieldsIsValid = this._inputs.every((input) => {return(input.validity.valid);});
    if(fieldsIsValid){
      this._popupButtonActive();
    }else{
      this._popupButtonInActive();
    };
  };

  _popupButtonActive() {
    this._button.removeAttribute('disabled');
    this._button.classList.remove(this._options.popupSubmitButtonOff);
  };

  _popupButtonInActive() {
    this._button.setAttribute('disabled', true);
    this._button.classList.add(this._options.popupSubmitButtonOff);
  };

  validationForm() {
    this._validationButton();
    this._inputs.forEach((field) => {
      this._handleEditFields(field, true);
    });
  };
}
