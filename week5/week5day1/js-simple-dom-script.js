var pageTitleElement = document.getElementById("page-title");
// menteleksi DOM berdasarkan Id element dan menampungnya kedalam variabel "pageTitleElement". isinya merupakan object html element
console.log(pageTitleElement);

// Mengubah isi pageTitleElement
pageTitleElement.innerHTML = '<h2> Updated Content of Page Title Element </h2> ';
var newPageTitleElementContent = pageTitleElement.innerHTML;
console.log('isi baru dari <div id="page-title"> :' + newPageTitleElementContent);

var pageBoxElements = document.getElementsByClassName("page-box");
// menyeleksi DOM berdasarkan nama class elemnt dan menampungnya kedalam variabel "pageBoxElements". isinya merupakan array dari object html element,

console.log(pageBoxElements);

var pageHeadings = document.getElementsByTagName("h1");
// menyeleksi DOM berdasarkan tag <h1> dan menampunya ke dalam variabel. isinya merupakan array dari object HTML element, walau <h1> hanya ada 1

console.log(pageHeadings);

var pageTitleElementsContent = pageTitleElement.innerHTML;
console.log('isi <div id="page-title"> :' + pageTitleElementsContent);
// isi <div id="page-title"> adalah Sample Page Title

// var pageBoxElementsContent = pageBoxElements.innerHTML;
// console.log('isi <div class="page-box"> :' + pageBoxElementsContent);
// isi <div class="page-box"> adalah undefined!

// Mengambil isi elemen pageBoxElements yang pertama, yaitu index ke 0
var firstPageBoxElement         = pageBoxElements[0];
var firstpageBoxElementContent  = firstPageBoxElement.innerHTML;

// Menampilkan isi elemen dengan console.log
console.log('isi <div class="page-box"> yang pertama:' + firstpageBoxElementContent);

// Mengambil isi elemen pageBoxElements yang kedua, yaitu index ke 1
var secondPageBoxElement         = pageBoxElements[1];
var secondPageBoxElementContent  = secondPageBoxElement.innerHTML;

// Menampilkan isi elemen dengan console.log
console.log('isi <div class="page-box"> yang kedua:' + secondPageBoxElementContent);

// Mengambil isi elemen pageBoxElemts yang ketiga, yaitu index ke 2
var thirdPageBoxElement = pageBoxElements[2];
var thirdPageBoxElementContent = thirdPageBoxElement.innerHTML;

// Menampilkan isi elemen dengan console.log
console.log('isi <div class="page-box"> yang ketiga:' + thirdPageBoxElementContent);


// loop array pageBoxElements
for(let i=0; i<pageBoxElements.length;i++){
  let pageBoxElement = pageBoxElements[i];
  let pageBoxElementContent = pageBoxElement.innerHTML;
  console.log("isi <div class= page-box> index ke " +i+ " : " + pageBoxElementContent);
}
