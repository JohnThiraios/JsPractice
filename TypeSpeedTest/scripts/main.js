import Input from "./Input.js";
import Keyboard from "./Keyboard.js";
import Reset from "./Reset.js";
import Word from "./Word.js";
import Letter from "./Letter.js";
import Tile from "./Tile.js";

import {
  validInputKeys,
  textAreaInput,
  resetButton,
  paragraphs,
  wpmTile,
  accuracyTile,
  timeTile,
} from "./constants.js";

//tiles
const wpmObj = new Tile(wpmTile);
const accuracyObj = new Tile(accuracyTile);
const timeObj = new Tile(timeTile);

//keyboard
const keyboardObj = new Keyboard();

//input handling
const inputObj = new Input(keyboardObj, wpmObj, accuracyObj, timeObj);

//reset
const resetObj = new Reset(resetButton, inputObj);
