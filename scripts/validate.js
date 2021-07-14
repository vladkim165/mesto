const config = {
  formSelector: '.form',
  inputSelector: '.form__field',
  submitButtonSelector: '.form__save-button',
  inactiveButtonClass: 'form__save-button_disabled',
  inputErrorClass: 'form__field_type_error',
  errorClass: 'form__field-error_active'
};

const showInputError = (formElement, inputElement, errorMessage, config) => {

  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  inputElement.classList.add(config.inputErrorClass);
  errorElement.classList.add(config.errorClass);

  errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement, config) => {

  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  inputElement.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorClass);

  errorElement.textContent = '';
};

const isValid = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, config);
  }
  else {
    hideInputError(formElement, inputElement, config);
  }

};

const hasOnlyValidInput = (inputList) => {
  return inputList.every((inputElement) => {
    return inputElement.validity.valid;
  })
}

const toggleButtonState = (inputList, buttonElement, config) => {
  if (hasOnlyValidInput(inputList)) {
    buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.disabled = false;
  } else {
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.disabled = true;
  }
};


const setEventListenersToForm = (formElement, config) => {

  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));

  const buttonElement = formElement.querySelector(config.submitButtonSelector);

  toggleButtonState(inputList, buttonElement, config);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, config);

      toggleButtonState(inputList, buttonElement, config);
    });
  });
};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));

  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    })

    setEventListenersToForm(formElement, config);
  });
};

enableValidation(config);