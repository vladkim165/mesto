const formOpenButtonElement = document.querySelector('.profile__edit-button');
const editProfilePopupElement = document.querySelector('.popup');
const editProfileFormCloseButtonElement = editProfilePopupElement.querySelector('.form__close-button');
const formNameElement = editProfilePopupElement.querySelector('.form__field_input_name');
const formBioElement = editProfilePopupElement.querySelector('.form__field_input_bio');
const userName = document.querySelector('.profile__title');
const userInfo = document.querySelector('.profile__subtitle');

import Card from '../scripts/Card.js'
import { initialCards } from '../scripts/initial-cards.js'
import { FormValidation, config } from '../scripts/FormValidator.js'

initialCards.forEach((item) => {
  const card = new Card(item, '.card-template')
  const cardList = document.querySelector('.elements__list');

  const cardElement = card.generateCard()

  cardList.prepend(cardElement)
})

const formList = Array.from(document.querySelectorAll(config.formSelector));

formList.forEach((formElement) => {
  const validationTurnedOn = new FormValidation(config, formElement)
  validationTurnedOn.enableValidation();
})


// const generateColor = function() {
//   let letters = '0123456789ABCDEF';
//   let color = '#';
//   for (let i = 0; i < 6; i++) {
//   color += letters[Math.floor(Math.random() * 16)];
// }
// return color;
// };

const closePopupByClickOnEsc = (evt) => {

  const openedPopup = document.querySelector('.popup_opened');

  if (evt.key === "Escape") {
    closePopup(openedPopup);
  }
}

export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByClickOnEsc);

  const container = popup.querySelector('.popup__container')
  if (container) container.classList.add('popup__container_opened');
};

function hidePopUpError(popup) {
  const formFields = popup.querySelectorAll(config.inputSelector);
  const inputErrors = popup.querySelectorAll(config.hiddenErrorClass);

  inputErrors.forEach((inputError) => {
    inputError.classList.remove(config.errorClass);
  });

  formFields.forEach((formField) => {
    formField.classList.remove(config.inputErrorClass);
  });
}

export function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByClickOnEsc);


  const container = popup.querySelector('.popup__container')
  if (container) container.classList.remove('popup__container_opened');
}

// //функции для увеличения/уменьшения размеров контейнера при открытии/закрытии попапа


export function closePopupByClickOnOverlay(event) {
  if (event.target === event.currentTarget)
    closePopup(event.target);
}

// универсальные функции открытия и закрытия попапа


function openProfilePopup() {
  formNameElement.value = userName.textContent;
  formBioElement.value = userInfo.textContent;
  // popupContainer.style.background = generateColor();

  hidePopUpError(editProfilePopupElement);
  const validationTurnedOn = new FormValidation(config, editProfilePopupElement)
  validationTurnedOn.turnOffSubmitButton()
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

const addFormButton = document.querySelector('.profile__add-button');
const addFormPopup = document.querySelector('.popup_open_add-form');
const closeAddFormButton = addFormPopup.querySelector('.form__close-button');


function resetFormInputs(popup) {
  popup.querySelector('.form').reset();
}

addFormButton.addEventListener('click', function () {
  resetFormInputs(addFormPopup);
  hidePopUpError(addFormPopup);

  const validationTurnedOn = new FormValidation(config, addFormPopup)
  validationTurnedOn.turnOffSubmitButton()
  openPopup(addFormPopup);

});
closeAddFormButton.addEventListener('click', function () {
  closePopup(addFormPopup);
});
addFormPopup.addEventListener('click', closePopupByClickOnOverlay);


//функция добавления новой карточки в дом дерево
const addNewCard = function (event) {
  event.preventDefault();

  const formPlaceNameElement = addFormPopup.querySelector('.form__field_input_place-name');
  const formLinkElement = addFormPopup.querySelector('.form__field_input_link');
  const item = { name: formPlaceNameElement.value, link: formLinkElement.value };

  const card = new Card(item, '.card-template')
  const cardList = document.querySelector('.elements__list');

  const cardElement = card.generateCard()

  cardList.prepend(cardElement)

  closePopup(addFormPopup);
}

addFormPopup.addEventListener('submit', function (event) {
  addNewCard(event);
});