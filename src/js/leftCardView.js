class LeftCardView {
  _inputElement = document.querySelector(".card_left > .input");
  _outputElement = document.querySelector(".card_right > .input");
  _messageContainer = document.querySelector(".card_left > .message_container");
  _errMsg = "Can only enter 0s and 1s.";

  getInput() {
    const input = this._inputElement.value;
    return input;
  }

  addHandlerEnter(handler) {
    this._inputElement.addEventListener("keyup", handler);
  }

  outputRender(output) {
    // hide error message
    this._messageContainer.classList.add("hidden");
    this._inputElement.setAttribute("maxlength", 15);

    // show converted value
    this._outputElement.value = !isNaN(output) ? output : "";
  }

  errorRender() {
    // show error message
    this._messageContainer.firstElementChild.textContent = this._errMsg;
    this._messageContainer.classList.remove("hidden");

    // lock up the input area
    this._inputElement.setAttribute("maxlength", this.getInput().length);
  }
}

export default new LeftCardView();
