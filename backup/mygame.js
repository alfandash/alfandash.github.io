// inisiasi variable object

var peserta = [
  {
    noPeserta: 1,
    nama:"alfan",
    alamat:"Jakarta",
    noHp:"08561771911",
    tebakanHarga:2000000,
    pilihanBarang:1,
    selisihTebakan:0
  },
  {
    noPeserta: 5,
    nama:"diki",
    alamat:"Jakarta",
    noHp:"08561771911",
    tebakanHarga:1000000,
    pilihanBarang:1,
    selisihTebakan:0
  },
  {
    noPeserta: 4,
    nama:"dewi",
    alamat:"Karawang",
    noHp:"0856789987",
    tebakanHarga:900000,
    pilihanBarang:2,
    selisihTebakan:0
  },
   {
    noPeserta: 7,
    nama:"ujang",
    alamat:"Karawang",
    noHp:"0856789987",
    tebakanHarga:700000,
    pilihanBarang:3,
    selisihTebakan:0
  }
]

var barang = [
  {
    no:1,
    nama:"rice cooker",
    harga:700000
  },
  {
    no:2,
    nama:"handphone",
    harga:1500000
  },
  {
    no:3,
    nama:"apple watch",
    harga:2500000
  },
  {
    no:4,
    nama:"apple watch 7",
    harga:25000000
  }
]

// Deklarasi function list nama peserta
var listPeserta = function (peserta,barang) {
  this.barang =barang;
  this.peserta = peserta;
  // Mencari total jumlah pilihan barang
  var looping=0;
  var banyakPilihan =[];
  for (looping=0; looping < (this.peserta.length); looping++){
    banyakPilihan.unshift(this.peserta[looping].pilihanBarang);
  }
  // sortir ascending
  banyakPilihan.sort(function(value1, value2) { return value1 > value2 });
  // filtering total pilihan
  var pilihan = [];
  for (looping = 0; looping < (banyakPilihan.length); looping++){
    if (looping == 0) {
      pilihan.push(banyakPilihan[looping]);
    } else {
      if (banyakPilihan[looping] != banyakPilihan[looping-1]) {
        pilihan.push(banyakPilihan[looping]);
      }
    }
  }
  // Menampilkan peserta berdasarkan pilihan barang
  for (looping =0; looping < (pilihan.length); looping++){
    console.log("Daftar peserta yang ikut menebak pada barang no. "+ pilihan[looping] + " dengan nama: " + this.barang[pilihan[looping]-1].nama);
    for (var looping2 =0; looping2 < (this.peserta.length); looping2++){
      if (this.peserta[looping2].pilihanBarang==pilihan[looping]){
        console.log("No peserta " + this.peserta[looping2].noPeserta + " atas nama : " + this.peserta[looping2].nama);
      }
    }
  }
}


var listBarang = function (barang) {
  this.barang = barang;
  console.log("Berikut adalah daftar barang-barang yang di perebutkan :");
  for (var looping=0; looping < (this.barang.length); looping++){
    console.log("Nama Barang : "+this.barang[looping].nama);
    console.log("Harga Barang: Rp. "+this.barang[looping].harga);
  }

}

//deklarasi function mencari pemenang
var mencariPemenang = function(peserta,barang) {
  this.peserta = peserta;
  this.barang = barang;
  var looping=0;
  var looping2=0;
  for (looping=0; looping < (this.barang.length); looping++){
    var pemenang = [];
    console.log('Pemenang untuk '+this.barang[looping].nama + ' kode barang '+ this.barang[looping].no );
    //inisiasi grouping berdasarkan pemilihan hadiah
    for (looping2=0; looping2 < (this.peserta.length); looping2++){
       //inisiasi property selisih tebakan
      peserta[looping2].selisihTebakan = (Math.abs(this.peserta[looping2].tebakanHarga - this.barang[looping].harga));
      //inisiasi array pemenang berdasarkan pilihan hadiah
      if (this.peserta[looping2].pilihanBarang == this.barang[looping].no)
        {
          pemenang.push(this.peserta[looping2]);
        }
    }
    // sortir yang paling mendekati
    pemenang.sort(function(a, b){
      return  a.tebakanHarga + b.tebakanHarga ;
    });
    // pilih pemenang berdasarkan yang paling dekat
    if ((pemenang.length) == 0) {
      console.log('tidak ada pemenang karena tidak ada peserta')
    } else {
      if ((pemenang.length) > 1) {
          if (pemenang[0].selisihTebakan < pemenang[1].selisihTebakan){
          console.log('Selamat kepada '+ pemenang[0].nama + ' dengan selisih tebakan Rp.' + pemenang[0].selisihTebakan );
          } else {
            console.log('Selamat kepada '+ pemenang[1].nama + ' dengan selisih tebakan Rp.' + pemenang[1].selisihTebakan );
          }
      } else {
        console.log('Selamat kepada '+ pemenang[0].nama + ' dengan selisih tebakan Rp.' + pemenang[0].selisihTebakan);
      }
    }
  }
}


console.log("Tebak Harga, adalah sebuah permainan menebak harga secara benar");
console.log("-------------");
console.log("Pemenang di tentukan berdasarkan tebakan yang mendekati harga barang, bisa lebih atau kurang dari harga. kita pilih yang terdekat.");
console.log("-------------");
listBarang(barang);
console.log("-------------");
listPeserta(peserta,barang);
console.log("-------------");
mencariPemenang(peserta,barang);
