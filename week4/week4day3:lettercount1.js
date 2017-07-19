////https://coderbyte.com/information.php?ct=Dash%20Insert
// function LetterCountI(str) {
//
//   // code goes here
//   let arr = str.split(" ");
//   //console.log(arr);
//   return str;
//
// }
//
// LetterCountI(str);

// keep this function call here
let str = "Helo aple";
let arr = str.split(" ");
let letterDict = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let letMax;
let numMax=0;
let bucket=0;
let maxWord;
arr.forEach(hitung);

function hitung(value){
  console.log(value);
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
    //console.log("bucket :"+bucket+"letter :"+letterDict[a]);
    bucket=0;
  }

  if (numMax === 1) {
    return -1
  } else {
    return maxWord;
  }
  console.log("Jumlah : "+numMax+" huruf: "+letMax);
  console.log(maxWord);
}



function coba(value,index,arr){
  console.log(value);
  console.log(index);
  console.log(arr);
}
