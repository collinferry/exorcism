export const encode = (input) => {
  var count = 0,
    encoded = '';

  for (var i = 0; i < input.length; i++) {
    if (input.charAt(i) == input.charAt(i + 1)) {
      count += 1;
    } else if (input.charAt(i) != input.charAt(i + 1) && count > 0) {
      encoded += (count + 1).toString() + input.charAt(i);
      count = 0;
    } else {
      encoded += input.charAt(i);
    }
  }
  return encoded;
};

export const decode = (input) => {
  var count = '', decoded = '';

  function builder(num, char){
    var str = '';
    for (var a=0; a<num; a++) {
      str += char;
    }
    return str;
  };

  for (var i = 0; i < input.length; i++) {
    if (input.charAt(i) > 0) {
      count += input.charAt(i);
    } else if (count > 0){
      decoded += builder(count, input.charAt(i));
      count = '';
    } else {
      decoded += input.charAt(i);
    }
  }
  return decoded;
};
