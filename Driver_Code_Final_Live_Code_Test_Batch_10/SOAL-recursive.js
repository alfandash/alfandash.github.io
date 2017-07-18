// Recursive Competency Test
// 1. TambahTerus
// Function tambahTerus akan menerima 1 parameter berupa angka.
// Secara rekursif, function tambahTerus akan menambahkan setiap digit di angka tersebut.
// Function tambahTerus akan berhenti saat angka sisa satu digit.
// Ex:
// Contoh 1 =====
// tambahTerus(123) = 6
// 123 => 1 + 2 + 3 = 6, dan 6 memiliki 1 digit maka return 6.
// Contoh 2 =====
// tambahTerus(1234) = 1
// 1234 => 1 + 2 + 3 + 4 = 10, 10 masih 2 digit, maka teruskan fungsi.
// 10 => 1 + 0 = 1, dan 1 memiliki 1 digit maka return 1.
// Contoh 3 =====
// tambahTerus(88888888) = 1
// 88888888 => 8 + 8 + 8 + 8 + 8 + 8 + 8 + 8 = 64, 64 masih 2 digit, maka teruskan fungsi.
// 64 => 6 + 4 = 10, 10 masih 2 digit, maka teruskan fungsi.
// 10 => 1 + 0 = 1, dan 1 memiliki 1 digit maka return 1.
// Contoh 4 =====
// tambahTerus(54) = 9
// 54 => 5 + 4 = 9, dan 9 memiliki 1 digit maka return 9.

function tambahTerus(num) {
  // Code disini
  let arr = (""+num).split("");
  var total =0;
  //console.log(arr);
  if (arr.length>1) {
    for (var i = 0; i < arr.length; i++) {
      total+=Number(arr[i]);
    }
    num=total;
    return tambahTerus(num);
  } else {
    return num;
  }


}

console.log(tambahTerus(13)); // 4
console.log(tambahTerus(54)); // 9
console.log(tambahTerus(123)); // 6
console.log(tambahTerus(5)); // 5
console.log(tambahTerus(1234)); // 1
console.log(tambahTerus(99)); // 9
console.log(tambahTerus(88888888)); // 1
console.log(tambahTerus(333)); // 9
