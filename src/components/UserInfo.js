export default class UserInfo {
  constructor({ nameSelector, infoSelector, profilePicture }, handleGetUserInfo) {
    this.name = document.querySelector(nameSelector)
    this.info = document.querySelector(infoSelector)
    this.avatar = document.querySelector(profilePicture)
    this.handleGetUserInfo = handleGetUserInfo
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

  getUserInfoFromServer() {
    handleGetUserInfo()
  }
}