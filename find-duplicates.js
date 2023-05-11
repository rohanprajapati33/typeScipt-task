function duplicates(num) {
    return num.filter(function (value, index) { return num.indexOf(value) === index; });
}
console.log(duplicates([1, 2, 1, 2, 3, 3, 3, 4, 5, 6, 5, 5, 6, 6, 7]));
