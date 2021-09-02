export default class Section {
  constructor({ renderer }, containerSelector) {
    this._container = containerSelector;
    this._renderer = renderer
  }

  renderItems(cardArray, userInfo) {
    cardArray.forEach(item => this._renderer(item, userInfo))
  }

  addItem(element) {
    this._container.prepend(element)
  }
}