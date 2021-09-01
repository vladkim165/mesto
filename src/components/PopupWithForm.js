import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
  constructor({ handleFormSubmit }, popupSelector) {
    super(popupSelector)
    this._form = this._popup.querySelector('.form')
    this._handleFormSubmit = handleFormSubmit
    this._inputList = this._form.querySelectorAll('.form__field');
    this.submitEvent = (evt) => {
      evt.preventDefault();

      this._handleFormSubmit(this._getInputValues());
    }
  }

  _getInputValues() {
    this._formValues = {}


    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value
    });
    return this._formValues
  }

  setEventListeners() {
    super.setEventListeners()
    this._form.addEventListener('submit', this.submitEvent)
  }

  close() {
    super.close();
    this._form.reset()
  }
}