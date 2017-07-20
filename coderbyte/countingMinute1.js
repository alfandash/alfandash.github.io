function CountingMinutesI(str) {

  // code goes here
  var otherAnswer = (str)=> {
    const times = str.match(/([am]|[pm])+/g);
    const arr = str.split('-')
    .map(item => item.split(':'))
    .map(item => {
      item[1] = item[1].slice(0, item[1].length - 2)
      return item;
    });

  const hour1 = times[0] === 'pm' ? +arr[0][0] + 12 : +arr[0][0];
  const hour2 = times[1] === 'pm' ? +arr[1][0] + 12 : +arr[1][0];
  const min1 = +arr[0][1];
  const min2 = +arr[1][1];

  const diff = (hour2 * 60 + min2) - (hour1 * 60 + min1);
  return diff < 0 ? 24 * 60 + diff : diff;
  }


  var splitStr = str.split('-')
  var temp = [];
  var jam =0;
  var menit =0;
  var total =0;
  for (var i = 0; i < splitStr.length; i++) {
    var hours = parseInt(splitStr[i].substr(0, 2));
    if (splitStr[i].indexOf('am')!= -1 && hours == 12) {
      splitStr[i] = splitStr[i].replace('12','24');
    }
    if (splitStr[i].indexOf('pm')!= -1 && hours == 12) {
      splitStr[i] = splitStr[i].replace(hours, '12');
    } else if(splitStr[i].indexOf('pm')!= -1) {
      splitStr[i] = splitStr[i].replace(hours, (hours+12));
    }
    splitStr[i]=splitStr[i].replace(/(am|pm)/,'');
    if (temp.length == 0) {
      temp = splitStr[i].split(':')
      temp = temp.map(function(x) {return parseInt(x)})
    } else if(temp.length > 0){
      splitStr[i] = splitStr[i].split(':')
      splitStr[i] = splitStr[i].map(function(x) {return parseInt(x)})
      if (splitStr[i][0]-temp[0] <= 0 ) {
        jam = (splitStr[i][0]-temp[0]) * 60;
        menit = splitStr[i][1]-temp[1] ;
        total = (jam + menit) + 1440;
        console.log(menit);
        console.log(jam);
      } else {
        jam = Math.abs((splitStr[i][0]-temp[0]) * 60);
        menit = Math.abs(splitStr[i][1]-temp[1]) ;
        total = jam - menit;
        console.log('ky'+menit);
        console.log(jam);
      }

    }
  }
  console.log(total);
  return total;
}

// keep this function call here
let str = '2:03pm-1:39pm'
CountingMinutesI(str);
