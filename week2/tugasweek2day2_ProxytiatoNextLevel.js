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


var tahunLahir = '1989';

var umur = 2017 - tahunLahir;
var playerHealth = tahunLahir * Math.random();
var monsterHealth = tahunLahir * Math.random();
var kodeMonster = Math.floor(Math.pow(100, Math.random()));

/* console.log untuk pengecekan input */
//console.log(tahunLahir);
//console.log(playerHealth);
//console.log(monsterHealth);
//console.log(kodeMonster);

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
  peran = 'kacung';
}


for (var looping = 0; looping <= tahunLahir; looping++  ) {
  if (looping%umur == 0) {
    console.log(peran+ ' ' + nama + ' menyerang monster');
    monsterHealth -= umur;
  }

  if (looping%kodeMonster == 0) {
    console.log('monster menyerang ' + peran + ' ' + nama + ' !');
    playerHealth -= kodeMonster;
  }

  if (looping%umur ==0 && looping%kodeMonster == 0) {
    console.log('health keduanya bertambah');
    playerHealth += kodeMonster;
    monsterHealth += umur;
  }

}

/* console.log untuk pengecekan hasil looping */

//console.log('Player health ' + playerHealth);
//console.log('monster health ' + monsterHealth);

if (playerHealth > monsterHealth) {
  console.log('Selamat ' + peran + ' ' + nama + ' memenangkan pertarungan ')
} else {
  console.log('Sayang sekali, ' + peran + ' ' + nama + ' dikalahkan monster ....');
}
