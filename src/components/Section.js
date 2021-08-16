export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._cardArray = items
    this._container = containerSelector;
    this._renderer = renderer
  }

  renderItems() {
    this._cardArray.forEach(item => this._renderer(item))
  }

  addItem(element) {
    this._container.prepend(element)
  }
}