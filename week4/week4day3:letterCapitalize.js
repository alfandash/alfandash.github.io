//https://coderbyte.com/results/alfand:Letter%20Capitalize:JavaScript
function LetterCapitalize(str) {

  // code goes here
 let pisah = str.split(" ");
 let len = pisah.length;
 let hasil =[];
 for(let loop=0;loop<len;loop++){
   hasil.push(pisah[loop].charAt(0).toUpperCase() + pisah[loop].slice(1));
 }
 return hasil.join(" ");

}

// keep this function call here
let str = "makan tahu"
console.log(LetterCapitalize(str));
LetterCapitalize(readline());
