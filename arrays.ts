//Double array
 function double (arr:number[]){
   const newArr:number[] = [];
   for(let i = 0; i < arr.length; i++){
       newArr.push(arr[i] * 2);
   }
   return newArr;
}
console.log(double([10,20,30,40]))

//Find Even numbers
function findEvenNumbers(array:number[]) {
  return array.filter(number => {
    return number % 2 === 0;
  });
}
console.log(findEvenNumbers([1,2,3,4,5,6,7,8,9,10]) )

//Array join
function joinArray(arr:string[]){
  return arr.join("|")
}
console.log(joinArray(["red","green","white","blue"]))

//Get a first element from array
function getFirstNElmentsFromGivenArray(arr:number[], size = 0) {
  if (size >= 0) {
    if (!arr.length) {
      return [];
    } else {
      return arr.slice(0, size);
    }
  } else {
    console.log("Negative size not allowed");
  }
}
console.log(getFirstNElmentsFromGivenArray([1, 2, 4, 5], 3));

