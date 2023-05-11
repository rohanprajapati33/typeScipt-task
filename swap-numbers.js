function swapTwonumber(a, b) {
    if (a && b) {
        a = a + b;
        b = a - b;
        a = a - b;
        return { a: a, b: b };
    }
    else {
        var x = void 0;
        x = a;
        a = b;
        b = x;
        return { a: a, b: b };
    }
}
function isGivenType(a, b) {
    return a === b;
}
console.log(swapTwonumber(45, 50));
