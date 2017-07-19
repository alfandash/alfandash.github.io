var Teman = function (nama,kabar,pekerjaan) {
  this.nama = nama;
  this.kabar = kabar;
  this.pekerjaan = pekerjaan;

  console.log('halo ' + nama + ', apa kabar ' );

  this.sapa = function (nama) {
    console.log('halo ' + nama + ', apa kabar ' );
  }
  this.balasSapa = function (nama) {
    console.log('Halo ' + nama + ', kabarku ' + this.kabar );
  }
  this.tanyaPekerjaan = function() {
    console.log('Apa pekerjaan mu saat ini?');
  }
  this.balasPekerjaan = function() {
    console.log('Pekerjaanku saat ini adalah '+this.pekerjaan)
  }
  this.berpisah = function(object) {
   console.log('Senang bertemu denganmu ' + object.nama + ' , semoga kamu sukses sebagai ' + object.pekerjaan );
  }
}


var budi = new Teman('Budi', 'baik', 'developer');
// Budi adalah sebuah variabel berbentuk object dan di inisiasi sebagai class teman dan memiliki di masukkan dengan parameter (nama, kabar, pekerjaan).
// pada class teman parameter nama kabar dan pekerjaan di masukkan kedalam properti disebut nama kabar pekerjaan
// pada class tersebut memiliki method sapa balassapa dll
// jadi object budi pada class teman bisa melakukan apasaja yang disebut method seperti budi.sapa


var tono = new Teman('Tono', 'baik', 'chef');
// budi adalah sebuah variabel yang berisi class teman
// var budi dengan class teman sendiri berisi parameter 'budi' 'baik' 'developer
//'
// tono adalah sebuah variabel yang berisi class teman


budi.sapa(tono.nama);
tono.balasSapa(budi.nama);
budi.tanyaPekerjaan();
tono.balasPekerjaan();
budi.berpisah(tono);
/*
Halo Tono, apa kabar?
Halo Budi, kabarku baik
Apa pekerjaanmu saat ini?
Pekerjaanku saat ini adalah chef
Senang bertemu denganmu Tono, semoga kamu sukses sebagai chef
*/
