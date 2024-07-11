export default class Tile {
  constructor(tileElement) {
    this.tileElement = tileElement;
    this.tileElementHeading = tileElement.querySelector(".tile_heading");
    this.tileValueElement = tileElement.querySelector(".tile_value");
  }
  displayResult(result, timeout) {
    setTimeout(() => this.tileElement.classList.add("tile_visible"), timeout);
    this.tileValueElement.textContent = result;
  }
  hideResult(timeout) {
    setTimeout(
      () => this.tileElement.classList.remove("tile_visible"),
      timeout
    );
    this.tileValueElement.textContent = "";
  }
}
