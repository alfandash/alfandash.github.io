function LargestPair(num) {

  // code goes here
  var str= ''+num;
  var len = str.length;
  var deret=[];
  for (var looping=0;looping<len;looping++){
    if (looping === len-1) {
      break;
    } else {
      deret.push(str[looping]+str[looping+1]);
    }
  }
  deret.sort(function(a, b){return b-a});
  console.log(deret);
  return deret[0];

}

// keep this function call here
let num =1239840;
console.log(LargestPair(num));
