function array_diff(a, b) {
  for (var i =0; i < a.length;i++) {
    if(a[i] === b[0]) {
      a.splice(i,1);
      i--;
    }
  }
  return a

  return a.filter(function(x) { return b.indexOf(x) == -1; });
}

console.log(array_diff([1,3],[1]));
