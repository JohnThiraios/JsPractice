export default class Tile {
  constructor(tileElement) {
    this.tileElement = tileElement;
    this.tileElementValue = tileElement.querySelector(".tile_value");
  }
  displayResult(result, timeout) {
    setTimeout(() => this.tileElement.classList.add("tile_visible"), timeout);
    this.tileElementValue.textContent = result;
  }
}
