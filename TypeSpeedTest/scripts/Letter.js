export default class Letter {
  constructor(letter) {
    this.letter = letter;
    this.letterElement = this.getLetterTemplate(letter);
  }
}
