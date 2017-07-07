/*
HACKTIV8 Online Live Coding

Nama: Alfan Diki Asshari

==========
Digit-digit dalam String
==========

[DESKRIPSI]
Kamu diminta memproses sebuah string dengan cara berikut:
Di dalam string ada bilangan-bilangan satu digit yang bisa positif atau
bisa negatif. Bilangan positif tentunya memiliki simbol '+' sedangkan
bilangan negatif memiliki simbol '-'. Carilah jumlah dari semua bilangan!

[INSTRUKSI]
Tersedia sebuah string sebagai input.
0utput hasil penjumlahan semua digit dalam string tersebut

[CONTOH]
'+5-3+7+9+9-2'		--> 25
*/

function jumlahkan(inputString)
{
  // start code here
  let len=inputString.length;
  let jumlah=0;
  for(let loop=0;loop<len;loop+=2){
    jumlah += parseInt(inputString[loop]+inputString[loop+1]);
  }
  return jumlah;

}
console.log(jumlahkan('-1-1-1-1-1-2'));        // -7
console.log(jumlahkan('+5-3+5+5-1'));        // 11
console.log(jumlahkan('+4+3+7+1'));            // 15
console.log(jumlahkan('-1-1-1-1-1-2'));		// -7
console.log(jumlahkan('+5-3+5+5-1'));		// 11
console.log(jumlahkan('+4+3+7+1'));			// 15
