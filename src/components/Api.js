export default class Api {
  constructor(authorizationToken) {
    this.authorizationToken = authorizationToken;
  }

  getCardItems(serverLink) {
    return fetch(serverLink, {
      headers: {
        authorization: this.authorizationToken,
      }
    })
      .then((res) => {
        if(res.ok){
          return res.json()
        }
          return Promise.reject('Not ok - cardArray')
      })
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err)
      })
  }

  setUserInfo(userInfo, serverLink) {
    return fetch(serverLink, {
      method: 'PATCH',
      headers: {
        authorization: this.authorizationToken,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: userInfo.name,
        about: userInfo.info
      })
    })
    .then((res) => {
      if(res.ok){
      return res.json()
    }
      return Promise.reject('Not ok - userInfoPatch')
    })
    .then((userData) => {
      return userData
    })
    .catch((err) => console.log(err))
  }

  getUserInfo(serverLink) {
    return fetch(serverLink, {
      headers: {
        authorization: this.authorizationToken
      }
    })
      .then((res) => {
        if(res.ok){
        return res.json()
      }
        return Promise.reject('Not ok - userInfo')
      })
      .then((userData) => {
        return userData
      })
      .catch((err) => console.log(err))
  }

  addNewCard(item, serverLink) {
    return fetch(serverLink, {
      method: 'POST',
      headers: {
        authorization: this.authorizationToken,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: item.name,
        link: item.link
      })
    })
    .then((res) => {
      if(res.ok){
        return res.json()
      }
        return Promise.reject('Not ok - addCard')
    })
    .then((cardData) => {
      return cardData
    })
    .catch((err) => console.log(err))
  }

  deleteCard(serverLink, id) {
    return fetch(`${serverLink}/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: this.authorizationToken,
        'Content-Type': 'application/json'
      },
    })
    .then((res) => {
      if(res.ok){
      return res.json()
    }
      return Promise.reject('Not ok - cardDeletion')
    })
    .then((userData) => {
      return userData
    })
    .catch((err) => console.log(err))
  }

  likeCard(serverLink, id) {
    return fetch(`${serverLink}/likes/${id}`, {
      method: 'PUT',
      headers: {
        authorization: this.authorizationToken,
        'Content-Type': 'application/json'
      },
    })
    .then((res) => {
      if(res.ok){
      return res.json()
    }
      return Promise.reject('Not ok - cardLike')
    })
    .then((userData) => {
      return userData
    })
    .catch((err) => console.log(err))
  }
  
  unlikeCard(serverLink, id) {
    return fetch(`${serverLink}/likes/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: this.authorizationToken,
        'Content-Type': 'application/json'
      },
    })
    .then((res) => {
      if(res.ok){
      return res.json()
    }
      return Promise.reject('Not ok - cardUnlike')
    })
    .then((userData) => {
      return userData
    })
    .catch((err) => console.log(err))
  }

  changeAvatar(serverLink, avatarLink) {
    return fetch(serverLink, {
      method: 'PATCH',
      headers: {
        authorization: this.authorizationToken,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: avatarLink
      })
    })
    .then((res) => {
      if(res.ok){
        return res.json()
      }
        return Promise.reject('Not ok - changeAvatar')
    })
    .then((cardData) => {
      return cardData
    })
    .catch((err) => console.log(err))
  }
}