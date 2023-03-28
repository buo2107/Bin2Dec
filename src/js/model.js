import { BINARY, OCTAL, HEXADECIMAL, DECIMAL } from "./config.js";
export const verificateInput = function (data, type) {
  let reg;
  switch (type) {
    case BINARY:
      reg = /^[01]+$/;
      return reg.test(data);
    case OCTAL:
      reg = /^[0-7]+$/;
      return reg.test(data);
    case HEXADECIMAL:
      reg = /^[0-9a-f]+$/i;
      return reg.test(data);
    case DECIMAL:
      reg = /^[0-9]+$/;
      return reg.test(data);
  }
};

const binaryTo = function (data, outputType) {
  switch (outputType) {
    case BINARY:
      return data;
    case OCTAL:
      return (parseInt(data, 2) >>> 0).toString(8);
    case HEXADECIMAL:
      return (parseInt(data, 2) >>> 0).toString(16);
    case DECIMAL:
      return parseInt(data, 2);
  }
};

const octalTo = function (data, outputType) {
  switch (outputType) {
    case BINARY:
      return (parseInt(data, 8) >>> 0).toString(2);
    case OCTAL:
      return data;
    case HEXADECIMAL:
      return (parseInt(data, 8) >>> 0).toString(16);
    case DECIMAL:
      return parseInt(data, 8);
  }
};

const hexTo = function (data, outputType) {
  switch (outputType) {
    case BINARY:
      return (parseInt(data, 16) >>> 0).toString(2);
    case OCTAL:
      return (parseInt(data, 16) >>> 0).toString(8);
    case HEXADECIMAL:
      return data;
    case DECIMAL:
      return parseInt(data, 16);
  }
};

const decimalTo = function (data, outputType) {
  switch (outputType) {
    case BINARY:
      return (data >>> 0).toString(2);
    case OCTAL:
      return (data >>> 0).toString(8);
    case HEXADECIMAL:
      return (data >>> 0).toString(16);
    case DECIMAL:
      return data;
  }
};

export const convert = function (data, inputType, outputType) {
  switch (inputType) {
    case BINARY:
      return binaryTo(data, outputType);
    case OCTAL:
      return octalTo(data, outputType);
    case HEXADECIMAL:
      return hexTo(data, outputType);
    case DECIMAL:
      return decimalTo(data, outputType);
  }
};
