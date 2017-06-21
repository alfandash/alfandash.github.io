function ArithGeo(num) {
  // code goes here
  var mentah = num.replace(/[^\w\s]/gi, '');
  var sepWord = mentah.split(" ");
  let temp=0;
  var urutan=[];
  for(let loop=0;loop<(sepWord.length);loop++ ){
    if (loop==0) {
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


function LongestWord(sen) {

  // we use the regex match function which searches the string for the
  // pattern and returns an array of strings it finds
  // in our case the pattern we define below returns words with
  // only the characters a through z and 0 through 9, stripping away punctuation
  // e.g. "hello$% ##all" becomes [hello, all]
  var arr = sen.match(/[a-z]+/gi);

  // the array sort function takes a function as a parameter
  // which is used to compare each element in the array to the
  // next element in the array
  var sorted = arr.sort(function(a, b) {
    return b.length - a.length;
  });

  // this array now contains all the words in the original
  // string but in order from longest to shortest length
  // so we simply return the first element
  return sorted[0];

}

// keep this function call here
var num = "mak tahu!!!! bahu" ;
console.log(ArithGeo(num));
