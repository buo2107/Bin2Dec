import { DECIMAL } from "./config.js";
import View from "./view.js";

class RightCardView extends View {
  _inputElement = document.querySelector(".card_right > .input");
  _outputElement = document.querySelector(".card_left > .input");
  _messageContainer = document.querySelector(
    ".card_right > .message_container"
  );
  _curSlide = DECIMAL;
  slides = document.querySelectorAll(".card_right .card_title");
  btnContainer = document.querySelector(".card_right .selector_container");
  _maxSlide = this.slides.length - 1;
}

export default new RightCardView();
