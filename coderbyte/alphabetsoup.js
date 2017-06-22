//https://coderbyte.com/results/alfand:Letter%20Capitalize:JavaScript

function LetterChanges(str) {

  // code goes here
 let pisah = str.split(" ");
 let len = pisah.length;
 let hasil =[];
 for(let loop=0;loop<len;loop++){
   //pisah[loop][0]=pisah[loop][0].toUpperCase();
   hasil.push(pisah[loop].charAt(0).toUpperCase() + pisah[loop].slice(1));
 }
 return hasil.join(" ");

}


// https://coderbyte.com/results/cjordanball:Letter%20Capitalize:JavaScript
function LetterCapitalize2(str) {

  wordarr = str.split(" ");

  for (var i = 0, n = wordarr.length; i < n; i++) {
   wordarr[i] = wordarr[i][0].toUpperCase() + wordarr[i].slice(1);
  }
  str = wordarr.join(" ");

  return str;

}

let str = "zantimes kuy"
console.log(LetterChanges(str));
