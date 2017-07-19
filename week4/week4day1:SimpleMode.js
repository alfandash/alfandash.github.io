//https://coderbyte.com/results/alfand:Division:JavaScript

function SimpleMode(arr) {

  // code goes here
  let len = arr.length;
  let temp = [];
  for(let loop=0;loop<len;loop++){
    let count = 0;
    for(let loop2=0;loop2<len;loop2++){
      if(arr[loop] === arr[loop2]){
        count++;
      }
    }
    temp.push(count);
  }

  let max = Math.max.apply(Math, temp);

  for(let loop=0;loop<len;loop++){
    if(temp[loop] === max) {
      return arr[loop];
    }
  }
  // console.log(max);
  // console.log(temp);
  // return arr;

}

// keep this function call here
let arr = [5,5,2,2,1,3,3,3,5,4,2,2,2];
console.log(SimpleMode(arr));
