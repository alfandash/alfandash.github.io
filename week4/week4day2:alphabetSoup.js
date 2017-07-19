//https://coderbyte.com/results/alfand:Alphabet%20Soup:JavaScript
function AlphabetSoup(str) {

  // code goes here
  let pisah = str.split("");
  pisah = pisah.sort();
  return pisah.join("");


}

// keep this function call here
let str = "hello"
console.log(AlphabetSoup(str));
