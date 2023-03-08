function enableValidation(options) {
  const popups = document.querySelectorAll(options.popupsBody);
  popups.forEach((popup) => {
    const popupButton = popup.querySelector(options.popupSubmitButtonOn);
    const popupFields = popup.querySelectorAll(options.popupField);
    validListennerFields(popupFields, popupButton, options);
  });
};

function validationPopup(popup, options) {
  const popupFields = popup.querySelectorAll(options.popupField);
  const popupButton = popup.querySelector(options.popupSubmitButtonOn);
  validationButton(popupButton, Array.from(popupFields), options);
}

//Фун-я валидности импутов
function handleEditFields(field, options) {
  const validField = field.validity.valid;
  const fieldSection = field.parentNode;
  const fieldError = fieldSection.querySelector(options.fieldErrorTextOff);
  if(validField) {
    field.classList.remove(options.popupInvalidField);
    fieldError.classList.remove(options.fieldErrorTextOn);
  } else {
    field.classList.add(options.popupInvalidField);
    fieldError.classList.add(options.fieldErrorTextOn);
  }
}

//Фун-я  вкл кнопки
function popupButtonActive(btn, options) {
  btn.removeAttribute('disbled');
  btn.classList.remove(options.popupSubmitButtonOff);
}

//Фун-я выкл кнопки
function popupButtonInActive(btn, options) {
  btn.setAttribute('disbled', true);
  btn.classList.add(options.popupSubmitButtonOff);
}

//Фун-я проверки состояния и переключения кнопки
function validationButton(btn, inputs, options) {
  const fieldsIsValid = inputs.every((input) => {return(input.validity.valid);});
  if(fieldsIsValid) {
    popupButtonActive(btn, options);
  }else{
    popupButtonInActive(btn, options);
  };
}

//фун-я для установления слушателей валидации полей popup
function validListennerFields(fields, popupButton, options) {
  fields.forEach((field)=>{
    field.addEventListener('input', (evt) => {
      handleEditFields(evt.target, options);
      validationButton(popupButton, Array.from(fields), options);
    });
  });
};

function isValidationPopup(popup, options) {
  const popupFields = Array.from(popup.querySelectorAll(options.popupField));
  const fieldsIsValid = popupFields.every((input) => {return(input.validity.valid);});
  return fieldsIsValid;
};

