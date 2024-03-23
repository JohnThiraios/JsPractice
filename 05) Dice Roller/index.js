console.log("If this message appears in the console, JavaScript is running.");

function rollDice() {
  const numOfDice = document.getElementById("numOfDice").value;
  const diceResult = document.getElementById("diceResult");
  const diceImages = document.getElementById("diceImages");
  const values = [];
  const images = [];

  for (let i = 0; i < numOfDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="imgs/${value}.jpg" alt="Dice ${value}">`);
  }

  diceResult.textContent = `dice: ${values.join(`, `)}`;
  diceImages.innerHTML = images.join(``);
}
