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

function closePopupByClickOnOverlay(event) {
  if (event.target === event.currentTarget)
    closePopup(event.target);
}
// универсальные функции открытия и закрытия попапа


function openProfilePopup() {
  formNameElement.value = userName.textContent;
  formBioElement.value = userInfo.textContent;
  openPopup(popupElement);
}

// функции, открывающие и закрывающие попап профиля


function editProfileInfo(event) {
  event.preventDefault();

  userName.textContent = formNameElement.value;
  userInfo.textContent = formBioElement.value;

  closePopup(popupElement);
}
// функция, меняющая данные на странице после сабмита в попапе

formOpenButtonElement.addEventListener('click', openProfilePopup);
formCloseButtonElement.addEventListener('click', function () {
  closePopup(popupElement);
});
popupElement.addEventListener('click', closePopupByClickOnOverlay);
popupElement.addEventListener('submit', editProfileInfo);
// добавлены слушатели событий на кнопки

const cardTemplateContent = document.querySelector('.card-template').content;
const cardList = document.querySelector('.elements__list');

function createCard(name, link) {
  const cardData = cardTemplateContent.cloneNode(true);
  setEventListeners(cardData);
  cardData.querySelector('.element__image').src = link;
  cardData.querySelector('.element__title').alt = name;
  cardData.querySelector('.element__title').textContent = name;
  return cardData
}

function renderCard(element) {

  const cardElement = createCard(element.name, element.link);

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

function resetFormInputs(popup) {
  popup.querySelector('.form').reset();
}

addFormButton.addEventListener('click', function () {
  openPopup(addFormPopup);
  resetFormInputs(addFormPopup);
});
closeAddFormButton.addEventListener('click', function () {
  closePopup(addFormPopup);
});
addFormPopup.addEventListener('click', closePopupByClickOnOverlay);


//функция добавления новой карточки в дом дерево
const addNewCard = function (event) {
  event.preventDefault();

  const elementData = { name: formPlaceNameElement.value, link: formLinkElement.value };
  renderCard(elementData)

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
  cardElement.querySelector('.element__image').addEventListener('click', function (event) {
    openImagePopup(event);
  })
};

const imagePopup = document.querySelector('.popup_open_background-image');
const popupBackgroundImage = document.querySelector('.popup__background-image');
const popupTitle = document.querySelector('.popup__image-title');
const cardName = document.querySelector('.element__title');
const cardImage = document.querySelector('.element__image');

function openImagePopup(event) {
  const cardImage = event.target.closest('.element').querySelector('.element__image');
  const cardTitle = event.target.closest('.element').querySelector('.element__title');
  popupBackgroundImage.src = cardImage.src;
  popupBackgroundImage.alt = cardImage.alt;
  popupTitle.textContent = cardTitle.textContent;
  openPopup(imagePopup);
};

imagePopup.querySelector('.popup__close-button').addEventListener('click', function () {
  closePopup(imagePopup)
});
imagePopup.addEventListener('click', closePopupByClickOnOverlay);

