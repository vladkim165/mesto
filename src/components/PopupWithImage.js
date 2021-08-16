import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._backgroundImage = this._popup.querySelector('.popup__background-image');
    this._popupTitle = this._popup.querySelector('.popup__image-title');
  }
  open(data) {
    this._backgroundImage.src = data.link;
    this._backgroundImage.alt = data.name;
    this._popupTitle.textContent = data.name;
    super.open()
  }
}