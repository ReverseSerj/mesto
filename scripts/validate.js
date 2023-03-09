function enableValidation(options) {
  const popups = document.querySelectorAll(options.popupsBody);
  popups.forEach((popup) => {
    const popupButton = popup.querySelector(options.popupSubmitButtonOn);
    const popupFields = popup.querySelectorAll(options.popupField);
    validListennerFields(popupFields, popupButton, options);
  });
};

function validationPopup(popup, options) {
  const popupFields = Array.from(popup.querySelectorAll(options.popupField));
  const popupButton = popup.querySelector(options.popupSubmitButtonOn);
  validationButton(popupButton, popupFields, options);
  popupFields.forEach((field) => {
    handleEditFields(field, options, true);
  });
}

//Фун-я валидности импутов
function handleEditFields(field, options, emptyfield) {
  const validField = field.validity.valid;
  const fieldSection = field.parentNode;
  const fieldError = fieldSection.querySelector(options.fieldErrorTextOff);
  fieldError.textContent = field.validationMessage;
  if(validField || (emptyfield && field.value === '')) {
    field.classList.remove(options.popupInvalidField);
    fieldError.classList.remove(options.fieldErrorTextOn);
  } else {
    field.classList.add(options.popupInvalidField);
    fieldError.classList.add(options.fieldErrorTextOn);
  }
}

//Фун-я  вкл кнопки
function popupButtonActive(btn, options) {
  btn.removeAttribute('disabled');
  btn.classList.remove(options.popupSubmitButtonOff);
}

//Фун-я выкл кнопки
function popupButtonInActive(btn, options) {
  btn.setAttribute('disabled', true);
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
      handleEditFields(evt.target, options, false);
      validationButton(popupButton, Array.from(fields), options);
    });
  });
};
