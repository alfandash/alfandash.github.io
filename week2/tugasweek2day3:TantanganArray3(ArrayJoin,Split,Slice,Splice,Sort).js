var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(data) {

  console.log(data);
  data.splice(1,4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro");
  console.log(data);

  var tanggal = data[3].split("/");
  var bulan = tanggal.slice(1,2);

  var nama_bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "October", "November", "Desember"];

  var angka_bulan = parseInt(bulan);
  //console.log(parseInt(bulan));

  // Konversi angka bulan menjadi nama bulan
  console.log(nama_bulan[angka_bulan-1]);

  // konversi angka bulan terbaru menjadi string
  angka_bulan = String(angka_bulan);
  tanggal.splice(1,1,angka_bulan);
  tanggal.sort(function(value1, value2) { return value1 > value2 });
  console.log(tanggal);

  //join tanggal menggunakan " - "
  console.log(tanggal.join(" - "));

  // Pembatasan 15 karakter
  var nama = data[1].split("");
  var batas_nama = nama.slice(0,14);
  console.log(batas_nama.join(""));

}



dataHandling2(input);
