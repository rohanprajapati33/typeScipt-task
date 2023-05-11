
function duplicates(num:number[]) {
    return num.filter((value,index)=> num.indexOf(value) === index);
}
console.log(duplicates([1,2,1,2,3,3,3,4,5,6,5,5,6,6,7]) )