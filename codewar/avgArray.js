function avgArray(arr) {
  var temp = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      if (temp.length-1 < arr[i].length-1) {
        temp.push(0);
      }
      temp.splice(j,1,temp[j] + arr[i][j]);
    }
  }



  return temp.map(function(x){
    return x/arr.length
  })
}

console.log(avgArray([[1, 2, 3, 4], [5, 6, 7, 8]]));
console.log(avgArray([[2, 3, 9, 10, 7], [12, 6, 89, 45, 3], [9, 12, 56, 10, 34], [67, 23, 1, 88, 34]]));


const avgArray2 = a => a[0].map((_,i)=> return i);
console.log(avgArray2([[1, 2, 3, 4], [5, 6, 7, 8]]));
