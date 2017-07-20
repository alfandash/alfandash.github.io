function iqTest(numbers){
  // ...
  var split = numbers.split(' ').map(function(x){return parseInt(x)})
  var even =0
  var odd =0
  var index=0;
  split.map(function(x){return x%2==0?odd++:even++})
  for (var i = 0; i < split.length; i++) {
    if (odd > even) {
      if(split[i]%2!==0)index = split[i];
    } else if (even > odd) {
      if(split[i]%2===0)index = split[i];
    }
  }
  return split.indexOf(index)+1
}


function iqTest2(numbers) {
  var split = numbers.split(' ').map(function(x){return parseInt(x)})
  var odd = split.filter(function(x){return x%2===0})
  var even = split.filter(function(x){return x%2!==0})
  return odd.length > even.length?(split.indexOf(even[0])+1):(split.indexOf(odd[0])+1)
}

console.log(iqTest("2 4 7 8 10"));
console.log(iqTest("1 2 1 1"));
console.log(iqTest2("2 4 7 8 10"));
console.log(iqTest2("1 2 1 1"));
