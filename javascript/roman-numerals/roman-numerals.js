export const toRoman = (input) => {

  var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
  roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'],
  finalRoman = '';

  function romanize(number, letter) {
    while (input >= number) {
      finalRoman += letter;
      input -= number;
    }
  };

  for (var i = 0; i < 13; i++){
    romanize(decimal[i], roman[i]);
  }

  return finalRoman;

};
