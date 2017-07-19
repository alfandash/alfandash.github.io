//Contoh Array
var animals = ["Lion", "Tiger", "Puma"]
animals
animals[0]
animals[3] = "Jaguar"
animals[10] = "Leopard"
animals[1] = undefined
animals
animals[5]
animals[0] = 100
animals[1] = true
animals
animals[3] = ["Zero", 1, "Two"]
animals[3][3] = "Three"

console.log(animals);

//Contoh syntax berkaitan dengan array

animals.push("dragon"); // memasukkan data baru dan akan di masukkan ke urutan terakhir dalam array
animals.pop(); // mengeluarkan isis aray urutan paling akhir
console.log(animals.slice(0,4)); // slice mengambil bagian dari array

// Contoh builtin syntax array secara singkat

var animalsArray = ["lion", "horse"];

// Penggunaan PUSH
animalsArray.push("duck"); // menambahkan 1 nilai ke array bagian paling belakang
console.log(animalsArray); // ["lion", "horse", "duck"]

// Penggunaan POP
animalsArray.pop(); // menghapus 1 nilai array terbelakang
console.log(animalsArray); // ["lion", "horse"]

// Penggunaan UNSHIFT memasukkan 1 nilai array paling depan
animalsArray.unshift("dog");
console.log(animalsArray); // ["dog", "lion", "horse"]

// penggunaan SHIFT menghapus 1 nilai array paling depan
animalsArray.shift();
console.log(animalsArray);  // ["lion", "horse"]

// penggunaan SORT mengurutkan elemen sesuai alphabet
animalsArray.sort();
console.log(animalsArray);  // ["horse", "lion"]

// penggunaan SORT pada angka ascending
var arr_number = [1, 2, 15];
arr_number.sort(function(value1, value2) { return value1 > value2 });
console.log(arr_number); // 1, 2, 15

// Penggunaan JOIN menggambungkan array menjadi string, dan element penyambung dirubah menjadi template sesuai dengan yang diisikan
animalsArray.join(" and ");
console.log(animalsArray); // "horse and lion"

// Penggunaan SLICE mengambil bagian dari array
var arr = [0, 1, 2, 3, 4];
var irisan1 = arr.slice(1,3); // mengambil irisan array mulai dari index 1 hingga index 2 (sebelum index 3). Index 3 tidak ikut diambil.
console.log(irisan1); // [1, 2]
var irisan2 = arr.slice(1);
console.log(irisan2); // [1, 2, 3, 4]
var irisan3 = arr.slice(2, 3);
console.log(irisan3); // [2]
var irisan4 = arr.slice(2, 2);
console.log(irisan4); // [] KOSONG!


// Penggunaan SPLICE

var arr_split = ["buku", "laptop", "komputer"];
arr_split.splice(2, 0, "televisi"); // Menghapus 0 nilai dari index 2, dan menambah 1 nilai yaitu "televisi" pada index 2.
console.log(arr_split); // ["buku", "laptop", "televisi", "komputer"]

arr_split.splice(0, 2); // Menghapus 2 nilai dari index 0
console.log(arr_split); // ["televisi", "komputer"]

arr_split.splice(0, 1, "majalah", "koran"); // Menghapus 1 nilai dari index 0, dan menambah 2 nilai yaitu "majalah" dan "koran"
console.log(arr_split); // [majalah", "koran", "komputer"]

//  Penggunaan SPLIT

var kalimat = "saya adalah full-stack javascript programmer!";
var kata = kalimat.split(" "); // kalimat dipecah dengan separator berupa spasi.
console.log(kata); // ["saya", "adalah", "full-stack", "javascript", "programmer!"]
