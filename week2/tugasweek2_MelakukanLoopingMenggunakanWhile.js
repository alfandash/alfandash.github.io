var looping = 2;
var looping_2 =20;

while (looping <= 20)
  {
    console.log(looping+' - i love coding ');
    if (looping == 20){
      while (looping_2 > 0){
        console.log(looping_2+' - I will become fullstack developer ');
        looping_2 -=2;
      }
    }
    looping +=2;
  }
