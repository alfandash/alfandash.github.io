/*
HACKTIV8 Final Live Coding Rocket

=======================
British National Crisis
=======================
*/

function nextTargetArea(code) {
  // Code Hanya Disini!
  var string = code.split('');
  var hasil =0;
  function Recursive(rec) {
    if (/([TWO])/.test(rec)===true) {
      let num = 'TWO'
      for (var i = 0; i < num.length; i++) {
        for (var x = 0; x < string.length; x++) {
          if (string[x] === num[i]) {
            string.splice(x,1);
            break;
          }
        }
      }
      hasil +=2;
    } else {
      Recursive()
    }
  }

  console.log('after two ' + string );

  // for (var i = 0; i < string.length; i++) {
  //   if (/([TWO])/.test(string)===true) {
  //     string = string.replace(/([TWO])/,'');
  //     total +=2;
  //   }
  //   console.log('after two ' + hasil );
  // }
  //
  // return total;

}

console.log(nextTargetArea('WTO')); // "District 2 is the next target!"
console.log(nextTargetArea('WTWTHROETEO')); // "District 7 is the next target!"
console.log(nextTargetArea('HSEVTEEING')); // "District 15 is the next target!"
console.log(nextTargetArea('FNEXSIVUSEOR')); // "District 17 is the next target!"
console.log(nextTargetArea('EFNEXRSIVHUSEORTE')); // "District 20 is the next target!"
