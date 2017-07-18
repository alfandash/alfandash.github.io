function PowerSetCount(arr) {

  // code goes here
  let letters = arr;
  let combi = [];
  let temp= "";
  let len = Math.pow(2, letters.length);

  for (let looping = 0; looping < len ; looping++){
      temp= "";
      for (let looping2=0;looping2<letters.length;looping2++) {
          if ((looping & Math.pow(2,looping2))){
              temp += letters[looping2]
          }
      }
      combi.push(temp);
  }
  return combi.length;
}

// keep this function call here
PowerSetCount(readline());
