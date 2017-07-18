function numberSum(number) {
  if (number == 1) {
    return 1;
  } else {
    return number + numberSum(number - 1);
  }
}

console.log(numberSum(5));

// Fungsi fibionansi
function fib(n) {
  if (n==0) {
    return 0;
  }
  if (n<=2) {
    return 1;
  }
  return fib(n-1) + fib(n-2);
}

console.log(fib(8));
