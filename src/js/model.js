// UNDO: check mechanism for different data type
export const verficateInput = function (data, type) {
  if (
    type !== 3 &&
    data.length !== 0 &&
    data.slice(-1) !== "0" &&
    data.slice(-1) !== "1"
  )
    return false;

  return true;
};

const binaryTo = function (data, outputType) {
  switch (outputType) {
    case 0:
      return data;
    case 1: // Octal
      return (parseInt(data, 2) >>> 0).toString(8);
    case 2: // Hexadecimal
      return (parseInt(data, 2) >>> 0).toString(16);
    case 3: // Decimal
      return parseInt(data, 2);
  }
};

const octalTo = function (data, outputType) {
  switch (outputType) {
    case 0:
      return (parseInt(data, 8) >>> 0).toString(2);
    case 1:
      return data;
    case 2:
      return (parseInt(data, 8) >>> 0).toString(16);
    case 3:
      return parseInt(data, 8);
  }
};

const hexTo = function (data, outputType) {
  switch (outputType) {
    case 0:
      return (parseInt(data, 16) >>> 0).toString(2);
    case 1:
      return (parseInt(data, 16) >>> 0).toString(8);
    case 2:
      return data;
    case 3:
      return parseInt(data, 16);
  }
};

const decimalTo = function (data, outputType) {
  switch (outputType) {
    case 0:
      return (data >>> 0).toString(2);
    case 1: // Octal
      return (data >>> 0).toString(8);
    case 2: // Hexadecimal
      return (data >>> 0).toString(16);
    case 3: // Decimal
      return data;
  }
};

export const convert = function (data, inputType, outputType) {
  console.log(inputType, outputType);

  switch (inputType) {
    case 0:
      return binaryTo(data, outputType);
    case 1:
      return octalTo(data, outputType);
    case 2:
      return hexTo(data, outputType);
    case 3:
      return decimalTo(data, outputType);
  }
};
