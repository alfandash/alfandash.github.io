var title ="coba title";

console.log(title[0]); // hasilnya ada C
console.log(title[title.length-1]); // hasilnya adalah e

title[0] = 'T'; // mencoba memasukkan string T menggunakan metode assignement array
console.log(title[0]);  // hasilnya tetap c

//.lenght mengembalikan panjang suatu string
var contoh_length = "makan tahu pake tempe";
console.log(contoh_length.length); // Hasilnya adalah 21

// .charAt([indeks])
var contoh_chart = "contoh lain lagi nih "
console.log(contoh_chart.charAt(3)); // hasilnya adalah T

// .concat([string]) menyatukan 2 string menjadi satu
var string1 = 'good';
var string2 = 'luck';
console.log(string1.concat(string2)); // goodluck

// .indexOf([strin/karakter]) Mengembalikan indeks dari string/karakter yang dicari, yang pertama kali ditemukan, atau -1 apabila tidak ditemukan.
var cari = 'makan tahu pake tempe';
console.log(cari.indexOf('tahu')); // hasilnya 6 karena t yang di cari pada index 6
console.log(cari.indexOf('p'));  // hasilnya 11 karena p yang di cari pada index 11
console.log(cari.indexOf('0')); // hasilnya -1 karena tidak di temukan

//. match([regular-expressions]) mencari string yang memenuhi syarat pada suatu regular expression dan memasukkan string yang ditemukan kedalam sebuah arra
var wordTest = 'Can you can a can as a canner can can a can?';
var foundCan = wordTest.match(/a/g);
console.log(foundCan); //["can", "can", "can", "can", "can", "can"]

//.replace([string/regex], [string untuk ditukar]) Mencari string tertentu atau regular expression pada parameter pertama di dalam suatu string dan mengembalikan string baru dimana isinya adalah parameter pertama (bila ditemukan) sudah ditukar dengan parameter kedua

var rockYou    = 'dung dung ces, dung dung ces';
var newRockYou = rockYou.replace(/ces/g, 'pret');
console.log(newRockYou); // dung dung pret, dung dung pret
var rockYou    = newRockYou.replace('dung', 'dum');
console.log(rockYou); // dum dung pret, dung dung pret
var newRock = rockYou.replace(/du/g, 'kampret');
console.log(newRock); // semua dengan awal du di ganti kampret : kampretm kampretng pret, kampretng kampretng pret

//.slice([indeks awal], [indeks akhir (optional)]) mengemvalikan potongan string mulai dari indeks pada parameter pertama sampai dengan indeks pada parameter kedua.

var slice1 ='mobil butut';
var slice2 = slice1.slice(0, 7);
console.log(slice2); // akan tampil "mobil b"

//.slice([karakter pemisah], [limit (optional)])

var story = 'mobil_butut_allhamdulillah';
var story_splitted = story.split('_');
console.log(story_splitted); // hasilnya adalah array ["mobil", "butut", "allhamdulillah"]

//.substr([indeks awal], [panjang yang diinginkan])Mengembalikan potongan string mulai dari indeks pada parameter pertama dengan karakter sebanyak yang ditentukan pada array kedua

var name= 'makan terasi pake sayur asem'
var name_substr = name.substr(1,10);
console.log(name_substr);// akan teras

//.substring([indeks awal], [indeks akhir (optional)]) Mengembalikan potongan string mulai dari indeks pada parameter pertama sampai dengan indeks pada parameter kedua

var name1= 'ujang sanusi suparman bintitan';
var name1_substring = name1.substring(6);
console.log(name1_substring);// "sanusi suparman bintitan"

//.toUpperCase()Mengembalikan string baru dengan semua karakter yang diubah menjadi huruf kapital.
var name2= 'tulisannya kecil semua awalnya';
var name2_uppercase = name2.toUpperCase();
console.log(name2_uppercase); // "TULISANNYA KECIL SEMUA AWALNYA"

//.toLowerCase() mengembalikan string baru dengan semua karakter yang dibuah menjadi huruf lower case
var name3 = 'TULISANNYA BESAR SEMUA AWALNYA';
var name3_lowercase= name3.toLowerCase();
console.log(name3_lowercase);

// .trim() Mengembalikan string baru yang sudah dihapus karakter whitespace pada awal dan akhir string tersebut.
var username ='     sepasinya banyak di depan sama di belakang       ';
var newUsername = username.trim();
console.log(newUsername);

// TYPE CASTING TO and From String
// fungsi global
var int  = 12;
var real = 3.45;
var arr  = [6, 7, 8];

var strInt  = String(int);
var strReal = String(real);
var strArr  = String(arr);

console.log(strInt);  // '12'
console.log(strReal); // '3.45'
console.log(strArr);  // '6,7,8'

// fungsi .toString() konversi tipe data lain menjadi sebuah string
var number = 21;
console.log(number.toString()); // '21'
var array = [1,2];
console.log(array.toString());// '1,2'

// number([string]) Fungsi global Number() mengonversi tipe data string menjadi angka. Data yang diberikan pada parameter harus berupa karakter angka saja, dengan titik bila angka adalah bilangan desimal.
var number1 = Number("90");   // number1 = 90
var number2 = Number("1.23"); // number2 = 1.23
var number3 = Number("4 5");  // number3 = NaN Bila parameter berisi karakter selain angka dan/atau titik, Number() akan mengembalikan NaN ***(Not a Number)***.

// parseInt([String]) dan parseFloat([String]) Fungsi global parseInt([String]) dan parseFloat([String]) mengembalikan angka dari string.

var int  = '89';
var real = '56.7';

var strInt_1 = parseInt(int);  // strInt_1 = 89
var strInt_2 = parseInt(real); // strInt_2 = 56

var strReal_1 = parseFloat(int); // strReal_1 = 89
var strReal_2 = parseFloat(int); // strReal_2 = 56.7 Bila angka adalah bilangan desimal maka gunakan parseFloat(), bila tidak bilangan dibelakang koma akan diabaikan.
