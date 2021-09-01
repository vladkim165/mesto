export default class UserInfo {
  constructor({ nameSelector, infoSelector, profilePicture }) {
    this.name = document.querySelector(nameSelector)
    this.info = document.querySelector(infoSelector)
    this.avatar = document.querySelector(profilePicture)
  }
  getUserInfo() {
    this._values = {}
    this._values.name = this.name.textContent
    this._values.info = this.info.textContent

    return this._values
  }

  setUserInfo(userData) {
    this.name.textContent = userData.name;
    this.info.textContent = userData.about;
    this.avatar.src = userData.avatar;
  }
}