//https://coderbyte.com/results/alfand:Longest%20Word:JavaScript
function LongestWord(num) {

// code goes here
  // code goes here
  var mentah = num.replace(/[^\w\s]/gi, '');
  var sepWord = mentah.split(" ");
  let temp=0;
  var urutan=[];
  for(let loop=0;loop<(sepWord.length);loop++ ){
    if (loop===0) {
      urutan.push(sepWord[0])
      temp = sepWord[loop].length;
    } else {
      if (temp<sepWord[loop].length) {
        urutan=[];
        urutan.push(sepWord[loop]);
        temp =sepWord[loop].length;
      } else if (temp===sepWord[loop].length) {
        urutan.push(sepWord[loop]);
      }
    }
  }
  urutan.sort();
  return urutan[0];

}

// keep this function call here
let num = "makan tahu pake tempe azek azkee bengett"
console.log(LongestWord(num));
