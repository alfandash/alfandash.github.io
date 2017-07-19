var nama = '';
var peran = '';

/* hapus tanda // untuk melihat hasil */

//Contoh input 1
//nama = ' ';
//peran = ' ';

//Contoh input 2
//nama = 'Alfan'
//peran = 'Ksatria'

//Contoh input 3
//nama = 'Alfan'
//peran = 'Tabib'

//Contoh input 4
//nama = 'Alfan'
//peran = 'Penyihir'


if (nama != ' ' && nama != '') {

  console.log('Selamat datang di Dunia Porxytia, ' + nama);

  if (peran == 'Ksatria') {
    console.log('Halo Ksatria '+ nama +' , kamu dapat menyerang dengan senjatamu!');
  } else {
    if (peran == 'Tabib') {
      console.log('Halo Tabib  '+ nama +' , kamu akan membantu temanmu yang terluka.');
    } else {
      if (peran == 'Penyihir') {
        console.log('Halo Penyihir  '+ nama +' , ciptakan keajaiban yang membantu kemenanganmu!');
      } else {
        console.log('Pilih peranmu untuk memulai game ');
      }
    }
  }
} else {
  console.log('Nama tidak boleh kosong');

}
