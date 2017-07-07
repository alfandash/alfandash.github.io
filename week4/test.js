function LetterCountI(str) {

  // code goes here
    let arr = str.split(" ");
    let letterDict = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let letMax;
    let numMax=0;
    let bucket=0;
    let maxWord;

    arr.forEach(hitung);

    if (numMax === 1) {
      return -1
    } else {
      return maxWord;
    }

    function hitung(value){
      for(let a=0;a<letterDict.length;a++){
        for(let b=0;b<value.length;b++){
          if(value[b]===letterDict[a]){
            bucket+=1;
          }
        }
        if(numMax<bucket){
          numMax=bucket;
          letMax=letterDict[a];
          maxWord=value;
        }
        bucket=0;
      }
    }

}

// keep this function call here
let str = "Helo aple";
console.log(LetterCountI(str));


function LetterChanges(str) {

  console.log(str.charCodeAt(3));
  let string = str.split("");
  let len=string.length;
  console.log(string[0]);

  for(let loop=0; loop<len;loop++){
    string.splice(loop,1,(str.charCodeAt(loop)))
    if ( string[loop]<=90 && string[loop]>=65  ){
      string.splice(loop,1,(str.charCodeAt(loop)+1));
    } else if (string[loop]<=122 && string[loop]>=97){
      string.splice(loop,1,(str.charCodeAt(loop)+1));
    }
  }

  for(let loop=0; loop<len;loop++){
    string.splice(loop,1,(String.fromCharCode(string[loop])));
    if (string[loop]==="a"){
        string.splice(loop,1,"A");
      } else if (string[loop]==="i"){
        string.splice(loop,1,"I");
      } else if (string[loop]==="u"){
        string.splice(loop,1,"U");
      } else if (string[loop]==="e"){
        string.splice(loop,1,"E");
      } else if (string[loop]==="o"){
        string.splice(loop,1,"O");
      } else if (string[loop]===" "){
        string.splice(loop,1," ");
      } else if (string[loop]==="{"){
        string.splice(loop,1,"A");
      }
  }

  return string.join("");
}

// keep this function call here
LetterChanges(readline());
