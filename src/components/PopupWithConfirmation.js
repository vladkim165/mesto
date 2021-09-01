import Popup from './Popup.js'

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
    this._form = this._popup.querySelector('.form')
  }

  handleFormSubmit(handleSubmit) {
    const submitEvent = (evt) => {
      evt.preventDefault()
      handleSubmit()
      this._form.removeEventListener('submit', submitEvent)
    }
    this._form.addEventListener('submit', submitEvent)
  }
}