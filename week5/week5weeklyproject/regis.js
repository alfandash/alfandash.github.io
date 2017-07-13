// select input by id="regis"
var registration=document.getElementById('regis');
var registrationForm=document.getElementById('registration-form');
var inputForm=registrationForm.getElementsByTagName('input');
var username ='';
var balance=0;

registrationForm.addEventListener('submit', function(event) {
  for (var i = 0; i < inputForm.length; i++) {
    event.preventDefault();
    let labelInputForm = inputForm[i].getAttribute('label');
    let valueInputForm = inputForm[i].value;
    console.log(valueInputForm);
    console.log(labelInputForm);
    // Check form input
    if (inputForm[i].getAttribute('type') === 'checkbox') {
      if (inputForm[i].checked == false) {
        return alert(labelInputForm+ " tidak boleh kosong untuk memulai game")
      }
    } else if (valueInputForm == "") {
      return alert(labelInputForm+ " tidak boleh kosong untuk memulai game")
    } else if (labelInputForm === 'balance') {
      if (valueInputForm == 0){
        return alert(labelInputForm+ " tidak boleh Rp. 0")
      }
    }
    // input data into data temp
    switch (labelInputForm) {
      case 'username' : { username = valueInputForm;break;}
      case 'balance' : { balance = Number(valueInputForm);break;}
    }
  }
  if (registration.style.display === '') {
      registration.style.display = 'none';

    }
    startGame();
})


// select div game
var game=document.getElementById('game');
var gameNumber=game.getElementsByClassName('digit');
var nama=game.getElementsByClassName('nama');
var credit=game.getElementsByClassName('credit');
var notif=game.getElementsByClassName('notif');
var play=document.getElementById('play');

// select div result
var summary=document.getElementById('summary');

// var for game
var digit1;
var digit2;
var digit3;
var hasil = [];

var startGame = function(){
  // display
  game.style.display = 'block';

  // output nama dan credit
  nama[0].innerHTML="Nama Pendosa : "+username;
  credit[0].innerHTML="Jumlah Uang : Rp."+balance;
  // function roll the dice
  this.roll = function (callBack){
    console.log(credit);
    // for animation
    console.log(play);
    var duration = 4000;
    var started = new Date().getTime();
    var animationTime = setInterval(function(){
      if(new Date().getTime() - started > duration) {
        clearInterval(animationTime);
        play.disabled=false;
        callBack();
      } else {
        digit1 = Math.floor(Math.random()*10);
        digit2 = Math.floor(Math.random()*10);
        digit3 = Math.floor(Math.random()*10);
        gameNumber[0].innerHTML = digit1 +" "+ digit2 +" "+ digit3 ;
        play.disabled=true;
      }
    },100);
  }

  // function kalkulasi dari hasil
  this.hitung = function(balance,hasil) {
    let status = 0;
    if (hasil[0] == hasil[1]){
      status = 1;
      if (hasil[0] == hasil[2]){
        status = 2;
      }
    } else if (hasil[1] == hasil[2]) {
      status = 1;
    }

    if (status == 1) {
      result = (hasil[0]+hasil[1]+hasil[2]) * 100;
      balance = balance + result
      credit[0].innerHTML="Jumlah Uang : Rp."+balance;
      notif[0].innerHTML= "Kamu Menang Rp."+result+", Total dosa kamu Rp."+ balance
      return balance;
    } else if (status == 2) {
      result = (hasil[0]+hasil[1]+hasil[2]) * 200;
      balance = balance + result
      credit[0].innerHTML="Jumlah Uang : Rp."+balance;
      notif[0].innerHTML= "Kamu Menang Rp."+result+", Total dosa kamu Rp."+ balance
      return balance;
    } else {
      result = (hasil[0]+hasil[1]+hasil[2]) * 200;
      balance = balance - result
      credit[0].innerHTML="Jumlah Uang : Rp."+balance;
      notif[0].innerHTML= "Kamu Kalah Rp."+result+", Total dosa kamu Rp."+ balance
      return balance;
    }
  }

  // function hasil jika balance sudah kososng
  this.summary_function = function() {
    // display
    game.style.display = 'none';
    summary.style.display = 'block';
    // add content
    let notification = document.getElementById('message');
    notification.innerHTML = "Kamu kalah! Balance kamu Rp."+balance;
  }
}


play.addEventListener('click',function() {
  var arr = new startGame()
  arr.roll(function(){
    console.log('ini digit 1 setelah call back'+digit1);
    hasil=[digit1,digit2,digit3];
    hasil= hasil.sort();
    balance = arr.hitung(balance,hasil);
    if (balance <= 0) {
      arr.summary_function();
    }
  });
  console.log('ini digit 1 '+digit1);
})
