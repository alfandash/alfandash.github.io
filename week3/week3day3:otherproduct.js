function OtherProducts(arr) {

  // code goes here
  var array =[];
  for (var looping = 0; looping < (arr.length); looping++) {
      var result = 1;
      for (var looping2=0;looping2 < (arr.length); looping2++) {
          if (looping2!=looping) {
              result = result * arr[looping2];
          }
      }
      array.push(result);
  }

  arr = array.join("-");
  return arr;

}

// keep this function call here
let arr = [1,2,3,100]
console.log(OtherProducts(arr));
