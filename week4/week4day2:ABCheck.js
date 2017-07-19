//https://coderbyte.com/results/alfand:AB%20Check:JavaScript
function ABCheck(str) {

  // let cariA = str.indexOf("a");
  // let cariB = str.indexOf("b");
  let cariA = 0;
  let cariB = 0;
  let len = str.length

   for (let looping=0;looping<len;looping++){
       if (str[looping] == "a"){
         cariA = str.indexOf("a",looping);
       }
       if (str[looping] == "b"){
         cariB = str.indexOf("b",looping);
       }
   }

   if (cariB>cariA) {
     return cariB - cariA == 4;
   } else {
     return cariA - cariB == 4;
   }


}

// keep this function call here
let str = "abccccazzzb"
ABCheck(str);
console.log(ABCheck(str));
