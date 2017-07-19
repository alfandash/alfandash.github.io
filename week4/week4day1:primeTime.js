//https://coderbyte.com/results/alfand:Prime%20Time:JavaScript

function PrimeTime(num) {

  // code goes here
  let cek=[];
  for(let loop=1;loop<=num;loop++){
    if (num%loop===0){
      cek.push(loop);
    }
  }
  console.log(cek);
  return cek.length === 2;

}

// keep this function call here
let num=10
console.log(PrimeTime(num));
