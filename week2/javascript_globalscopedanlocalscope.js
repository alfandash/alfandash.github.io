// global scope
var example = "Global";

function testExample() {
  // local scope
  var example = "Local";
  return example;
}

console.log(example); // Global
console.log(testExample()); // Local
