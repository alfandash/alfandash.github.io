function ExOh(str) {

  // code goes here
  var x=0;
  var o=0;
  for (var looping= 0; looping < (str.length); looping++) {
      if (str[looping] == "o") {
          o += 1;
      } else {
          x += 1;
      }

  }
  if (x == o) {
      str = "true"
  } else {
      str = "false"
  }
  return str;

}

// keep this function call here
let str = "xoxoxoxoxo";
console.log(ExOh(str));
