export default class Section {
  constructor({items, renderer}, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems(items = this._items) {
    items.forEach(item => {
      this.addItem(this._renderer(item));
    })
  }

  addItem(data) {
    this._container.prepend(data);
  }
}
