import LeftCardView from "./leftCardView.js";
import RightCardView from "./rightCardView.js";
import * as model from "./model.js";

const controlEnter = function () {
  //   console.log(type);
  // Get input value
  const input = this.getInput();

  // Verificate input value
  const inputType = this.getCurType();
  const outputType =
    this === LeftCardView
      ? RightCardView.getCurType()
      : LeftCardView.getCurType();
  if (model.verficateInput(input, inputType)) {
    // true: convert input value and render on ouput field
    const output = model.convert(input, inputType, outputType);
    // console.log(output, typeof output);
    this.outputRender(output);
  } else {
    // false: render error message and lock up the input field
    this.errorRender();
  }
};

const controlClick = function (btn) {
  btn === "btn_left" ? this.preSlide() : this.nextSlide();
  this.clearInput();
};

const init = function () {
  LeftCardView.addHandlerEnter(controlEnter.bind(LeftCardView));
  LeftCardView.addHandlerClick(controlClick.bind(LeftCardView));

  RightCardView.addHandlerClick(controlClick.bind(RightCardView));
  RightCardView.addHandlerEnter(controlEnter.bind(RightCardView));
};

init();
