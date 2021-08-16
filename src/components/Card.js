export default class Card {
  _name
  _link
  _cardSelector

  constructor(data, cardSelector, handleCardClick) {
    this._name = data.name
    this._link = data.link
    this._cardSelector = cardSelector
    this._handleCardClick = handleCardClick
  }

  _getTemplate() {
    const cardTemplateContent = document.querySelector(this._cardSelector).content
    const cardData = cardTemplateContent.querySelector('.card').cloneNode(true)

    return cardData
  }

  generateCard() {
    this._element = this._getTemplate()

    this._element.querySelector('.element__image').alt = this._name;
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
      this._handleCardClick()
    })
  }

  _likeCard() {
    this._element.querySelector('.element__like-button').classList.toggle('element__like-button_active')
  }

  _deleteCard() {
    this._element.remove();
  }

}
