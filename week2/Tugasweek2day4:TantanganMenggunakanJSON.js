// Deklarasi object
var Human1 = [
  {
  nama: 'Tono',
  hari: 'Senin',
  kehadiran: 'Masuk',
  alasan: ''
  },
  {
  nama: 'Tono',
  hari: 'Rabu',
  kehadiran: 'Masuk',
  alasan: ''
  },
  {
  nama: 'Tono',
  hari: 'Jumat',
  kehadiran: 'Absen',
  alasan: 'Dinas Luar'
  }
]

// Deklarasi function
var JSON = function(Human1) {
  this.Human1 = Human1
  var hariKerja = (this.Human1.length);
  var hariMasuk = 0;
  var hariAbsen = 0;
  for (var looping = 0; looping < (this.Human1.length); looping++)
  {
  console.log('nama :'+ this.Human1[looping].nama);
  console.log('hari :'+ this.Human1[looping].hari);
  console.log('Kehadiran :'+ Human1[looping].kehadiran);
    if (this.Human1[looping].alasan != '') {
      console.log('Alasan :'+ this.Human1[looping].alasan);
      hariAbsen += 1;
    }
  console.log('');
  }

  hariMasuk = hariKerja - hariAbsen;
  console.log('Total hari kerja minggu ini: '+ hariKerja +' hari');
  console.log('Total Masuk: '+ hariMasuk + ' hari');
  console.log('Total Tidak Masuk: '+ hariAbsen +' hari');

  return [hariKerja, hariMasuk, hariAbsen];
}

// Eksekusi function
JSON(Human1);
