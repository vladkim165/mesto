export default class Api {
  constructor(authorizationToken, url) {
    this.authorizationToken = authorizationToken;
    this.url = url
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`)
    }
    return res.json()
  }

  getCardItems() {
    return fetch(`${this.url}/cards`, {
      headers: {
        authorization: this.authorizationToken,
      }
    })
      .then((res) => {
        return this._getResponseData(res)
      })
  }

  setUserInfo(userInfo) {
    return fetch(`${this.url}/users/me`, {
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
        return this._getResponseData(res)
      })
  }

  getUserInfo() {
    return fetch(`${this.url}/users/me`, {
      headers: {
        authorization: this.authorizationToken
      }
    })
      .then((res) => {
        return this._getResponseData(res)
      })
  }

  addNewCard(item) {
    return fetch(`${this.url}/cards`, {
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
        return this._getResponseData(res)
      })
  }

  deleteCard(id) {
    return fetch(`${this.url}/cards/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: this.authorizationToken,
        'Content-Type': 'application/json'
      },
    })
      .then((res) => {
        return this._getResponseData(res)
      })
  }

  likeCard(id) {
    return fetch(`${this.url}/cards/likes/${id}`, {
      method: 'PUT',
      headers: {
        authorization: this.authorizationToken,
        'Content-Type': 'application/json'
      },
    })
      .then((res) => {
        return this._getResponseData(res)
      })
  }

  unlikeCard(id) {
    return fetch(`${this.url}/cards/likes/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: this.authorizationToken,
        'Content-Type': 'application/json'
      },
    })
      .then((res) => {
        return this._getResponseData(res)
      })
  }

  changeAvatar(avatarLink) {
    return fetch(`${this.url}/users/me/avatar`, {
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
        return this._getResponseData(res)
      })
  }
}