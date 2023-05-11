//find longest word
function findLongestWord(string) {
    var words = string.split(" ");
    var sortword = words.sort(function (a, b) { return b.length - a.length; });
    return sortword[0];
}
console.log(findLongestWord("My name is Rohan Prajapati.  rohantarang I am studying in last year of engineering "));
