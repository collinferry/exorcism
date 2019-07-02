export const convert = (inputNum, startBase, endBase) => {
  var decimal = 0,
    outputNum = [];
  //error handling
  const formatError = new Error('Input has wrong format');

  if (!Number.isInteger(startBase) || (startBase <= 1)) {
    throw new Error('Wrong input base');
  }
  if (!Number.isInteger(endBase) || (endBase <= 1)) {
    throw new Error('Wrong output base');
  }
  if (inputNum == "") {
    throw formatError;
  };
  if (inputNum == 0) {
    return [0];
  };
  if (inputNum[0] == 0) {
    throw formatError;
  };

  //convert input to decimal
  for (var i = 1; i <= inputNum.length; i++) {
    if ((inputNum[i] < 0) || ((inputNum[i] > 1) && (startBase == 2))) {
      throw formatError;
    }
    decimal += inputNum[i - 1] * Math.pow(startBase, (inputNum.length - i));
  };

  //convert decimal to endbase
  do {
    outputNum.unshift(decimal % endBase);
    decimal = Math.floor(decimal / endBase);
  }
  while (Math.floor(decimal / endBase) != 0);
  if (decimal != 0) {
    outputNum.unshift(decimal)
  };
  return outputNum;

};
