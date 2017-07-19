//https://coderbyte.com/results/alfand:Simple%20Symbols:JavaScript
function VowelCount(str) {

  // code goes here
  len = str.match(/.[a-z]./gi)
  if(len===null){
    return false
  }
  for(let loop=0;loop<len.length;loop++){
    if(len[loop][0]!== "+") {
      return false
    }
    if(len[loop][2]!== "+") {
      return false
    }
  }

  return true


}

// keep this function call here
let str = "aaaa"
str="b"
console.log(VowelCount(str));
