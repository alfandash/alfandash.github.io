class kotak {
  constructor(tinggi, lebar) {
    this.tinggi = tinggi;
    this.lebar = lebar;
  }
}

let tinggi = 11;
let lebar = 22;
let kotak1 = new kotak(tinggi,lebar);
let kotak2 = new kotak(111,333);
//
// console.log(kotak1.tinggi);
// console.log(kotak2.lebar);


class kubus {
  constructor(panjang,lebar,tinggi) {
    this.panjang = panjang;
    this.lebar = lebar;
    this.tinggi = tinggi
  }

  setPanjang(newPanjang) {
    this.panjang = newPanjang;
  }

  setLebar(newLebar) {
    this.lebar = newLebar
  }

  setTinggi(newTinggi) {
    this.tinggi = newTinggi
  }

  getPanjang() {
    return this.panjang;
  }

  getLebar() {
    return this.lebar;
  }

  getTinggi() {
    return this.tinggi;
  }

  getLuas() {
    let luas = (this.panjang * this.lebar *this.tinggi);
    return luas;
  }
}


let kubus1 = new kubus(10,10,10);
let kubus2 = new kubus(20,20,20);

console.log(kubus1.getPanjang());
console.log('ini adalah luas '+kubus1.getLuas());
kubus1.setPanjang(200);
console.log('update panjang : '+kubus1.getPanjang());
console.log('ini adalah luas yang sudah di update '+kubus1.getLuas());
