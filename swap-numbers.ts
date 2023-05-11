function swapTwonumber(a: number, b: number) {
  if (a && b) {
    a = a + b;
    b = a - b;
    a = a - b;
    return { a, b };
  } else {
    let x: number;
    x = a;
    a = b;
    b = x;
    return { a, b };
  }
}
console.log(swapTwonumber(45, 50));
