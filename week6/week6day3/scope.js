function example1() {
  // global scope
  var example = 'global';

  function exampleFunction() {
    // local scope
    var example='local';
    return example;
  }
  console.log(example);// global
  console.log(exampleFunction());// local
}

//console.log(example1());

function example2() {
  var global = 'global';
  var functionA = function() {
    console.log(global + ' di A');
    var functionB = function(){
      console.log(global + ' di B');
    };
    functionB();
  };
  functionA();
};

//example2();


function example3() {
  var functionA = function() {
    console.log(this);
  }

  var sampleObject = {};
  sampleObject.functionB = function() {
    console.log(this);
  }

  functionA();
  sampleObject.functionB();
}

//example3();

// pengaruh variable var dan scope
function example4() {
  let i = 1;
  for (let i = 0; i < 9; i++) {

  }
  console.log(i);
}

//example4();

// penggunaan const
function example5() {
  const pi = 3.14;
  let radius = 5;
  let circleArea1 = pi * Math.pow(radius, 2);
  console.log(circleArea1);
  radius = 7;
  let circleArea2 = pi * Math.pow(radius, 2);
  console.log(circleArea2);
  pi =7; // error karena pi adalah constant
}

example5();
