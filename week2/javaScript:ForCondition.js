function penggunaanForSederhana() {
  //---------------------------
  // pengunaan for sederhana
  for (var angka=1 ; angka <10; angka ++) {
    console.log('looping ke : '+ angka);
  }
}

function penggunaanForMengembalikanAngkaTotal() {
  // looping mengembalikan angka total
  var jumlah=0;
  for (var angka=1 ; angka <11; angka++) {
    console.log('looping ke : '+ angka);
    console.log('variable jumlah : ' + jumlah + ' ditambah dengan variabel angka : ' + angka);
    jumlah += angka;
    console.log('isi variable jumlah sekarang : '+ jumlah);
  }
}

function penggunaanForIncrementDecrement() {
  // looping penggunaan increment dan decrement lebih dari 1

  for (var angka=1; angka <11; angka +=2) {
    console.log('looping ke : ' + angka);
  }

  for (var angka = 30; angka>0; angka -=3) {
    console.log('looping ke : ' + angka);
  }

}
