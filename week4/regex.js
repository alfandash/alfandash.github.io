let paragraph = "ar far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts!. Separated they! live in far away from Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small . When she reached the first hills! of the Italic Mountains,she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road!, the Line Lane. Pityful a rethoric question ran over her cheek!"
console.log(paragraph.match(/far/g));

let message = "regex itu mudah";
console.log(/[A-Z]/.test(message));

let msg2 = "Regex itu mudah Cuy";
console.log(/[A-Z]/.test(msg2));

// object Regex
let objectRegex = new RegExp('[A-Z]');

console.log(objectRegex.test(message));
console.log(objectRegex.test(msg2));


// regex fungsi split
let msg3 = "ini belajar  memisahkan";
console.log(msg3.split(/\s/));
// /s adalah ekspresi dengan 1 spasi

// regex fungsi replace
let msg4 = "belajar regex yang banyak banget dah regex regex asik regex"
let regexmsg4 = msg4.replace(/regex/,'uhuy');
// jika hanya /regex/ hanya terdepan, jika di tambah /regex/g maka secara global akan di replace jika di tambah /regex/gi maka tidak akan berpengaruh besar kecilnya
console.log(regexmsg4);


// regex fungsi match
let msg5 = "Regex seru DEH!"
console.log(msg5.match(/e/));
console.log(msg5.match(/e/g));
console.log(msg5.match(/e/gi));

// Contoh 2 Penggunaan Match - Mencocokan Karakter dan Mengecualikan Punctuation atau Simbol

let msg6 = "walau regex kadang memusingkan... but its oke %&^$%$&&^*$&U%*^* dan *%&^&$%&^*6"

console.log(msg6.match(/[a-z]+/gi));
// jika di tambah + pada [a-z] maka akan menyatukan setiap match yang sesuai dan akan berpisah jika terdapat ekspresi yang tidak sesuai
console.log(msg6.match(/[a-z]/gi));
