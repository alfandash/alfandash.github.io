function DivisionStringified(num1,num2) {

  // code goes here
  var result = Math.floor(num1/num2);
  return result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

}

// keep this function call here
var num1 =  503394930
var num2 = 43
console.log(DivisionStringified(num1,num2));
