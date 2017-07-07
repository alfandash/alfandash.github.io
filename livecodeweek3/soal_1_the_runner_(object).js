/*
HACKTIV8 Online Live Coding 1

Nama: ALfan Diki Asshari

==========
THE RUNNER
==========

Berikut ini merupakan data anak-anak muda yang berhasil selamat dari bencana tersebarnya virus ganas yang mematikan hampir
mematikan seluruh penduduk bumi. Anak-anak muda yang berhasil selamat disini, disebut dengan runner, Karena mereka harus
terus berlari / berpindah tempat untuk tetap hidup.

[PERINTAH]
Buatlah 4 buah Runner sebagai Object secara JSON dengan yang struktur didalam nya terdapat:
Name , Age ,  dan Skill

Name  Age  Skill
Thomas  28   Visioning
Teresa  35   Cooking
Fry Pan 21   Crafting
Gally   32   Fighting

Masukan ke 4 Object tersebut pada sebuah Array
Buat Iterasi sebanyak jumlah Object
Buat akses setiap property

[CONTOH]
Array[index].objectProperty

Tampilkan informasi seperti contoh berikut:

Nama : Thomas
Age : 28
Skill : Visioning

Hitunglah Runner yang Umur nya di antara 20 dan 30 dan tampilkan Namanya

Runner Between 20 - 30 : NamaRunner-1, NamaRunner-2

*/


//Mulai Code dibawah ini

var runner = [
  {
    name:"Thomas",
    age:28,
    skill:"Visioning"
  },
  {
    name:"Teresa",
    age:35,
    skill:"Cooking"
  },
  {
    name:"Fry Pan",
    age:21,
    skill:"Crafting"
  },
  {
    name:"Gally",
    age:32,
    skill:"Fighting"
  }
]

var mazerunner = function(runner) {
  let len = runner.length;
  let tampung = [];
  for (let loop=0;loop<len;loop++){
    console.log("nama: "+runner[loop].name);
    console.log("age: "+runner[loop].age);
    console.log("Skill: "+runner[loop].skill);
    console.log("");
    if (runner[loop].age>=20 && runner[loop].age<=30) {
      tampung.push(runner[loop].name)
    }
  }
  console.log("Umur antara 20 - 30 : "+tampung.join(", "));
}

mazerunner(runner);
