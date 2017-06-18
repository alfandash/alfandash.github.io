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


var list = function (peserta,barang) {
  this.barang=barang;
  this.peserta=peserta;
  this.daftarPeserta = function (peserta,barang) {
    console.log('Daftar peserta bedasarkan tebakan barang');
    for (var looping = 0; looping <(barang.length); looping++) {
      console.log('Barang no '+ barang[looping].no+' nama barang: '+barang[looping].nama);
      var totalPeserta=0;
      for (var looping2 =0; looping2 <(peserta.length); looping2++){
        if (peserta[looping2].pilihanBarang==barang[looping].no) {
          console.log('Nama: '+peserta[looping2].nama+', no peserta '+peserta[looping2].noPeserta + ' tebakan harga Rp.'+peserta[looping2].tebakanHarga);
          peserta[looping2].selisihTebakan = (Math.abs(peserta[looping2].tebakanHarga-barang[looping].harga));
          totalPeserta+=1;
        }
      }
      if (totalPeserta == 0) {
        console.log('Tidak ada peserta berpartisipasi');
      }
    }
  }
  this.daftarBarang = function (barang){
    console.log('Barang yang di perebutkan');
    for (var looping = 0; looping < (barang.length); looping++) {
      console.log('Nama barang: '+barang[looping].nama+' harga barang aseli Rp'+barang[looping].harga);
    }
  }
  this.mencariPemenang = function (peserta,barang) {
    console.log('Pengumuman pemenang dengan tebakan paling mendekati!!');
    for (var looping = 0; looping < (barang.length); looping++) {
      var pemenang=[];
      console.log('Pemenang untuk barang '+ barang[looping].nama + ' adalah');
      // inisiasi variabel pemenang untuk menampung daftar pemenang
      for (var looping2=0; looping2 < (peserta.length); looping2++){
        if(peserta[looping2].pilihanBarang==barang[looping].no){
          pemenang.push(peserta[looping2]);
        }
      }
      // sortir pemenang yang paling mendekeati dengan ascending
      pemenang.sort(function(a, b){
        return  a.tebakanHarga + b.tebakanHarga ;
      });
      // pilih 1 pemenang yang paling mendekati
      if ((pemenang.length) == 0) {
        console.log('Tidak ada pemenang karena tidak ada peserta menebak');
      } else {
        console.log('Selamat kepada '+ pemenang[0].nama +'dengan selisih tebakan Rp.' + pemenang[0].selisihTebakan);
      }
    }

  }
}

var lomba1 = new list();

console.log("Tebak Harga, adalah sebuah permainan menebak harga secara benar");
console.log("-------------");
console.log("Pemenang di tentukan berdasarkan tebakan yang mendekati harga barang, bisa lebih atau kurang dari harga. kita pilih yang terdekat.");
console.log('--------------');
console.log('Selamat Datang di games tebak harga');
console.log('-----------------------------------');
lomba1.daftarBarang(barang);
console.log('------------------------------------');
lomba1.daftarPeserta(peserta,barang);
console.log('-------------------------------------');
lomba1.mencariPemenang(peserta,barang);
