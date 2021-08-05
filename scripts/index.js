const formOpenButtonElement = document.querySelector('.profile__edit-button');
const editProfilePopupElement = document.querySelector('.popup_profile');
const editProfileFormCloseButtonElement = editProfilePopupElement.querySelector('.popup__close-button');
const formNameElement = editProfilePopupElement.querySelector('.form__field_input_name');
const formBioElement = editProfilePopupElement.querySelector('.form__field_input_bio');
const userName = document.querySelector('.profile__title');
const userInfo = document.querySelector('.profile__subtitle');
const cardList = document.querySelector('.elements__list');
const addFormButton = document.querySelector('.profile__add-button');
const addFormPopup = document.querySelector('.popup_open_add-form');
const closeAddFormButton = addFormPopup.querySelector('.popup__close-button');
const formPlaceNameElement = addFormPopup.querySelector('.form__field_input_place-name');
const formLinkElement = addFormPopup.querySelector('.form__field_input_link');

import Card from '../scripts/Card.js'
import { initialCards } from '../scripts/initial-cards.js'
import { FormValidator, config } from '../scripts/FormValidator.js'

const createCard = (cardData) => {
  const card = new Card(cardData, '.card-template', handleCardClick)
  const cardElement = card.generateCard()
  return cardElement
}

//функция создания карточек

initialCards.forEach((item) => {
  cardList.prepend(createCard(item))
})

//вставили карточки из массива в DOM

const profileForm = editProfilePopupElement.querySelector('.form')
const createCardForm = addFormPopup.querySelector('.form')

const ProfileFormValidation = new FormValidator(config, profileForm)
ProfileFormValidation.enableValidation()


const createCardFormValidation = new FormValidator(config, createCardForm)
createCardFormValidation.enableValidation()


//включили валидацию форм

// const generateColor = function() {
//   let letters = '0123456789ABCDEF';
//   let color = '#';
//   for (let i = 0; i < 6; i++) {
//   color += letters[Math.floor(Math.random() * 16)];
// }
// return color;
// };

const closePopupByClickOnEsc = (evt) => {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByClickOnEsc);

  const container = popup.querySelector('.popup__container')
  if (container) container.classList.add('popup__container_opened');
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByClickOnEsc);


  const container = popup.querySelector('.popup__container')
  if (container) container.classList.remove('popup__container_opened');
}

// //функции для увеличения/уменьшения размеров контейнера при открытии/закрытии попапа


function closePopupByClickOnOverlay(event) {
  if (event.target === event.currentTarget)
    closePopup(event.target);
}

// универсальные функции открытия и закрытия попапа


function openProfilePopup() {
  formNameElement.value = userName.textContent;
  formBioElement.value = userInfo.textContent;
  // popupContainer.style.background = generateColor();

  ProfileFormValidation.resetValidation()
  
  openPopup(editProfilePopupElement);
}

// функции, открывающие и закрывающие попап профиля


function editProfileInfo(event) {
  event.preventDefault();

  userName.textContent = formNameElement.value;
  userInfo.textContent = formBioElement.value;

  closePopup(editProfilePopupElement);
}
// функция, меняющая данные на странице после сабмита в попапе

formOpenButtonElement.addEventListener('click', openProfilePopup);

editProfileFormCloseButtonElement.addEventListener('click', function () {
  closePopup(editProfilePopupElement);
});

editProfilePopupElement.addEventListener('click', closePopupByClickOnOverlay);

editProfilePopupElement.addEventListener('submit', function (event) {
  editProfileInfo(event);
})

// Добавили функцию рендера карточек, отрендерили объекты из массива


function resetFormInputs(popup) {
  popup.querySelector('.form').reset();
}

addFormButton.addEventListener('click', function () {
  resetFormInputs(addFormPopup);

  createCardFormValidation.resetValidation()
  openPopup(addFormPopup);

});
closeAddFormButton.addEventListener('click', function () {
  closePopup(addFormPopup);
});
addFormPopup.addEventListener('click', closePopupByClickOnOverlay);


//функция добавления новой карточки в дом дерево
const addNewCard = function (event) {
  event.preventDefault();
  const item = { name: formPlaceNameElement.value, link: formLinkElement.value };

  cardList.prepend(createCard(item))

  closePopup(addFormPopup);
}

addFormPopup.addEventListener('submit', addNewCard);

const imagePopup = document.querySelector('.popup_open_background-image');
const popupBackgroundImage = document.querySelector('.popup__background-image'); 
const popupTitle = document.querySelector('.popup__image-title'); 

function handleCardClick (name, link) {
  popupBackgroundImage.src = link; 
  popupBackgroundImage.alt = name; 
  popupTitle.textContent = name; 

  openPopup(imagePopup);
}

imagePopup.addEventListener('click', closePopupByClickOnOverlay);

imagePopup.querySelector('.popup__close-button').addEventListener('click', () => {
  closePopup(imagePopup)
})

//функция открытия поп-апа с большой картинкой
