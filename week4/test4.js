function PrimeTime(num) {

  // code goes here
  let len = num.length
  let lastnum = '';
  let count=0;
  for(let loop=0;loop<len;loop++){
    if (lastnum === num[loop]) {
      count+=1;
      console.log(num[loop]);
      console.log(count);
    } else {
      lastnum = num[loop];
    }
  }

}

// keep this function call here
let num = [5,5,2,2,1]
console.log(PrimeTime(num));
