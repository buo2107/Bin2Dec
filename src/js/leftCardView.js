export default class LeftCardView {
  _inputElement = document.querySelector(".card_left > .input");
  _outputElement = document.querySelector(".card_right > .input");
  _errMsg = "Can only enter 0s and 1s.";

  addHandlerEnter(handler) {
    this._inputElement.addEventListener("keyup", handler);
  }
}
