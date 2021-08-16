import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
  constructor(data, popupSelector) {
    super(popupSelector);
    this._backgroundImage = this._popup.querySelector('.popup__background-image');
    this._popupTitle = this._popup.querySelector('.popup__image-title');
    this._name = data.name
    this._link = data.link
  }
  open() {
    this._backgroundImage.src = this._link;
    this._backgroundImage.alt = this._name;
    this._popupTitle.textContent = this._name;
    super.open()
  }
}