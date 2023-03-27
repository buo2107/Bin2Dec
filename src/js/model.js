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

export const convert = function (data, type) {
  switch (type) {
    // binary
    case 0:
      return parseInt(data, 2);
    // octal
    case 1:
      return parseInt(data, 8);
    // hexadecimal
    case 2:
      return parseInt(data, 16);
  }
};
