import View from "./view.js";

class LeftCardView extends View {
  _inputElement = document.querySelector(".card_left > .input");
  _outputElement = document.querySelector(".card_right > .input");
  _messageContainer = document.querySelector(".card_left > .message_container");
  _curSlide = 0;
  slides = document.querySelectorAll(".card_left .card_title");
  btnContainer = document.querySelector(".card_left .selector_container");
  _maxSlide = this.slides.length - 1;
}

export default new LeftCardView();
