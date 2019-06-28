export const validate = (input) => {
  var numbers = input.toString().split('').map(x => parseInt(x));
  var strongNum = 0;
  for (var i=0; i<numbers.length; i++){
    strongNum += Math.pow(numbers[i], numbers.length);
  }
  return strongNum == input;
};
