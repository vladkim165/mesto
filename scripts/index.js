const formOpenButtonElement = document.querySelector('.profile__edit-button');
const popupElement = document.querySelector('.popup');
const formCloseButtonElement = popupElement.querySelector('.form__close-button');
const formNameElement = popupElement.querySelector('.form__field_input_name');
const formBioElement = popupElement.querySelector('.form__field_input_bio');
const userName = document.querySelector('.profile__title');
const userBio = document.querySelector('.profile__subtitle');

const openPopup = function () {
  popupElement.classList.add('popup_opened');
  formNameElement.value = userName.textContent;
  formBioElement.value = userBio.textContent;
}

const closePopup = function () {
  popupElement.classList.remove('popup_opened');
}

const closePopupByClickOnOverlay = function (event) {
  if (event.target !== event.currentTarget) {
    return;
  }

  closePopup()
}

//функции, открывающие и закрывающие(по клику на крестик и оверлей) попап


const editProfileInfo = function (event) {
  event.preventDefault();

  userName.textContent = formNameElement.value;
  userBio.textContent = formBioElement.value;

  closePopup();
}

//функция, меняющая данные на странице после сабмита в попапе


formOpenButtonElement.addEventListener('click', openPopup);
formCloseButtonElement.addEventListener('click', closePopup);
popupElement.addEventListener('click', closePopupByClickOnOverlay);
popupElement.addEventListener('submit', editProfileInfo);


//добавлены слушатели событий на кнопки


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function renderCard(element) {
  const cardList = document.querySelector('.elements__list');
  const cardTemplateContent = document.querySelector('.card-template').content;
  const cardElement = cardTemplateContent.cloneNode(true);

  cardElement.querySelector('.element__image').src = element.link;
  cardElement.querySelector('.element__image').alt = element.name;
  cardElement.querySelector('.element__title').textContent = element.name;

  setEventListeners(cardElement);

  cardList.prepend(cardElement);
}

function renderCards(initialCards) {
  initialCards.forEach(renderCard);
}

renderCards(initialCards);

// Добавили функцию рендера карточек, отрендерили объекты из массива

const addFormButton = document.querySelector('.profile__add-button');
const addFormPopup = document.querySelector('.popup_open_add-form');
const closeAddFormButton = addFormPopup.querySelector('.form__close-button');
const formPlaceNameElement = addFormPopup.querySelector('.form__field_input_place-name');
const formLinkElement = addFormPopup.querySelector('.form__field_input_link');
const cardName = document.querySelector('.element__title');
const cardImage = document.querySelector('.element__image');

const openAddForm = function () {
  addFormPopup.classList.add('popup_opened');
}

const closeAddForm = function () {
  addFormPopup.classList.remove('popup_opened');
}

const closeAddFormByClickOnOverlay = function (event) {
  if (event.target !== event.currentTarget) {
    return;
  }

  closeAddForm()
}

addFormButton.addEventListener('click', openAddForm);
closeAddFormButton.addEventListener('click', closeAddForm);
addFormPopup.addEventListener('click', closeAddFormByClickOnOverlay);


//функция добавления новой карточки в дом дерево
const addNewCard = function (event) {
  event.preventDefault();
  const cardList = document.querySelector('.elements__list');
  const cardTemplateContent = document.querySelector('.card-template').content;
  const cardElement = cardTemplateContent.cloneNode(true);


  cardElement.querySelector('.element__image').src = formLinkElement.value
  cardElement.querySelector('.element__image').alt = formPlaceNameElement.value
  cardElement.querySelector('.element__title').textContent = formPlaceNameElement.value


  setEventListeners(cardElement);

  cardList.prepend(cardElement);

  formLinkElement.value = '';
  formPlaceNameElement.value = '';
  closeAddForm();
}

addFormPopup.addEventListener('submit', addNewCard);

//обьявим функции при клике на кнопки карточек

function handleLikeCard(event) {
  event.target.closest('.element').querySelector('.element__like-button').classList.toggle('element__like-button_active')
  console.log('like');
}



function handleDeleteCard(event) {
  event.target.closest('.element').remove();
}

function openImagePopup(event) {
  const cardImage = event.target.closest('.element').querySelector('.element__image');
  const cardTitle = event.target.closest('.element').querySelector('.element__title');
  popupBackgroundImage.src = cardImage.src;
  popupBackgroundImage.alt = cardImage.alt;
  popupTitle.textContent = cardTitle.textContent;

  imagePopup.classList.add('popup_opened');
}

//обьявим функцию обработчика событий при клике на кнопки карточек
function setEventListeners(cardElement) {
  cardElement.querySelector('.element__like-button').addEventListener('click', handleLikeCard);
  cardElement.querySelector('.element__delete-button').addEventListener('click', handleDeleteCard);
  cardElement.querySelector('.element__image').addEventListener('click', openImagePopup);
}
//объявим функции-действия при срабатывании клика на определённую кнопку


const imagePopup = document.querySelector('.popup_open_background-image');
const popupBackgroundImage = document.querySelector('.popup__background-image');
const popupTitle = document.querySelector('.popup__image-title');



function closeImagePopup() {
  imagePopup.classList.remove('popup_opened');
}

const closeImagePopupByClickOnOverlay = function (event) {
  if (event.target !== event.currentTarget) {
    return;
  }

  closeImagePopup()
}

imagePopup.querySelector('.popup__close-button').addEventListener('click', closeImagePopup);
imagePopup.addEventListener('click', closeImagePopupByClickOnOverlay);


