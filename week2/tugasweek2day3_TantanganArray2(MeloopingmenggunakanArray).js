var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ]


/*
Nomor ID:  0001
Nama Lengkap:  Roman Alamsyah
TTL:  Bandar Lampung 21/05/1989
Hobi:  Membaca
*/

function dataHandling(array2d) {

  for (var looping1 = 0 ; looping1  <= ((array2d.length)-1) ; looping1++) {
    for (var looping2 = 0; looping2 <= ((array2d[looping1].length)-1 ); looping2++) {
      switch (looping2) {
        case 0: {console.log('Nomor ID: ' + array2d[looping1][looping2]); break;}
        case 1: {console.log('Nama Lengkap: ' + array2d[looping1][looping2]); break;}
        case 2: {console.log('TTL: ' + array2d[looping1][looping2] + ' ' + array2d[looping1][looping2+1]  ); break;}
        case 3: ;break;
        case 4: {console.log('Hobi: ' + array2d[looping1][looping2]); break;}
        default: {console.log('Data lainnya: ' + array2d[looping1][looping2]); break;}
      }


    }

    console.log('');
  }
}


dataHandling(input);

// Untuk mengecek isi dari array
//console.log(input.length);
//console.log(input[0].length)
