const formOpenButtonElement = document.querySelector('.profile__edit-button');
const editProfilePopupElement = document.querySelector('.popup');
const editProfileFormCloseButtonElement = editProfilePopupElement.querySelector('.form__close-button');
const formNameElement = editProfilePopupElement.querySelector('.form__field_input_name');
const formBioElement = editProfilePopupElement.querySelector('.form__field_input_bio');
const userName = document.querySelector('.profile__title');
const userInfo = document.querySelector('.profile__subtitle');
const popupContainer = document.querySelector('.popup__container');

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


function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByClickOnEsc);

  const container = popup.querySelector('.popup__container')
  if (container) container.classList.add('popup__container_opened');
}

function turnOffButtonWhenOpenPopup(popup) {
  const button = popup.querySelector(config.submitButtonSelector)
  if (button) {
    button.disabled = true;
    button.classList.add(config.inactiveButtonClass);
  }
}

function hidePopUpError(popup) {
  const formFields = popup.querySelectorAll('.form__field');
  const inputErrors = popup.querySelectorAll('.form__field-error');

  inputErrors.forEach((inputError) => {
    inputError.classList.remove('form__field-error_active');
  });

  formFields.forEach((formField) => {
    formField.classList.remove('form__field_type_error');
  });
}

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

  hidePopUpError(editProfilePopupElement);
  turnOffButtonWhenOpenPopup(editProfilePopupElement);
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
});
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
  resetFormInputs(addFormPopup);
  hidePopUpError(addFormPopup);
  turnOffButtonWhenOpenPopup(addFormPopup);
  openPopup(addFormPopup);

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

addFormPopup.addEventListener('submit', function (event) {
  addNewCard(event);
});

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
