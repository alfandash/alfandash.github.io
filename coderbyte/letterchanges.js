//https://coderbyte.com/results/alfand:Letter%20Changes:JavaScript
function LetterChanges(str) {

  // code goes here
  console.log(str.charCodeAt(3));
  let string = str.split("");
  let len=string.length;
  console.log(string[0]);

  for(let loop=0; loop<len;loop++){
    string.splice(loop,1,(str.charCodeAt(loop)))
    if ( string[loop]<=90 && string[loop]>=65  ){
      string.splice(loop,1,(str.charCodeAt(loop)+1));
    } else if (string[loop]<=122 && string[loop]>=97){
      string.splice(loop,1,(str.charCodeAt(loop)+1));
    }
  }

  for(let loop=0; loop<len;loop++){
    string.splice(loop,1,(String.fromCharCode(string[loop])));
    if (string[loop]==="a"){
        string.splice(loop,1,"A");
      } else if (string[loop]==="i"){
        string.splice(loop,1,"I");
      } else if (string[loop]==="u"){
        string.splice(loop,1,"U");
      } else if (string[loop]==="e"){
        string.splice(loop,1,"E");
      } else if (string[loop]==="o"){
        string.splice(loop,1,"O");
      } else if (string[loop]===" "){
        string.splice(loop,1," ");
      } else if (string[loop]==="{"){
        string.splice(loop,1,"A");
      }
  }
  return string.join("");
}

// https://coderbyte.com/results/jackgeek:Letter%20Changes:JavaScript
function LetterChanges2(str) {
  var newStr = '';
  for (var i=0; i < str.length; i++) {
    var newChar;
    if (str[i] >= 'a' && str[i] <= 'z') {
      var charCode = str.charCodeAt(i);
      charCode+=1;
      if (charCode > 122) charCode = 97;
      newChar = String.fromCharCode(charCode);
    } else {
      newChar = str[i];
    }
    if (['a','e','i','o','u'].indexOf(newChar) > -1) {
      newChar = newChar.toUpperCase();
    }
    newStr += newChar;
  }
  // code goes here
  return newStr;

}

let str = "zantimes kuy"
console.log(LetterChanges(str));
