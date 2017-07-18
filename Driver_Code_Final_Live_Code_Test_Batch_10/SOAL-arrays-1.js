// 1. Number Cruncher
// Disediakan sebuah function numberCruncher yang bertugas untuk menerima sebuah parameter
// berupa angka, dan mengembalikan array baru yang merupakan hasil penambahan angka di
// index array sebelumnya dengan dua angka yang berada di kiri dan kanannya. Apabila tidak ada
// angka di kiri atau kanan, maka dianggap sebagai 0.
// Ex:
// Input: [ ​ 2 ​ , ​ 5 ​ , ​ 1 ​ , ​ 3 ​ ]
// Proses: [ 0 + ​ 2 ​ + 5 , 2 + ​ 5 ​ + 1, 5 + ​ 1 ​ + 3, 1 + ​ 3 ​ + 0 ]
// Output: [ 7, 8, 9, 4 ]

function numberCruncher(numberArr) {
  // Code hanya disini
  result =[];
  for (var i = 0; i < numberArr.length; i++) {
    let a = numberArr[i-1];
    let b = numberArr[i+1];
    if (numberArr[i-1]==null) {
      a=0;
    }
    if (numberArr[i+1]==null) {
      b=0;
    }
    result.push(a+numberArr[i]+b);
  }
  return result
}

console.log(numberCruncher([7, 1, 0, 4])); // [ 8, 8, 5, 4 ]
console.log(numberCruncher([2, 3, 1, 4, 1, 5, 0, 3])); // [ 5, 6, 8, 6, 10, 6, 8, 3 ]
console.log(numberCruncher([1, 3, 2, 5, 6, 0])); // [ 4, 6, 10, 13, 11, 6 ]
console.log(numberCruncher([0, 1, 0, 1, 0, 1, 0, 1, 0, 1])); // [ 1, 1, 2, 1, 2, 1, 2, 1, 2, 1 ]
console.log(numberCruncher([3, 6, 8, 9, 1, 2, 3])); // [ 9, 17, 23, 18, 12, 6, 5 ]
