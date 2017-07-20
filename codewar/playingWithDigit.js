function digPow(n, p){
  // ...
  var split = n.toString().split('');
  split = split.map(function(x){return parseInt(x)});
  var total = 0;
  var temp = 0;
  for (var i = 1; total < n ; i++) {
    temp = 0
    for (var j = 0; j < split.length; j++) {
      temp += Math.pow(split[j],i+j);
    }
    total = temp;
    console.log();
  }
}

console.log(digPow(89,1));
