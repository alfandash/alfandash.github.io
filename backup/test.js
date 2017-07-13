var hackFox = function(angka) {
  var hasil;
  if (angka%2 != 0 || angka%3 != 0) {
    hasil = "salah";
  } else {
    if (angka%2 == 0) {
      hasil = "HACK";
    }
    if (angka%3 == 0) {
      hasil = "FOX";
    }
    if (angka%2==0 && angka%3==0 ) {
      hasil = "HACKFOX";
    }
  }
  return hasil;
}

console.log(hackFox(5));
console.log(hackFox(2));
console.log(hackFox(18));
