export default class View {
  _inputElement;
  _outputElement;
  _messageContainer;
  _errMsg = "Can only enter 0s and 1s.";
  _curSlide;
  slides;
  btnContainer;
  _maxSlide;

  init() {
    this._messageContainer.classList.add("hidden");
    this._inputElement.setAttribute("maxlength", 15);
    this._outputElement.value = "";
  }

  getInput() {
    const input = this._inputElement.value;
    return input;
  }

  getCurType() {
    return this._curSlide;
  }

  _gotoSlide(slide) {
    this.slides.forEach((s, i) => {
      // Hide all slides
      s.classList.add("nondisplay");
      // Display the current one
      if (i === slide) s.classList.remove("nondisplay");
    });
  }

  preSlide() {
    if (this._curSlide === 0) this._curSlide = this._maxSlide;
    else this._curSlide--;

    this._gotoSlide(this._curSlide);
  }

  nextSlide() {
    if (this._curSlide === this._maxSlide) this._curSlide = 0;
    else this._curSlide++;
    this._gotoSlide(this._curSlide);
  }

  _getEnterType(handler) {
    handler(this._curSlide);
  }

  clearInput() {
    this._inputElement.value = "";
    this._outputElement.value = "";
  }

  addHandlerEnter(handler) {
    this._inputElement.addEventListener(
      "keyup",
      this._getEnterType.bind(this, handler)
    );
  }

  addHandlerClick(handler) {
    this.btnContainer.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn");
      if (!btn) return;
      handler(btn.classList[1]);
    });
  }

  outputRender(output) {
    // hide error message
    this.init();

    // show converted value
    this._outputElement.value = output;
  }

  errorRender() {
    // show error message
    this._messageContainer.firstElementChild.textContent = this._errMsg;
    this._messageContainer.classList.remove("hidden");

    // lock up the input area
    this._inputElement.setAttribute("maxlength", this.getInput().length);
  }
}
