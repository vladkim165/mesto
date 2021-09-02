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

export { imagePopup, cardElementsList, addForm, profileFormValidation, createCardFormValidation, profile, editProfilePopup, api, deletionConfirmationPopup, changeAvatarFormValidation, changeAvatarForm }

const changeAvatarForm = new PopupWithForm({
  handleFormSubmit: (userAvatar) => {
    changeAvatarForm.loading(true, 'Сохранение...', 'Сохранить')
    api.changeAvatar(userAvatar.link)
      .then((userData) => {
        profile.setUserInfo(userData)
        changeAvatarForm.close()
      })
      .catch((err) => console.log(err))
      .finally(() => {
        changeAvatarForm.loading(false, 'Сохранение...', 'Сохранить')
      })
  }
},

  '.popup_change-avatar'
);

const imagePopup = new PopupWithImage('.popup_open_background-image')

const deletionConfirmationPopup = new PopupWithConfirmation('.popup_delete-confirmation')

const api = new Api('a5607433-7f53-40eb-a48e-ab0174e03e0a', 'https://mesto.nomoreparties.co/v1/cohort-27')

const createCard = (item) => {
  const card = new Card(item, '.card-template', () => imagePopup.open(item), () => {
    deletionConfirmationPopup.open()
    deletionConfirmationPopup.handleFormSubmit(() => {
      deletionConfirmationPopup.loading(true, 'Удаление...', 'Да')
      api.deleteCard(item._id)
        .then((res) => {
          card.deleteCard();
          deletionConfirmationPopup.close()
        })
        .catch((err) => console.log(err))
        .finally(() => {
          deletionConfirmationPopup.loading(false, 'Удаление...', 'Да')
        })
    })
  },
    () => {
      api.likeCard(item._id)
        .then((res) => {
          card.setLikes(res)
        })
        .catch((err) => console.log(err))
    },
    () => {
      api.unlikeCard(item._id)
        .then((res) => {
          card.setLikes(res)
        })
        .catch((err) => console.log(err))
    }
  )
  return card.generateCard()
}

const cardElementsList = new Section({
  renderer: (cardItem, userInfo) => {
    const cardElement = createCard(cardItem, userInfo)
    const likeCounter = cardElement.querySelector('.element__like-counter')
    const deleteButton = cardElement.querySelector('.element__delete-button')
    const likeButton = cardElement.querySelector('.element__like-button')
    likeCounter.textContent = cardItem.likes.length

    if (cardItem.owner._id !== userInfo._id) {
      deleteButton.remove()
    }

    if (cardItem.likes.length > 0) {
      cardItem.likes.forEach((item) => {
        if (item._id === userInfo._id) {
          likeButton.classList.add('element__like-button_active')
        }
      })
    }

    cardElementsList.addItem(cardElement)
  },
},
  cardList
);

const addForm = new PopupWithForm({
  handleFormSubmit: (cardItem) => {
    addForm.loading(true, 'Создание...', 'Создать')
    api.addNewCard(cardItem)
      .then((cardData) => {
        const cardElement = createCard(cardData)
        cardElementsList.addItem(cardElement)
        addForm.close()
      })
      .catch((err) => console.log(err))
      .finally(() => {
        addForm.loading(false, 'Создание...', 'Создать')
      })
  }
},
  '.popup_open_add-form'
);

const profileFormValidation = new FormValidator(config, profileForm)

const createCardFormValidation = new FormValidator(config, createCardForm)

const changeAvatarFormValidation = new FormValidator(config, changeProfileForm)

const profile = new UserInfo({ nameSelector: '.profile__title', infoSelector: '.profile__subtitle', profilePicture: '.profile__avatar-img' })

const editProfilePopup = new PopupWithForm({
  handleFormSubmit: (userInfo) => {
    editProfilePopup.loading(true, 'Сохранение...', 'Сохранить')
    api.setUserInfo(userInfo)
      .then((userData) => {
        profile.setUserInfo(userData)
        editProfilePopup.close()
      })
      .catch((err) => console.log(err))
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
