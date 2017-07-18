// 2. Initial Grouping
// Disediakan sebuah function initialGrouping yang bertugas untuk menerima sebuah parameter
// berupa array satu dimensi berisikan nama-nama. Function initialGrouping akan
// mengelompokkan nama-nama tersebut berdasarkan huruf depannya dan dipisahkan ke dalam
// array dua dimensi.
// Ex:
// Input: ["Budi", "Badu", "Joni", "Jono"]
// Proses:
// Huruf depan yang ditemukan: B dan J
// Pisahkan nama yang depannya B, dan nama yang depannya J. Masukkan ke dalam array baru
// Susun array baru sebagai berikut:
// [
// [ “Budi”, “Badu” ],
// [ “Joni”, “Jono” ],
// ]
// Setiap array dimensi kedua diawali dengan huruf depan yang mengelompokkan nama tersebut.

// Array 2 Competency Test

function initialGrouping(studentsArr) {
  // Code hanya disini
  var obj = {}
  var firstLetter = []
  studentsArr.map(function(item){
    if (obj[item[0]] === undefined) {
      obj[item[0]] = true
      firstLetter.push(item[0])
    }
  })
  //console.log(obj);r
  //console.log(firstLetter);

  var result = [];
  firstLetter.map((item, index) => {
    var temp = [item];
    var filter = studentsArr.filter((isiArr) => {if(isiArr[0]==item)return true})
    result.push(temp.concat(filter));
  })

  return result
}

console.log(initialGrouping(["Budi", "Badu", "Joni", "Jono"]));
/*
[
  [ 'B', 'Budi', 'Badu' ],
  [ 'J', 'Joni', 'Jono' ]
]
*/

console.log(initialGrouping(["Mickey", "Yusuf", "Donald", "Ali", "Gong"]));
/*
[
  [ 'M', 'Mickey' ],
  [ 'Y', 'Yusuf' ],
  [ 'D', 'Donald' ],
  [ 'A', 'Ali' ],
  [ 'G', 'Gong' ]
]
*/

console.log(initialGrouping(["Rock", "Stone", "Brick", "Rocker", "Sticker"]));
/*
[
  [ 'R', 'Rock', 'Rocker' ],
  [ 'S', 'Stone', 'Sticker' ],
  [ 'B', 'Brick' ]
]
*/
