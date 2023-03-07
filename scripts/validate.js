const validationCfg = {
  popupsBody: '.popup__body',
  popupSubmitButtonOn: '.popup__submit',
  popupSubmitButtonOff: '.popup__submit_inactive',
  popupField: '.popup__field',
  fieldErrorTextOff: '.popup__field-error',
  fieldErrorTextOn: '.popup__field-error_active',
  popupInvalidField: '.popup__field_invalid'
};

const popups = document.querySelectorAll(validationCfg.popupsBody);
popups.forEach((popup) =>{
  const popupButton = popup.querySelector('.popup__submit');
  const popupFields = popup.querySelectorAll('.popup__field');
  validListennerFields(popupFields, popupButton);
});

function validationPopup(popup, validationCfg) {
  const popupFields = popup.querySelectorAll('.popup__field');
  const popupButton = popup.querySelector('.popup__submit');
  validationButton(popupButton, Array.from(popupFields));
}

//Фун-я валидности импутов
function handleEditFields(field) {
  const validField = field.validity.valid;
  const fieldSection = field.parentNode;
  const fieldError = fieldSection.querySelector('.popup__field-error');
  if(validField) {
    field.classList.remove('popup__field_invalid');
    fieldError.classList.remove('popup__field-error_active');
  } else {
    field.classList.add('popup__field_invalid');
    fieldError.classList.add('popup__field-error_active');
  }
}

//Фун-я  вкл кнопки
function popupButtonActive(btn) {
  btn.removeAttribute('disbled');
  btn.classList.remove('popup__submit_inactive');
}

//Фун-я выкл кнопки
function popupButtonInActive(btn) {
  btn.setAttribute('disbled', true);
  btn.classList.add('popup__submit_inactive');
}

//Фун-я проверки состояния и переключения кнопки
function validationButton(btn, inputs) {
  const fieldsIsValid = inputs.every((input) => {return(input.validity.valid);});
  if(fieldsIsValid) {
    popupButtonActive(btn);
  }else{
    popupButtonInActive(btn);
  };
}

/* сделать отдельную фун-ю для установления слушателей валидации полей popup c 5-8 cтроку
а у validationPopup убрать установку слушателей, оставить только валидацию, в самое начало добавить поиск всех форм, всех полей и на все поля добавить слушателя*/

//фун-я для установления слушателей валидации полей popup
function validListennerFields(fields, popupButton) {
  fields.forEach((field)=>{
    field.addEventListener('input', (evt) => {
      handleEditFields(evt.target);
      validationButton(popupButton, Array.from(fields));
    });
  });
};



