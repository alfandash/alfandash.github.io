// contoh cunstructor function
function manusia (namaManusia, umurManusia) {
  this.nama = namaManusia;
  this.age = umurManusia;
  this.talk = function(namaManusiaLain) {
    console.log('Hi,' + namaManusiaLain + '!');
    console.log('My name is ' + this.nama);
    console.log('I am  ' + this.age + ' years old');
  }
}


// melakukan instantiate
var mario = new manusia ('Mario', 34);
var luigi = new manusia('alfan', 26);

console.log(mario.nama);
console.log(luigi.age);

mario.talk(luigi.nama);
