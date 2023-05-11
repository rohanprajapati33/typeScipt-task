//.........................................Array reduce method
// const arr = [17, 24, 30, 19, 3];
//  const arr2 = arr.reduce((i, j) => {
//    return i + j; });
//  console.log(arr2);
//console.time()
function sumOfArray(array) {
    var sum = array.reduce(function (total, item) { return total + item; }, 100);
    return sum;
}
console.log(sumOfArray([25, 10, 63, 1, 3, 19]));
//console.timeEnd()
