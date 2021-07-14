const showInputError = (formElement, inputElement, errorMessage, inputErrorClass, errorClass) => {

  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  inputElement.classList.add(inputErrorClass);
  errorElement.classList.add(errorClass);

  errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement, inputErrorClass, errorClass) => {

  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);

  errorElement.textContent = '';
};

const isValid = (formElement, inputElement, inputErrorClass, errorClass) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorClass)
  } else {
    hideInputError(formElement, inputElement, inputErrorClass, errorClass)
  }

};

const hasOnlyValidInput = (inputList) => {
  return inputList.every((inputElement) => {
    return inputElement.validity.valid;
  })
}

const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
  if (hasOnlyValidInput(inputList)) {
    buttonElement.classList.remove(inactiveButtonClass);
  } else {
    buttonElement.classList.add(inactiveButtonClass);
  }
};


const setEventListenersToForm = (formElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass) => {

  const inputList = Array.from(formElement.querySelectorAll(inputSelector));

  const buttonElement = formElement.querySelector(submitButtonSelector);

  toggleButtonState(inputList, buttonElement, inactiveButtonClass);
  
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
    isValid(formElement, inputElement, inputErrorClass, errorClass);

    toggleButtonState(inputList, buttonElement, inactiveButtonClass);
    });  
  });
};

const enableValidation = ({ formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass }) => {
  const formList = Array.from(document.querySelectorAll(formSelector));

  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    })
      
  setEventListenersToForm(formElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass);
  });
};

enableValidation({
  formSelector: '.form',
  inputSelector: '.form__field',
  submitButtonSelector: '.form__save-button',
  inactiveButtonClass: 'form__save-button_disabled',
  inputErrorClass: 'form__field_type_error',
  errorClass: 'form__field-error_active'
});