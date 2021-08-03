import { openPopup, closePopupByClickOnOverlay, closePopup } from "./index.js"
const imagePopup = document.querySelector('.popup_open_background-image');
export default class Card {
  _name
  _link
  _cardSelector

  constructor(data, cardSelector) {
    this._name = data.name
    this._link = data.link
    this._cardSelector = cardSelector
  }

  _getTemplate() {
    const cardTemplateContent = document.querySelector(this._cardSelector).content
    const cardData = cardTemplateContent.querySelector('.card').cloneNode(true)

    return cardData
  }

  generateCard() {
    this._element = this._getTemplate()

    this._element.querySelector('.element__title').alt = this._name;
    this._element.querySelector('.element__title').textContent = this._name;
    this._element.querySelector('.element__image').src = this._link;

    this._setEventListeners();

    return this._element
  }

  _setEventListeners() {
    this._element.querySelector('.element__like-button').addEventListener('click', () => {
      this._likeCard()
    })

    this._element.querySelector('.element__delete-button').addEventListener('click', () => {
      this._deleteCard()
    })

    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._openImagePopup()
    })

    imagePopup.addEventListener('click', closePopupByClickOnOverlay);

    imagePopup.querySelector('.popup__close-button').addEventListener('click', () => {
      this._closeImagePopup()
    })
  }

  _likeCard() {
    this._element.querySelector('.element__like-button').classList.toggle('element__like-button_active')
  }

  _deleteCard() {
    this._element.remove();
  }

  _openImagePopup() {
    const cardImage = this._element.querySelector('.element__image');
    const cardTitle = this._element.querySelector('.element__title');
    const popupBackgroundImage = document.querySelector('.popup__background-image');
    const popupTitle = document.querySelector('.popup__image-title');

    popupBackgroundImage.src = cardImage.src;
    popupBackgroundImage.alt = cardImage.alt;
    popupTitle.textContent = cardTitle.textContent;
    openPopup(imagePopup);
  }

  _closeImagePopup() {
    closePopup(imagePopup)
  }

}
