import LeftCardView from "./leftCardView.js";

const convert = function () {
  console.log(this);
};

const init = function () {
  //   LeftCardView.addHandlerEnter(convert);
  LeftCardView.addHandlerEnter(convert);
};

init();
