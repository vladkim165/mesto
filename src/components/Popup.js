export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector)
    this._closeByEsc = (evt) => {
      this._handleEscClose(evt);
    };
    this._container = this._popup.querySelector('.popup__container')
    this.setEvents = () => this.setEventListeners()
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('click', this.setEvents);
    document.addEventListener('keydown', this._closeByEsc);

    if (this._container) this._container.classList.add('popup__container_opened');
  }

  close() {
    document.removeEventListener('keydown', this._closeByEsc)
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('click', this.setEvents)

    if (this._container) this._container.classList.remove('popup__container_opened');
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close()
    }
  }

  setEventListeners() {
    this._popup.querySelector('.popup__close-button').addEventListener('click', () => {
      this.close()
    })

    this._popup.addEventListener('click', (evt) => {
      if (evt.target === evt.currentTarget)
        this.close()
    });
  }
}