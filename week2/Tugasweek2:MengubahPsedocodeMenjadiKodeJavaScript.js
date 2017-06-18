
// Tugas 1
var nama = 'alfan';
var angka_pembilang = 6;
var angka_penyebut = 3;
var hasil_bagi = angka_pembilang / angka_penyebut;
console.log('Halo ' + nama +' '+ angka_pembilang + ' dibagi ' + angka_penyebut + ' adalah sama dengan ' + hasil_bagi);

// Tugas 2
var alas_segitiga = 3;
var tinggi_segitiga = 5;
var luas_segitiga = (alas_segitiga * tinggi_segitiga) / 2;

console.log('Luas segitiga '+ luas_segitiga);

// Tugas 3

var tahun = 1991;

if ( tahun%4==0 ) {
  if (tahun%100!=0){
    console.log(tahun+' adalah tahun kabisat');
  } else {
    if (tahun%400==0){
      console.log(tahun+' adalah tahun kabisat');
    } else {
      console.log(tahun+' adalah bukan tahun kabisat');
    }
  }
} else {
  console.log(tahun+' adalah bukan tahun kabisat');
}
