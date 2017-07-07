function jumlahkan(inputString)
{
  // start code here
  let len=inputString.length;
  let jumlah=0;
  let tampung=[];
  let deret=[];
  for(let loop=0;loop<len;loop++){
    if (inputString[loop] === "-" || inputString[loop] === "+") {
      deret.push(inputString[loop]);
      for(let loop2=0;loop2<len;loop2++){
        if (inputString[loop2+1] !== "-" || inputString[loop2+1] !== "+"){
          deret.push(inputString[loop2]);
        }
      }
      console.log(deret);
    }
  }
  return jumlah;

}
console.log(jumlahkan('-1-1-1-1-1-2-33-76-4345-6578'));        // -7
console.log(jumlahkan('+5-3+5+5-1'));
