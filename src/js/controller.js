import LeftCardView from "./leftCardView.js";
import * as model from "./model.js";

const controlEnter = function (type) {
  console.log(type);
  // Get input value
  const input = LeftCardView.getInput();

  // Verificate input value
  if (model.verficateInput(input, type)) {
    // true: convert input value and render on ouput field
    const output = model.convert(input, type);
    LeftCardView.outputRender(output);
  } else {
    // false: render error message and lock up the input field
    LeftCardView.errorRender();
  }
};

const controlClick = function (btn) {
  btn === "btn_left" ? LeftCardView.preSlide() : LeftCardView.nextSlide();
  LeftCardView.clearInput();
};

const init = function () {
  LeftCardView.addHandlerEnter(controlEnter);
  LeftCardView.addHandlerClick(controlClick);
};

init();
