
function penggunaanIfElse() {
    //--------------------------------------------------
    // Connditional if

    var angka_if = 5;
    var angka_if_else = 7;

    if( angka_if != 5) {
      console.log ("jalankan kode kode if karena true");
    } else {
      console.log ("jalankan kode if karena kondisi else")
    }


    if (angka_if == 5) {
      console.log ("jalankan kode if karena var angka_if = 5");
    }

    if (angka_if == 6) {
      console.log ("jalankan kode karena true 1");
    } else {
      if (angka_if_else == 7)
        {
          console.log ("maka jalankan kode ini karena angka_if_else == 7");
        }
    }

    var angka = '_'

    console.log(false || true);
}

function penggunaanAndOr() {
  //--------------------------------------------------
  // Conditional AND
  console.log (false && false); // false
  console.log (false && true); // false
  //---------------------------------------------------
  // Conditional OR
  console.log(false || false); // False
  console.log(true || false); // True
}

function penggunaanLebihBesar() {
  //---------------------------------------------------
  // Less than greater than

  var angka =8
  console.log(angka > 7); //True
  console.log(angka < 8); // False
  console.log(angka <= 8); // True

}

function penggunaanOperator() {
  //=-------------------------------------------------
  //Strict not equal operator ( === harus sama persis) ( !== harus tidak sama persis)

  var comp_1 = "5"
  console.log(comp_1==5); //true
  console.log(comp_1===5); //false
  console.log(comp_1==="5"); //true

  console.log(comp_1 !== 5); //true
  console.log(comp_1 !== "5"); // Flase

  //------------------------------------
  // assignment operator
  var angka_1=5;
  var angka_2=2;

  //------------------------------------
  //comparison operator == & !=

  var comparison_1 =5;
  console.log(comparison_1 == 5);
  console.log(comparison_1 != 5);


  //------------------------------------
  // Pelajaran operator
  console.log(angka_1);
  console.log(angka_2);
  console.log(angka_1%5); //akan 0 karena 5 dibagi 5 habis dan tidak menyisakan


}
