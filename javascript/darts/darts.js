export const solve = (x, y) => {
  x = Math.abs(x);
  y = Math.abs(y);
  let distance = Math.sqrt((x * x) + (y * y));
  let score = 10;

  switch (true) {
    case (distance > 10):
      score = 0;
      break;
    case (distance > 5):
      score = 1;
      break;
    case (distance > 1):
      score = 5;
      break;
  }
  return score;
};
