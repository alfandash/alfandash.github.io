var runner = [
  {
    name:"Thomas",
    age:28,
    skill:"Visioning"
  },
  {
    name:"Teresa",
    age:35,
    skill:"Cooking"
  },
  {
    name:"Fry Pan",
    age:21,
    skill:"Crafting"
  },
  {
    name:"Gally",
    age:32,
    skill:"Fighting"
  }
]

var mazerunner = function(runner) {
  let len = runner.length;
  let tampung = [];
  for (let loop=0;loop<len;loop++){
    console.log("nama: "+runner[loop].name);
    console.log("age: "+runner[loop].age);
    console.log("Skill: "+runner[loop].skill);
    console.log("");
    if (runner[loop].age>=20 && runner[loop].age<=30) {
      tampung.push(runner[loop].name)
    }
  }
  console.log("Umur antara 20 - 30 : ");
  console.log(tampung.join(", "));
}

mazerunner(runner);
