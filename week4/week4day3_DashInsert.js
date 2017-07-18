//https://coderbyte.com/results/alfand:Swap%20Case:JavaScript
function DashInsert(str) {

  // code goes here
  str = str.toString();
  arr = str.split("");
  len = arr.length;
  for(let loop=0;loop<len-1;loop++){
    if(arr[loop] !== "-") {
      if(arr[loop]%2 !==0) {
        if(arr[loop+1]%2 !==0) {
          arr.splice(loop+1,0,"-")
        }
      }
    }
  len = arr.length;
  }
  console.log(arr);
  return str;

}

// keep this function call here
let num = 9994699;
DashInsert(num);
