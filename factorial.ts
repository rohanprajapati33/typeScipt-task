//using Recursive Method

function factorial(n:number) {
  if (n < 0) {
    return "number is negative";
  }
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(10));
