//https://coderbyte.com/results/alfand:Swap%20Case:JavaScript
function SwapCase(str) {

  // code goes here
  len = str.length;
  arr = str.split("");
  for (let loop =0;loop<len;loop++){
    if(arr[loop] == arr[loop].toUpperCase()) {
      arr.splice(loop,1,arr[loop].toLowerCase());
    } else {
      arr.splice(loop,1,arr[loop].toUpperCase());
    }
  }
  arr = arr.join("");
  console.log(arr);

}

// keep this function call here

let str = "Hello-LOL";
console.log(SwapCase(str));
