
function findMax(numberArr) {
  // Code Disini
  let max = numberArr.sort(function(a, b){return a-b});
  return max[max.length-1];
}

function findMin(numberArr) {
  // Code Disini
  let min = numberArr.sort(function(a, b){return a-b});
  return min[0];
}

function findMean(numberArr) {
  // Code Disini
  let mean = numberArr;
  let total = 0;
  let average = 0;
  for (var i = 0; i < mean.length; i++) {
    total +=mean[i];
  }
  average = (total/mean.length);
  return Math.floor(average);
}

function findOdds(numberArr) {
  // Code Disini
  let even =[];
  for (var i = 0; i < numberArr.length; i++) {
    if(numberArr[i]%2 != 0) {
      even.push(numberArr[i]);
    }
  }
  return even.join('-');
}

function findEvens(numberArr) {
  // Code Disini
  let even =[];
  for (var i = 0; i < numberArr.length; i++) {
    if(numberArr[i]%2 == 0 && numberArr[i] != 0) {
      even.push(numberArr[i]);
    }
  }
  return even.join('-');
}

function numberProcessing(numberArr) {
  var max = findMax(numberArr);
  var min = findMin(numberArr);
  var mean = findMean(numberArr);
  var odds = findOdds(numberArr);
  var evens = findEvens(numberArr);
  return 'Min: ' + min + ', Max: ' + max + ', Mean: ' + mean + ', Odds: ' + odds + ', Evens: ' + evens;
}

console.log(numberProcessing([1, 3, 5, 1, 2, 8, 10, 0, 3]));
// "Min: 1, Max: 10, Mean: 3, Odds: 1-3-5-1-3, Evens: 2-8-10-0"
