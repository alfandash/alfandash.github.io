//https://coderbyte.com/results/alfand:Letter%20Capitalize:JavaScript

function LetterChanges(num1,num2) {
  let maksdiv = 0;
  for(let loop=0;loop<100;loop++){
    if (num1%loop == 0 && num2%loop == 0){
      maksdiv =loop;
    }
  }
  return maksdiv;

}


let num1 = 7
let num2 = 3

console.log(LetterChanges(num1,num2));
