function loopingWhile() {
  // ------------------------
  // penggunaan looping - while

  var flag = 1;
  while (flag < 10) {
    console.log('loop ke:' + flag);
    flag++;
  }

  var looping = 5;
  var jumlah = 0;
  while (looping > 0) {
    console.log('looping ke:' + looping);
    jumlah += looping;
    looping--;
    console.log('dengan jumlah: ' + jumlah);
  }

  console.log('total jumlah yang sudah di looping: ' + jumlah);
}

loopingWhile();
