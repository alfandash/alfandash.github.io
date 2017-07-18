// Objects Competency Test
// 1. Fox Activities
// Buatlah sebuah class Fox yang menerima parameter awal berupa species dan favouriteFood.
// Fox memiliki property/atrribute yaitu species dan favouriteFood, dan mempunyai method atau
// function sebagai berikut:
// howl()​ : function ini akan mereturn sebuah string yang berisi: “Howl! I’m a/an <species> Fox !!!”
// Pastikan jika nama species huruf depannya merupakan huruf hidup/vokal, gunakan an. Jika
// nama species huruf depannya merupakan konsonan/huruf mati, gunakan a.
// meet(foxObj)​ : function yang menerima object fox lain ini akan mereturn string yang berisi:
// “hello nice to meet you” apabila nama spesies fox berbeda dengan nama species fox yang
// menjadi parameter.
// “Hey brother!” apabila nama spesies fox sama dengan nama species fox yang menjadi
// parameter.
// changeGenetics(newSpecies)​ : function yang menerima parameter string yang berisi nama
// spesies baru, dan akan mengubah nama spesies Fox tersebut.
//
function Fox(speciesParam, favouriteFoodParam) {
  //Code Disini
  this.howl = function() {
    //console.log(speciesParam.charAt(0));
    if(speciesParam.charAt(0)!=='A' && speciesParam.charAt(0)!=='I' && speciesParam.charAt(0)!=='U' && speciesParam.charAt(0)!=='E' && speciesParam.charAt(0)!=='O' ) {
      return 'Howl! I’m a '+speciesParam+' Fox !!!';
    } else {
      return 'Howl! I’m an '+speciesParam+' Fox !!!';
    }
  }

  this.speciesParam = speciesParam;
  this.favouriteFoodParam = favouriteFoodParam;

  this.meet = function(obj) {
    if (this.speciesParam !== obj.speciesParam) {
      return 'hello nice to meet you';
    } else {
      return 'Hey brother!';
    }
  }

  this.changeGenetics = function(str) {
    this.speciesParam = str;
  }
}

var jakeTheFox = new Fox("Darwin", "Meat");
var mikeTheFox = new Fox("Ethiopian", "Meat");
var lukeTheFox = new Fox("Fire", "Grass");
var chrisTheFox = new Fox("Darwin", "Grass");

console.log(jakeTheFox.howl()); // howl! I'm a Darwin Fox !!!
console.log(mikeTheFox.howl()); // howl! I'm an Ethiopian Fox !!!
console.log(lukeTheFox.howl()); // howl! I'm a Fire Fox !!!

console.log(jakeTheFox.meet(mikeTheFox)); // hello nice to meet you
console.log(jakeTheFox.meet(chrisTheFox)); // hey brother!
console.log(mikeTheFox.meet(lukeTheFox)); // hello nice to meet you

jakeTheFox.changeGenetics('Ethiopian');
console.log(jakeTheFox.meet(chrisTheFox)); // hello nice to meet you
console.log(jakeTheFox.meet(mikeTheFox)); // hey brother!
