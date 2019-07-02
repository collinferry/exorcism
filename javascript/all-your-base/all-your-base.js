export const convert = (inputNum, startBase, endBase) => {

  //error handling
  const formatError = new Error('Input has wrong format'),
    inputError = new Error('Wrong input base'),
    outputError = new Error('Wrong output base');

  if (Number.isInteger(startBase) == false) {
    throw inputError;
  }
  if (Number.isInteger(endBase) == false) {
    throw outputError;
  }
  if (startBase <= 1) {
    throw inputError;
  }
  if (endBase <= 1) {
    throw outputError;
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


  var decimal = 0,
    outputNum = [];

  //convert input to decimal
  for (var i = 1; i <= inputNum.length; i++) {
    if ((inputNum[i] < 0) || ((inputNum[i] > 1) && (startBase == 2))) {
      throw formatError;
    }
    decimal += inputNum[i - 1] * Math.pow(startBase, (inputNum.length - i));
  };

  //convert decimal number to endbase
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
