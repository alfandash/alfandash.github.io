function Palindrome(str) {

  // code goes here
  var backward = [];
  for (var looping = 0; looping<(str.length); looping++){
      backward.unshift(str[looping]);
  }

  return backward[0] == str[0] && backward[(str.length-1)] == str[(str.length-1)]

}

// keep this function call here
let str = "makan hati mam";
console.log(Palindrome(str));
