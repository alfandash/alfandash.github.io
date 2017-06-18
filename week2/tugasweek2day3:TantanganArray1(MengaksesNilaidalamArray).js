var input = "hello world"
console.log(input);

function balikString(x) {
  var kebalikString = '' ;
  for ( var looping= ((x.length) -1 ); looping  >= 0 ; looping-- ) {
    kebalikString += x[looping];
  }
  return kebalikString;
}
console.log(balikString(input));
