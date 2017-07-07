//https://coderbyte.com/results/alfand:Letter%20Capitalize:JavaScript

function LetterChanges(num1,num2) {
  let div =0;
  let maksdiv = 0;
  if (num1 > num2){
    div=num1
  } else {
    div=num2
  }
  for(let loop=0;loop<div;loop++){
    if (num1%loop == 0 && num2%loop == 0){
      maksdiv =loop;
    }
  }
  return maksdiv;
}


let num1 = 7
let num2 = 3

console.log(LetterChanges(num1,num2));
