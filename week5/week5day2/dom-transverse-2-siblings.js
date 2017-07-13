/*
=============================================
 Menseleksi DOM berdasarkan hubungan Sibling
=============================================
*/

// Menseleksi element <div id="contoh-div-1">
var contohDiv1 = document.getElementById('contoh-div-1');

// mendapatkan sibilng setelah <div id="contoh-div-1"
var contohDivNextSibling = contohDiv1.nextElementSibling;

console.log(contohDivNextSibling); //<div id="contoh-div-2">

// mendapatkan sibling sebelum <div id="contoh-div=1"
var contohDiv1PrevSibling = contohDiv1.previousElementSibling;

console.log(contohDiv1PrevSibling);
