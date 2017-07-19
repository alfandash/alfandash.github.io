function FirstReverse(str) {

  // code goes here
    var kebalikString = '';
    for ( var looping=((str.length)-1); looping  >= 0 ; looping-- ) {
        kebalikString += str[looping];
    }
    str = kebalikString
    return str;

}

// keep this function call here
let str ="makannasi";
console.log(FirstReverse(str));
