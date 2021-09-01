import Card from '../components/Card.js'
import { FormValidator } from '../components/FormValidator.js'
import Section from '../components/Section.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js';
import { config } from './constants.js'
import PopupWithConfirmation from '../components/PopupWithConfirmation.js'
import { cardList, profileForm, createCardForm, changeProfileForm } from './constants.js'
import Api from '../components/Api.js'

export { imagePopup, cardElementsList, addForm, ProfileFormValidation, createCardFormValidation, profile, editProfilePopup, api, deletionConfirmationPopup, changeAvatarFormValidation, changeAvatarForm }

const changeAvatarForm = new PopupWithForm({
  handleFormSubmit: (userAvatar) => {
    changeAvatarForm.loading(true, 'Сохранение...', 'Сохранить')
    api.changeAvatar('https://mesto.nomoreparties.co/v1/cohort-27/users/me/avatar', userAvatar.link)
    .then((userData) => {
      profile.setUserInfo(userData)
    })
    .finally(() => {
      changeAvatarForm.loading(false, 'Сохранение...', 'Сохранить')
      changeAvatarForm.close()
    })
  }
},

  '.popup_change-avatar'
);

const imagePopup = new PopupWithImage('.popup_open_background-image')

const deletionConfirmationPopup = new PopupWithConfirmation('.popup_delete-confirmation')

const api = new Api('a5607433-7f53-40eb-a48e-ab0174e03e0a')

const createCard = (item) => {
  const card = new Card(item, '.card-template', () => imagePopup.open(item), () => {
    deletionConfirmationPopup.open()
    deletionConfirmationPopup.handleFormSubmit(() => {
      deletionConfirmationPopup.loading(true, 'Удаление...', 'Да')
      api.deleteCard('https://mesto.nomoreparties.co/v1/cohort-27/cards', item._id)
        .then((res) => {
          card.deleteCard();
          deletionConfirmationPopup.close()
          deletionConfirmationPopup.loading(false, 'Удаление...', 'Да')
        })
    })
  },
    () => {
      api.likeCard('https://mesto.nomoreparties.co/v1/cohort-27/cards', item._id)
        .then((res) => {
          card.setLikes(res)
        })
    },
    () => {
      api.unlikeCard('https://mesto.nomoreparties.co/v1/cohort-27/cards', item._id)
        .then((res) => {
          card.setLikes(res)
        })
    }
  )
  return card.generateCard()
}

const cardElementsList = new Section({
  renderer: (cardItem) => {
    const cardElement = createCard(cardItem)
    const deleteButton = cardElement.querySelector('.element__delete-button')
    const likeButton = cardElement.querySelector('.element__like-button')
    const likeCounter = cardElement.querySelector('.element__like-counter')
    likeCounter.textContent = cardItem.likes.length

    api.getUserInfo('https://nomoreparties.co/v1/cohort-27/users/me')
      .then((userData) => {
        if (cardItem.owner._id !== userData._id) {
          deleteButton.remove()
        }
        if (cardItem.likes.length > 0) {
          cardItem.likes.forEach((item) => {
            if (item._id === userData._id) {
              likeButton.classList.add('element__like-button_active')
            }
          })
        }
        cardElementsList.addItem(cardElement)
      })
  },
},
  cardList
);

const addForm = new PopupWithForm({
  handleFormSubmit: (cardItem) => {
    addForm.loading(true, 'Создание...', 'Создать')
    api.addNewCard(cardItem, 'https://mesto.nomoreparties.co/v1/cohort-27/cards')
      .then((cardData) => {
        const cardElement = createCard(cardData)
        cardElementsList.addItem(cardElement)
        addForm.close()
      })
      .finally(() => {
        addForm.loading(false, 'Создание...', 'Создать')
      })
  }
},
  '.popup_open_add-form'
);

const ProfileFormValidation = new FormValidator(config, profileForm)

const createCardFormValidation = new FormValidator(config, createCardForm)

const changeAvatarFormValidation = new FormValidator(config, changeProfileForm)

const profile = new UserInfo({ nameSelector: '.profile__title', infoSelector: '.profile__subtitle', profilePicture: '.profile__avatar-img' })

const editProfilePopup = new PopupWithForm({
  handleFormSubmit: (userInfo) => {
    editProfilePopup.loading(true, 'Сохранение...', 'Сохранить')
    api.setUserInfo(userInfo, 'https://nomoreparties.co/v1/cohort-27/users/me')
      .then((userData) => {
        profile.setUserInfo(userData)
        editProfilePopup.close()
      })
      .finally(() => {
        editProfilePopup.loading(false, 'Сохранение...', 'Сохранить')
      })
  }
},
  '.popup_profile'
);



// const getItems = function() {
//   fetch('https://mesto.nomoreparties.co/v1/cohort-27/cards', {
//     headers: {
//       authorization: 'a5607433-7f53-40eb-a48e-ab0174e03e0a'
//     }
//   })
//     .then(res => res.json())
//     .then((result) => {
//       cardElementsList.renderItems(result);
//     })
//     .catch(() => {
//       console.log('Ошибка с массивом карточек')
//     })
// }

// getItems()
