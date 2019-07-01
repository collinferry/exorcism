export const toRoman = (num) => {

  var roman = [];
  var romanOnes = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  var romanTens = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  var romanHundreds = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];

  var thousands = Math.floor(num / 1000);
  var hundreds = Math.floor((num % 1000)/100) - 1;
  var tens = Math.floor((num % 100)/10) - 1;
  var ones = Math.floor((num % 10)) - 1;

  for (var i = 0; i < thousands; i++) {
    roman.push("M");
  }

  roman.push(romanHundreds[hundreds]);
  roman.push(romanTens[tens]);
  roman.push(romanOnes[ones]);

  return roman.join("");

};
