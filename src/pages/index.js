const formOpenButtonElement = document.querySelector('.profile__edit-button');
const editProfilePopupElement = document.querySelector('.popup_profile');
const formNameElement = editProfilePopupElement.querySelector('.form__field_input_name');
const formBioElement = editProfilePopupElement.querySelector('.form__field_input_bio');
const cardList = document.querySelector('.elements__list');
const addFormButton = document.querySelector('.profile__add-button');
const addFormPopup = document.querySelector('.popup_open_add-form');

import '../pages/index.css'
import Card from '../components/Card.js'
import { initialCards } from '../components/initial-cards.js'
import { FormValidator, config } from '../components/FormValidator.js'
import Section from '../components/Section.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js';

//функция создания карточек


const cardElementsList = new Section({
  items: initialCards,
  renderer: (cardItem) => {
    const imagePopup = new PopupWithImage(cardItem, '.popup_open_background-image')
    const handleCardClick = () => imagePopup.open()
    const card = new Card(cardItem, '.card-template', handleCardClick)
    const cardElement = card.generateCard()

    cardElementsList.addItem(cardElement)
  },
},
  cardList
);

cardElementsList.renderItems()

const addForm = new PopupWithForm({
  handleFormSubmit: (cardItem) => {
    const imagePopup = new PopupWithImage(cardItem, '.popup_open_background-image')
    const handleCardClick = () => imagePopup.open()
    const card = new Card(cardItem, '.card-template', handleCardClick)
    const cardElement = card.generateCard()

    cardElementsList.addItem(cardElement)
  }
},
  '.popup_open_add-form'
);


addFormButton.addEventListener('click', function () {
  addForm.open()
  createCardFormValidation.resetValidation()
});

const profileForm = editProfilePopupElement.querySelector('.form')
const createCardForm = addFormPopup.querySelector('.form')

const ProfileFormValidation = new FormValidator(config, profileForm)
ProfileFormValidation.enableValidation()


const createCardFormValidation = new FormValidator(config, createCardForm)
createCardFormValidation.enableValidation()

const profile = new UserInfo({ nameSelector: '.profile__title', infoSelector: '.profile__subtitle' })


const editProfilePopup = new PopupWithForm({
  handleFormSubmit: (userInfo) => {
    profile.setUserInfo(userInfo)
  }
},
  '.popup_profile'
);

formOpenButtonElement.addEventListener('click', () => {
  editProfilePopup.open()
  const profileInfo = profile.getUserInfo()
  ProfileFormValidation.resetValidation()
  formNameElement.value = profileInfo.name;
  formBioElement.value = profileInfo.info;
});
