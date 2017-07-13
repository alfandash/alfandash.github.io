/*
====================================================
 Menseleksi DOM berdasarkan hubungan Parent - Child
====================================================
*/

// seleksi elemen <body>
var body = document.body;

// mendapatkan element children dari <body>
var bodyChilds = body.children;

// menampilkan DOM yang menjadi child dari body dalam bentuk array
console.log(bodyChilds); //HTMLCollection [ <h1>, <div#contoh-div-1>, <div#contoh-div-2>, <script> ]

// menseleksi element <div id="contoh-div-1">
var contohDiv1 = document.getElementById('contoh-div-1');

// mendapatkan element child dari <div id="contoh-div-1" dalam bentuk array
var contohDiv1Childs = contohDiv1.children;

// mendapatkan child pertama dari <div id="contoh-div-1">
var contohDiv1FirstChild = contohDiv1Childs[0]
console.log(contohDiv1FirstChild); //<p id="contoh-p-1">

// note: walaupun children mungkin hanya berisi 1 element, tetapi tertampung dalam array

//seleksi element div id="contoh-div-2"
var contohDiv2 = document.getElementById('contoh-div-2');

// mendapatkan element child dari <div id="contoh-div-2" dalam bentuk array
var contohDiv2Childs = contohDiv2.children;

// mendapatkan child dari <div id="contoh-div-2"> dengan menggunakan loopin g

for (var i = 0; i < contohDiv2Childs.length; i++) {
  var bucketContohDiv2Childs= contohDiv2Childs[i]
  console.log(bucketContohDiv2Childs);
}

// Seleksi element <p id="contoh-p-1">
var contohP1 = document.getElementById('contoh-p-1');
console.log(contohP1); // <p id="contoh-p-1">

var contohP1Parent = contohP1.parentNode;
console.log(contohP1Parent); //<div id="contoh-div-1">
