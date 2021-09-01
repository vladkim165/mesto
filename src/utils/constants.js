export { config, formOpenButtonElement, formNameElement, formBioElement, cardList, addFormButton, profileForm, createCardForm, changeProfilePopup, changeProfileForm, profilePicture }

const formOpenButtonElement = document.querySelector('.profile__edit-button');
const editProfilePopupElement = document.querySelector('.popup_profile');
const formNameElement = editProfilePopupElement.querySelector('.form__field_input_name');
const formBioElement = editProfilePopupElement.querySelector('.form__field_input_bio');
const cardList = document.querySelector('.elements__list');
const addFormButton = document.querySelector('.profile__add-button');
const addFormPopup = document.querySelector('.popup_open_add-form');
const profileForm = editProfilePopupElement.querySelector('.form')
const createCardForm = addFormPopup.querySelector('.form')
const changeProfilePopup = document.querySelector('.popup_change-avatar')
const changeProfileForm = changeProfilePopup.querySelector('.form')
const profilePicture = document.querySelector('.profile__avatar-img')

const config = {
  formSelector: '.form',
  inputSelector: '.form__field',
  submitButtonSelector: '.form__save-button',
  inactiveButtonClass: 'form__save-button_disabled',
  inputErrorClass: 'form__field_type_error',
  errorClass: 'form__field-error_active',
  hiddenErrorClass: '.form__field-error'
};