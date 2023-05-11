//.........................................Array reduce method
// const arr = [17, 24, 30, 19, 3];
//  const arr2 = arr.reduce((i, j) => {
//    return i + j; });
//  console.log(arr2);


let num = 0;
function sumOfanArray(arr:number[]) {
  for (const i of arr) {
    num += i;
  }
  return num;
}
console.log(sumOfanArray([1, 2, 22, 25, 77, 18, 96]));


//console.time()
function sumOfArray(array:number[]) {
  const sum = array.reduce((total, item) => total + item, 100);
  return sum;
}
console.log(sumOfArray([25, 10, 63, 1, 3, 19]));
//console.timeEnd()
