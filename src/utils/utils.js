import Card from '../components/Card.js'
import { initialCards } from '../components/initial-cards.js'
import { FormValidator } from '../components/FormValidator.js'
import Section from '../components/Section.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js';
import {config} from './constants.js'

import { cardList, profileForm, createCardForm } from './constants.js'

export { imagePopup, cardElementsList, addForm, ProfileFormValidation, createCardFormValidation, profile, editProfilePopup }

const imagePopup = new PopupWithImage ('.popup_open_background-image')

const createCard = (item) => {
  const card = new Card(item, '.card-template', () => imagePopup.open(item))
  return card.generateCard()
}

const cardElementsList = new Section({
  items: initialCards,
  renderer: (cardItem) => {
    const cardElement = createCard(cardItem)

    cardElementsList.addItem(cardElement)
  },
},
  cardList
);

const addForm = new PopupWithForm({
  handleFormSubmit: (cardItem) => {
    const cardElement = createCard(cardItem)

    cardElementsList.addItem(cardElement)
  }
},
  '.popup_open_add-form'
);

const ProfileFormValidation = new FormValidator(config, profileForm)

const createCardFormValidation = new FormValidator(config, createCardForm)

const profile = new UserInfo({ nameSelector: '.profile__title', infoSelector: '.profile__subtitle' })

const editProfilePopup = new PopupWithForm({
  handleFormSubmit: (userInfo) => {
    profile.setUserInfo(userInfo)
  }
},
  '.popup_profile'
);


