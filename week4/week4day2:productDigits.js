// https://coderbyte.com/results/alfand:Product%20Digits:JavaScript
function ProductDigits(num) {

  // code goes here
  let root = Math.sqrt(num);
  let string = num.toString().length + 1;
  let max;
  let div;
  let length;
  for(let loop=1;loop<=root;loop++){
    if(num%loop === 0){
      max = loop;
      div = num/loop;
      //console.log(max +"x"+div);
      length = ""+max+"" + ""+div+"";
      if (length.length < string) {
        break;
      }
    }
  }

  //console.log("total : "+length.length);
  return length.length;

}

// keep this function call here
let num = 24;
console.log(ProductDigits(num));
