/*
HACKTIV8 Online Live Coding 1

Nama: Alfan Diki Asshari

================
Crack The Number
================

Mike Hammer adalah seorang detektif yang di minta untuk memecahkan sebuah kasus pembunuhan berantai yang terjadi di sebuah kota
di pedalaman eropa. Di tempat kejadian peristiwa, sang pembunuh selalu meninggalan urutan angka, yang ternyata adalah urutan alphabetic dan apabila di gabungkan menjadi sebuah Nama.
Sebagai seorang detektif Mike Hammer di minta untuk mencegah terjadinya pembunuhan selanjutnya dengan cara,
memecahkan angka tersebut untuk di gantikan menjadi nama seseorang yang menjadi target si pembunuh,

Contoh urutan angka:

angka = [1,12,1,19,20,1,9,18,0,1,18,3,8,9,5] // Alastair Archie
angka = [2,1,12,20,8,1,26,1,18,0,6,5,18,7,21,19] //Balthazar Fergus

[PERINTAH]
-  Tersedia fungsi nextTargetName, dimana fungsi tersebut dapat merubah uturan angka tersebut menjadi sebuah
   susunan alphabetic
 - Apabila di temukan angka 0 pada susunan angka, itu berarti adalah sebuah spasi
 - Buatlah susunan huruf itu menjadi sebuah string

*/

function nextTargetName(angka){

  // Mulai code disini
  let arr = angka;
  let alphabet = [" ","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  for(let loop=0;loop<arr.length;loop++){
    arr.splice(loop,1,alphabet[arr[loop]])
  }
  return arr.join("");

}

console.log(nextTargetName([1,12,1,19,20,1,9,18,0,1,18,3,8,9,5])); // Alastair Archie
console.log(nextTargetName([12,1,12,20,8,1,26,1,18,0,6,5,18,7,21,19])); // Balthazar Ferguss
