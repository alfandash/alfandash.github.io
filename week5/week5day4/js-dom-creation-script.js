// seleksi tag body
var body = document.body;

// membuat <div> menggunakan createElement
var mainDiv = document.createElement('div');

// membuat menambahkan <div id="main"> maka kita  harus membuat HTML attribute id
var mainDivAttrId = document.createAttribute('id');

// untuk memberikan nilai kepada id, maka kita gunakan .value
mainDivAttrId.value = "main";

// id="main" kita sudah siap, sekarah tambahkan attribut kedalam mainDiv
mainDiv.setAttributeNode(mainDivAttrId);

// mainDiv kita sudah berubah menjadi <div id="main">. saatnya kita tambahkan ke dalam <body>
// karena kita akan meletakkan <div id="main"> di dalam <body>. maka kita gunakan appendChild
body.appendChild(mainDiv);
console.log(body.children);

var insideMainDiv = document.createElement('div');
insideMainDiv.setAttribute('id','inside-main');
mainDiv.appendChild(insideMainDiv);

// membuat h1 dengan isi teks didalamnya.
var h1=document.createElement('h1');

// membuat isi tek di dalam h1, dengan createTextNode
var h1Text=document.createTextNode('Heading Sample 1');

// kita append text kedalam <h1>
h1.appendChild(h1Text);

// kemudian, kita append h1 sebagai child dari <div id="inside-main"
insideMainDiv.appendChild(h1);

// mencoba membuat sebuah button dengan isi teks
var button = document.createElement('button');
var buttonText = document.createTextNode('Click me!');

button.appendChild(buttonText);

// membuat event listiner untuk button
button.addEventListener('click',function(){
  alert('Hello!');
})

insideMainDiv.appendChild(button);
