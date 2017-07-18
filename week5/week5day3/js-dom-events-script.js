// select <button> dengan id alert-on-click button
var alertOnClickButton = document.getElementById('alert-on-click-button');

console.log(alertOnClickButton);// check
// tambahakn event listener ke <button> alerOnClickButton, dengan trigger atau pemicunya adalah click dan memanggil function sebagai parameter kedua.
alertOnClickButton.addEventListener('click', function() {
  alert('Hello There');
  // mengakses salah satu nilai input dari form
})

// select <button> denagn id log-on-click-button
var logOnHoverButton = document.getElementById('log-on-hover-button');

console.log(logOnHoverButton); //check

// Tambahkan Event Listener ke <button> alertOnHoverButton, dengan trigger atau pemicu nya adalah mouseenter dan memanggil function sebagai parameter kedua.
logOnHoverButton.addEventListener('mouseenter', function(){
  console.log('Hello, saya sedang melakukan hover atau mouse enter ke button');
})

var logOnLeaveButton = document.getElementById('log-on-leave-button');

console.log(logOnLeaveButton);//check
// Tambahkan Event Listener ke <button> alertOnHoverButton, dengan trigger atau pemicu nya adalah mouseenter dan memanggil function sebagai parameter kedua.
logOnLeaveButton.addEventListener('mouseleave', function(){
  console.log('Hello, saya sedang keluar dari button');
})

// select <input> dengan id on-input
var onChangeInput = document.getElementById('on-input');

// select <input> dengan id "on-blur-content"
var inputContent = document.getElementById('on-input-content');

onChangeInput.addEventListener('input', function(event) {
  inputContent.innerHTML = event.target.value;
})


// select <input> dengan id on-blur
var onBlurInput = document.getElementById('on-blur');

// mengambil value input dari onblurInput
var onBlurInputValue = onBlurInput.value;
console.log("Value on Blur : "+onBlurInputValue);


// select <span id="on-blur-content"
var blurContent = document.getElementById('on-blur-content');



// tambahkan event listener dengan trigger blur ke input dengan id on-blur
onBlurInput.addEventListener('blur', function(event){
  blurContent.innerHTML=event.target.value;
})

// select form dengan id Main form
var mainForm = document.getElementById('main-form');

// tambahkan event listener dengan trigger submit ke <form id="main-form"
mainForm.addEventListener('submit', function(event){
  event.preventDefault();
  alert('Sukses Submit!');
})
