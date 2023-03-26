import LeftCardView from "./leftCardView.js";
import * as model from "./model.js";

const controlEnter = function () {
  //   console.log(this);
  // Get input value
  const input = LeftCardView.getInput();

  // Verificate input value
  if (model.verficateInput(input)) {
    // true: convert input value and render on ouput field
    const output = model.convert(input);
    LeftCardView.outputRender(output);
  } else {
    // false: render error message and lock up the input field
    LeftCardView.errorRender();
  }
};

const init = function () {
  LeftCardView.addHandlerEnter(controlEnter);
};

init();
