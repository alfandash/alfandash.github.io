function order(words){
  // ...
  var split = words.split(" ");
  var bucket = [];
  for (var i = 1; i <= split.length; i++) {
    for (var j = 0; j < split.length; j++) {
      var re = new RegExp(i, 'g');
      if (split[j].match(re) !== null) {
        bucket.push(split[j]);
      }
    }
  }
  return bucket.join(" ");
}

console.log(order("is2 Thi1s T4est 3a"));
