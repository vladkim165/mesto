import { formOpenButtonElement, formNameElement, formBioElement, addFormButton, profilePicture } from '../utils/constants.js'
import './index.css'
import { imagePopup, addForm, ProfileFormValidation, createCardFormValidation, profile, editProfilePopup, deletionConfirmationPopup, api, cardElementsList, changeAvatarFormValidation, changeAvatarForm } from '../utils/utils'

api.getCardItems('https://mesto.nomoreparties.co/v1/cohort-27/cards')
.then((cardArray) => {
  cardElementsList.renderItems(cardArray)
})

imagePopup.setEventListeners()

deletionConfirmationPopup.setEventListeners()

api.getUserInfo('https://nomoreparties.co/v1/cohort-27/users/me')
.then((data) => {
  profile.setUserInfo(data)
})

addForm.setEventListeners()

addFormButton.addEventListener('click', function () {
  addForm.open()
  createCardFormValidation.resetValidation()
});

editProfilePopup.setEventListeners()

formOpenButtonElement.addEventListener('click', () => {
  editProfilePopup.open();
  ProfileFormValidation.resetValidation();

  formNameElement.value = profile.getUserInfo().name;
  formBioElement.value = profile.getUserInfo().info;

})

profilePicture.addEventListener('click', () => {
  changeAvatarForm.open()
  changeAvatarFormValidation.resetValidation()
})


changeAvatarForm.setEventListeners()

ProfileFormValidation.enableValidation();

createCardFormValidation.enableValidation();

changeAvatarFormValidation.enableValidation();