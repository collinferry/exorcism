export const steps = (n) => {
  if (n <= 0) {
    throw new Error("Only positive numbers are allowed")
  }

  for (var i=0; n != 1; i++) {
    if (n % 2 == 0) {
      n = n / 2;
    } else {
      n = (n * 3) + 1;
    };
  }
  return i;
};
