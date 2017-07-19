function ArithGeo(arr) {

  // code goes here
  var pjgArr = arr.length;
  var art = arr[1]-arr[0];
  var geo = arr[1]/arr[0];

  for(var looping=0; looping<pjgArr;looping++) {
      if (arr[looping+1]-arr[looping] !== art){
          break;
      } else if (looping === pjgArr -2) {
          return "Arithmetic"
      }
  }

  for(var looping=0; looping<pjgArr;looping++) {
      if (arr[looping+1]/arr[looping] !== geo){
          break;
      } else if (looping === pjgArr -2) {
          return "Geometric"
      }
  }

  return -1;

}

// keep this function call here
let arr = [30,90,270]; 
console.log(ArithGeo(arr));
