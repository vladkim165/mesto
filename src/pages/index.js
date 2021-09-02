import { formOpenButtonElement, formNameElement, formBioElement, addFormButton, profilePicture } from '../utils/constants.js'
import './index.css'
import { imagePopup, addForm, profileFormValidation, createCardFormValidation, profile, editProfilePopup, deletionConfirmationPopup, api, cardElementsList, changeAvatarFormValidation, changeAvatarForm } from '../utils/utils'

Promise.all([api.getUserInfo(), api.getCardItems()])
  .then((data) => {
    profile.setUserInfo(data[0])
    cardElementsList.renderItems(data[1],  data[0])
  })
  .catch((err) => {
    console.log(err);
  });

imagePopup.setEventListeners()

deletionConfirmationPopup.setEventListeners()

addForm.setEventListeners()

addFormButton.addEventListener('click', function () {
  addForm.open()
  createCardFormValidation.resetValidation()
});

editProfilePopup.setEventListeners()

formOpenButtonElement.addEventListener('click', () => {
  editProfilePopup.open();
  profileFormValidation.resetValidation();

  const profileData = profile.getUserInfo()

  formNameElement.value = profileData.name;
  formBioElement.value = profileData.info;

})

profilePicture.addEventListener('click', () => {
  changeAvatarForm.open()
  changeAvatarFormValidation.resetValidation()
})


changeAvatarForm.setEventListeners()

profileFormValidation.enableValidation();

createCardFormValidation.enableValidation();

changeAvatarFormValidation.enableValidation();