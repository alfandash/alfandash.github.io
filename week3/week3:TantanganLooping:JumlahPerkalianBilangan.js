var perkalian_looping = function(n) {
  var hasil =1;
  for (var looping = n; looping > 1; looping--) {
    hasil = hasil * looping;
  }
  return hasil;
}
console.log(perkalian_looping(5));

var perkalian = function(n) {
  if (n==1) {
    return 1;
  } else {
    return n * perkalian(n-1);
  }
}

console.log(perkalian(5));

var bedaAntar_looping = function(x,z){
  var hasil =1;
  for (var looping=x;looping>0;looping-=z){
    hasil = hasil * looping;
  }
  return hasil;
}

console.log(bedaAntar_looping(12,5));

var bedaAntar = function(x,z) {
  if (x < z) {
    return x;
  } else {
    return x * bedaAntar(x-z,z);
  }
}

console.log(bedaAntar(12,5));
