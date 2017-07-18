var transformArrToLowerCase = arr => {
  // Ubah setiap element array menjadi lowercase!
  let map = arr.map(isiArr => {
      return isiArr.toLowerCase();
    });
  return map;
};

console.log(transformArrToLowerCase(['BUDI', 'MArNi', 'mukIDi'])); // ['budi', 'marni', 'mukidi']


var filterArrUnder10 = arr => {
  // Filter setiap element array yang nilainya dibawah 10, sisakan yang 10 ke atas!
  let filter = arr.filter(isiArr => {
    if(isiArr>10) return true; else return false;
  })
  return filter;
};

console.log(filterArrUnder10([1, 5, 12, 15, 20])); // [12, 15, 20]


var reduceFindMaximum = arr => {
  // kembalikan sebuah nilai yang mengandung angka terbesar dengan reduce!
  let reduce = arr.reduce((accumulator,currentValue) => {
    return Math.max(accumulator, currentValue);
  });

  return reduce;
}
console.log(reduceFindMaximum([5, 1, 7, 6, 9])); // 9
