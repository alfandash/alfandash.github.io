//https://coderbyte.com/results/alfand:Simple%20Mode:JavaScript
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

  if (max ===1) {
      return -1
  }

  for(let loop=0;loop<len;loop++){
    if(temp[loop] === max) {
      return arr[loop];
    }
  }

}

// keep this function call here
let arr=[5, 10, 10, 6, 5]
console.log(SimpleMode(arr));
