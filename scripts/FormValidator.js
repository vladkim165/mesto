export {config, FormValidation}

const config = {
  formSelector: '.form',
  inputSelector: '.form__field',
  submitButtonSelector: '.form__save-button',
  inactiveButtonClass: 'form__save-button_disabled',
  inputErrorClass: 'form__field_type_error',
  errorClass: 'form__field-error_active',
  hiddenErrorClass: '.form__field-error'
};

class FormValidation {
  _formElement
  _formSelector
  _inputSelector
  _submitButtonSelector
  _inactiveButtonClass
  _inputErrorClass
  _errorClass
  _hiddenErrorClass
  _buttonElement
  _inputList

  constructor(config, formElement) {
    this._formElement = formElement;
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._hiddenErrorClass = config.hiddenErrorClass;
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);

    inputElement.classList.add(this._inputErrorClass);
    errorElement.classList.add(this._errorClass);

    errorElement.textContent = errorMessage;
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);

    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);

    errorElement.textContent = '';
  }

  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    }
    else {
      this._hideInputError(inputElement);
    }
  }

  _hasOnlyValidInput() {
    return this._inputList.every((inputElement) => {
      return inputElement.validity.valid;
    })
  }

  _toggleButtonState() {
    if (this._hasOnlyValidInput()) {
      // this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);

      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.disabled = false;
    } else {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.disabled = true;
    }
  }

  _setEventListenersToForm() {
    // this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    // this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);

    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
        this._isValid(inputElement);

        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._setEventListenersToForm()
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    })
  }
}