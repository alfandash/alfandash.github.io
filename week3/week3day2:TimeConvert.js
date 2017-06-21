function TimeConvert(num) {

  // code goes here
  var hour = Math.floor(num/60);
  var minute = (num%60);
  num = ""+hour+":"+minute;
  return num;

}

// keep this function call here
let num=120; 
console.log(TimeConvert(num));
