var plusOne = function(digits) {
  const n = digits.length;
  for (let i = n -1; i >= 0; i--) {
    digits[i]++;
    digits[i] %= 10;
    if (digits[i] != 0) {
      return digits;
    }
  }
  digits = [...Array(n + 1)].map(_ => 0);
  digits[0] = 1;
  return digits;
}