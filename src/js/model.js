"use strict";

// 1. Binary to Decimal
const inputBinary = document.querySelector(".input_binary");
const inputDecimal = document.querySelector(".input_decimal");

// get the value that user entered
inputBinary.addEventListener("keyup", function () {
  const input = this.value;
  const msg = this.nextElementSibling;
  // data verification: check input only contains 0 & 1

  // check NO:
  if (
    input.length !== 0 &&
    input.slice(-1) !== "0" &&
    input.slice(-1) !== "1"
  ) {
    // show error message
    msg.classList.remove("hidden");

    // lock up the input area
    this.setAttribute("maxlength", input.length);
    return;
  }

  // check OK: show output in inputDecimal
  msg.classList.add("hidden");
  this.setAttribute("maxlength", 15);

  const output = parseInt(input, 2);
  inputDecimal.value = !isNaN(output) ? output : "";
});

// 2. Decimal to Binary
inputDecimal.addEventListener("keyup", function () {});
