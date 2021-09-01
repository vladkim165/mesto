export default class Section {
  constructor({ renderer }, containerSelector) {
    this._container = containerSelector;
    this._renderer = renderer
  }

  renderItems(cardArray) {
    cardArray.forEach(item => this._renderer(item))
  }

  addItem(element) {
    this._container.append(element)
  }
}