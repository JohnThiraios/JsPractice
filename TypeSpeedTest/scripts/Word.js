export default class Word {
  constructor(word) {
    this.word = word;
    this.wordElement = this.getWordTemplate(word);
    this.letterObjs = [];
  }
  getWordTemplate() {
    return document
      .querySelector("#word-template")
      .content.querySelector(".word")
      .cloneNode(true);
  }
  insertLetter(letterObj) {
    this.letterObjs.push(letterObj);
    this.wordElement.append(letterObj.letterElement);
  }
}
