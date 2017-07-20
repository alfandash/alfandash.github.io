function nbYear(p0, percent, aug, p) {
    // your code
    var other = 0;
    var total =p0;
    for  (var j = p0; j <= p; j = j + (j * (percent/100)) +aug) {
      other += 1;
    }

    for(var y = 0; p0 < p; y++) p0 = p0 * (1 + percent / 100) + aug;
  return y;
}

nbYear(1500, 5, 100, 5000);
