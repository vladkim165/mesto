export default class UserInfo {
  constructor({ nameSelector, infoSelector} ) {
    this.name = document.querySelector(nameSelector)
    this.info = document.querySelector(infoSelector)
  }
  getUserInfo() {
    this._values = {}
    this._values.name = this.name.textContent
    this._values.info = this.info.textContent
    
    return this._values

  }
  setUserInfo (userInfo) {

    this.name.textContent = userInfo.name
    this.info.textContent = userInfo.info
  }
}