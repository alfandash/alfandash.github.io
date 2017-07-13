// Mendeteksi DOM berdasarkan ID
 var fillMe = document.getElementById("fill-me");
 //console.log(fillMe);
 fillMe.innerHTML = "Halo!";

// Mendeteksi DOM berdasarkan class
 var changeAllOfMe = document.getElementsByClassName("change-all-of-me");
 //console.log(changeAllOfMe);
 for (var i = 0; i < changeAllOfMe.length; i++) {
   changeAllOfMe[i].innerHTML = "HALO JUGA!";
 }

//Mendeteksi DOM berdasarkan tag
var headContent = document.getElementsByTagName("h2");
headContent[0].innerHTML = "Apa Kabar!"
