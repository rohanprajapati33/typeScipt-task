//find longest word
function findLongestWord(string:string) {
    const words = string.split(" ");
    const sortword = words.sort((a, b) => b.length - a.length);
    return sortword[0];
  }
  console.log(
    findLongestWord(
      "My name is Rohan Prajapati.  I am studying in last year of engineering "
    )
  );
  