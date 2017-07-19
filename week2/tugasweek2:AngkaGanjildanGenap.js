for (var number_1= 1; number_1 <= 100; number_1++ ){
  if ( number_1%2 == 0) {
    console.log( number_1 + " adalah genap");
  } else {
    console.log(number_1 + " adalah ganjil");
  }
}


var counter = 2; // rubah variabel counter menjadi 2 atau 5 atau 9
var pertambahan_counter= counter +1;

for (var number_2= 1; number_2 <= 100; number_2 += counter) {
  if (number_2%(pertambahan_counter) == 0)
    {
      console.log(number_2 + " Kelipatan " + pertambahan_counter);
    }
  else
    {
      console.log(number_2);
    }

}


var counter = 5; // rubah variabel counter menjadi 2 atau 5 atau 9
var pertambahan_counter= counter +1;

for (var number_2= 1; number_2 <= 100; number_2 += counter) {
  if (number_2%(pertambahan_counter) == 0)
    {
      console.log(number_2 + " Kelipatan " + pertambahan_counter);
    }
  else
    {
      console.log("");
    }

}


var counter = 9; // rubah variabel counter menjadi 2 atau 5 atau 9
var pertambahan_counter= counter +1;

for (var number_2= 1; number_2 <= 100; number_2 += counter) {
  if (number_2%(pertambahan_counter) == 0)
    {
      console.log(number_2 + " Kelipatan " + pertambahan_counter);
    }
  else
    {
      console.log("");
    }

}
