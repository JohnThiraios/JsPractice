const body = document.getElementsByTagName("body")[0];

function setColor(name) {
  body.style.backgroundColor = name;
}

function randomColor() {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);

  const color = `rgb(${red}, ${green}, ${blue})`;
  body.style.backgroundColor = color;
  // setColor(color);
}
// Alternate way for random color from a list of colors
// function randomColor() {
//   let colors = [
//     "red",
//     "blue",
//     "green",
//     "yellow",
//     "purple",
//     "orange",
//     "pink",
//     "brown",
//     "black",
//     "white",
//   ];
//   let color = colors[Math.floor(Math.random() * colors.length)];
//   setColor(color);
// }
