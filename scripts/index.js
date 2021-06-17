const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button');
const popupNameElement = popupElement.querySelector('.popup__field_name');
const popupBioElement = popupElement.querySelector('.popup__field_bio');
const userName = document.querySelector('.profile__title');
const userBio = document.querySelector('.profile__subtitle');

const openPopup = function() {
  popupElement.classList.add('popup_opened');
  popupNameElement.value = userName.textContent;
  popupBioElement.value = userBio.textContent;
}

const closePopup = function() {
  popupElement.classList.remove('popup_opened');
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
