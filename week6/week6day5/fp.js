// callback function

setTimeout(() => {
  console.log('halo');
}, 2000);

// Map function

let arr = [1,2,3,4,5,6,7];
let duaKalilipat = arr.map(function(isiArray) {
  return isiArray*2;
});

setTimeout(() => {
  console.log(duaKalilipat);
},3000);

// other Map Example

let arr2 =['makan','tahu','tempe','jengkol'];
let tambah = arr2.map(function(isiArr2) {
  return 'Makan ' + isiArr2;
});

setTimeout(()=>{
  console.log(tambah);
},4000);

// filter function
// ex 1
let arr3 = [1,2,3,4,5,6,7,8,9,0];
let ganjilGenap = arr3.filter(function(isiArr3) {
  if(isiArr3%2 === 0) return true; else return false;
  //return (isiArr3%2 === 0? true : false);
})

console.log('filter function '+ganjilGenap);

// ex 2
let arr4 = [23,4,3,223,1,4,35,5,2,32,53,2,3,6];
let ganjilGenap2 = arr4.filter(isiArr4 => {
  if(isiArr4%3===0) return true; else return false;
})
console.log('Filter function 2 '+ganjilGenap2);


// reduce function

let arr5 = [1,2,3,4,2,3,4,1,2];
let useReduce = arr5.reduce((cursum, curNum) => {
  return cursum.concat(curNum);
},[]);
//0  bisa kita rubah jadi arraymerupakan angka awal param cursum

console.log('Reduce '+ useReduce);
