function PowersofTwo(num) {

  // code goes here
  for (var looping=1;looping <= num; looping*=2){
      if (looping===num) {
          return true;
      }
  }

  return false;
}

// keep this function call here
let num = 800; 
console.log(PowersofTwo(num));
