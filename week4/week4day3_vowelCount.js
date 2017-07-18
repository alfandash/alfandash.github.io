//https://coderbyte.com/information.php?ct=Vowel%20Count
function VowelCount(str) {

  // code goes here
  len = str.match(/[aiueo]/gi)
  if(len) {
    return len.length
  } else {
    return 0
  };

}

// keep this function call here
let str = "bzz8*"
console.log(VowelCount(str));
