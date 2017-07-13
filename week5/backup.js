// select input by id="regis"
var registration=document.getElementById('regis');
var registrationForm=document.getElementById('registration-form');
var inputForm=registrationForm.getElementsByTagName('input');
var username ='';
var balance=0;

// select div game
var game=document.getElementById('game');
var gameNumber=game.getElementsByClassName('digit');
var nama=game.getElementsByClassName('nama');
var credit=game.getElementsByClassName('credit');


registrationForm.addEventListener('submit', function(event) {
  for (var i = 0; i < inputForm.length; i++) {
    event.preventDefault();
    let labelInputForm = inputForm[i].getAttribute('label');
    let valueInputForm = inputForm[i].value;
    console.log(valueInputForm);
    console.log(labelInputForm);
    // Check form input
    if (valueInputForm == "") {
      return alert(labelInputForm+ " tidak boleh kosong untuk memulai game")
    }

    // input data into data temp
    switch (labelInputForm) {
      case 'username' : { username = valueInputForm;break;}
      case 'credit' : { balance = valueInputForm;break;}
    }
  }
  game();
  // if (registration.style.display === '') {
  //   registration.style.display = 'none';
  // }
})

var game = function(){
  // output nama dan credit
  nama[0].innerHTML="Nama : "+username;
  credit[0].innerHTML="Jumlah Uang : "+balance;
}

// for animation
var duration = 5000;
var started = new Date().getTime();

function hitung() {
  animationTime = setInterval(function(){
    if(new Date().getTime() - started > duration) {
      clearInterval(animationTime);
    } else {
      var digit1 = Math.floor(Math.random()*10);
      var digit2 = Math.floor(Math.random()*10);
      var digit3 = Math.floor(Math.random()*10);
      //console.log(hitung);
      gameNumber[0].innerHTML = digit1 +" "+ digit2 +" "+ digit3 ;
    }
  },100);
}
