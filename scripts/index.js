const formOpenButtonElement = document.querySelector('.profile__edit-button');
const popupElement = document.querySelector('.popup');
const formCloseButtonElement = popupElement.querySelector('.form__close-button');
const formNameElement = popupElement.querySelector('.form__field_input_name');
const formBioElement = popupElement.querySelector('.form__field_input_bio');
const userName = document.querySelector('.profile__title');
const userInfo = document.querySelector('.profile__subtitle');



function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function closePopupByClickOnOverlay(event, popup) {
  if (event.target === event.currentTarget)
    closePopup(popupElement);
}
// универсальные функции открытия и закрытия попапа


function openProfilePopup() {
  formNameElement.value = userName.textContent;
  formBioElement.value = userInfo.textContent;


}

function closeProfilePopup() {
  formNameElement.value = userName.textContent;
  formBioElement.value = userInfo.textContent;


}
// функции, открывающие и закрывающие попап профиля


function editProfileInfo(event) {
  event.preventDefault();

  userName.textContent = formNameElement.value;
  userInfo.textContent = formBioElement.value;

  closePopup(popupElement);
}
// функция, меняющая данные на странице после сабмита в попапе

formOpenButtonElement.addEventListener('click', function () {
  openPopup(popupElement);
  openProfilePopup();
});
formCloseButtonElement.addEventListener('click', function () {
  closePopup(popupElement);
  closeProfilePopup();
});
popupElement.addEventListener('click', closePopupByClickOnOverlay);
popupElement.addEventListener('submit', editProfileInfo);
// добавлены слушатели событий на кнопки

const cardTemplateContent = document.querySelector('.card-template').content;
const cardList = document.querySelector('.elements__list');

function addCard(element) {
  setEventListeners(element);

  cardList.prepend(element);
}

function renderCard(element) {

  const cardElement = cardTemplateContent.cloneNode(true);

  cardElement.querySelector('.element__image').src = element.link;
  cardElement.querySelector('.element__image').alt = element.name;
  cardElement.querySelector('.element__title').textContent = element.name;

  addCard(cardElement);
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

function closeAddFormByClickOnOverlay(event) {
  if (event.target === event.currentTarget)
    closePopup(addFormPopup);
}

addFormButton.addEventListener('click', function () {
  openPopup(addFormPopup);
});
closeAddFormButton.addEventListener('click', function () {
  closePopup(addFormPopup);
});
addFormPopup.addEventListener('click', closeAddFormByClickOnOverlay);


//функция добавления новой карточки в дом дерево
const addNewCard = function (event) {
  event.preventDefault();

  const cardElement = cardTemplateContent.cloneNode(true);

  cardElement.querySelector('.element__image').src = formLinkElement.value;
  cardElement.querySelector('.element__image').alt = formPlaceNameElement.value;
  cardElement.querySelector('.element__title').textContent = formPlaceNameElement.value;

  addCard(cardElement);

  formLinkElement.value = '';
  formPlaceNameElement.value = '';
  closePopup(addFormPopup);
}

addFormPopup.addEventListener('submit', addNewCard);

//обьявим функции при клике на кнопки карточек

function handleLikeCard(event) {
  event.target.classList.toggle('element__like-button_active');
};

function handleDeleteCard(event) {
  event.target.closest('.element').remove();
};

// обьявим функцию обработчика событий при клике на кнопки карточек
function setEventListeners(cardElement) {
  cardElement.querySelector('.element__like-button').addEventListener('click', handleLikeCard);
  cardElement.querySelector('.element__delete-button').addEventListener('click', handleDeleteCard);
  cardElement.querySelector('.element__image').addEventListener('click', function () {
    openPopup(imagePopup);
    openImagePopup(event);
  })
};

const imagePopup = document.querySelector('.popup_open_background-image');
const popupBackgroundImage = document.querySelector('.popup__background-image');
const popupTitle = document.querySelector('.popup__image-title');

function openImagePopup(event) {
  const cardImage = event.target.closest('.element').querySelector('.element__image');
  const cardTitle = event.target.closest('.element').querySelector('.element__title');
  popupBackgroundImage.src = cardImage.src;
  popupBackgroundImage.alt = cardImage.alt;
  popupTitle.textContent = cardTitle.textContent;
};

const closeImagePopupByClickOnOverlay = function (event) {
  if (event.target === event.currentTarget)
    closePopup(imagePopup);
};

imagePopup.querySelector('.popup__close-button').addEventListener('click', function () {
  closePopup(imagePopup)
});
imagePopup.addEventListener('click', closeImagePopupByClickOnOverlay);


