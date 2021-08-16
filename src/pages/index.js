import { formOpenButtonElement, formNameElement, formBioElement, addFormButton } from '../utils/constants.js'
import './index.css'
import { imagePopup, cardElementsList, addForm, ProfileFormValidation, createCardFormValidation, profile, editProfilePopup } from '../utils/utils'

imagePopup.setEventListeners()

cardElementsList.renderItems()

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

ProfileFormValidation.enableValidation();

createCardFormValidation.enableValidation();