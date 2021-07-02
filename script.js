const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button');
const popupNameElement = popupElement.querySelector('.popup__field_name');
const popupBioElement = popupElement.querySelector('.popup__field_bio');
const userName = document.querySelector('.profile__title');
const userBio = document.querySelector('.profile__subtitle');

const openPopup = function() {
  popupElement.classList.add('popup_is-opened');
  popupNameElement.value = userName.textContent;
  popupBioElement.value = userBio.textContent;
}

const closePopup = function() {
  popupElement.classList.remove('popup_is-opened');
}

const closePopupByClickOnOverlay = function(event) {
  if (event.target !== event.currentTarget) {
    return;
  }

  closePopup()
}

const popupSubmitHandler = function (event) {
  event.preventDefault();

  userName.textContent = popupNameElement.value;
  userBio.textContent = popupBioElement.value;

  closePopup();
}


popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupElement.addEventListener('click', closePopupByClickOnOverlay);
popupElement.addEventListener('submit', popupSubmitHandler);


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

initialCards.forEach(function (element) {
  const listElements = document.querySelector('.elements__list');
  const cardTemplate = document.querySelector('.card-template').content;
  const itemsElement = cardTemplate.cloneNode(true);


  itemsElement.querySelector('.element__image').src = element.link;
  itemsElement.querySelector('.element__image').alt = element.name;
  itemsElement.querySelector('.element__title').textContent = element.name;


  listElements.appendChild(itemsElement);
});