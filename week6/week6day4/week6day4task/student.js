class student {
  constructor(name,age,dateOfBirth,gender,studentId,hobbies) {
    this.name = name;
    this.age = age;
    this.dateOfBirth = dateOfBirth;
    this.gender = gender;
    this.studentId = studentId;
    this.hobbies = hobbies;
  }

  setName(newName) {
    this.name = newName;
  }

  setAge(newAge) {
    this.age = newAge;
  }

  setDateOfBirth(newDate){
    this.dateOfBirth = newDate
  }

  setGender(newGender){
    if (newGender === 'male' || newGender === 'female'){
      this.gender = newGender;
    } else {
      return 'gender tidak sesuai';
    }
  }

  addHobby(newHobby){
    this.hobbies.push(newHobby);
  }

  removeHobby(removeHobby){
    for (let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] === removeHobby) {
        this.hobbies.splice(i,1);
      }
    }
  }

  getData(){
    console.log('Nama : '+ this.name);
    console.log('Umur : '+ this.age);
    console.log('Tanggal Lahir : '+ this.dateOfBirth);
    console.log('Gender : '+ this.gender);
    console.log('Student ID : %s',this.studentId);
    console.log('Hobbies : ');
    for (var i = 0; i < this.hobbies.length; i++) {
      console.log('Hobi '+i+' adalah '+this.hobbies[i]);
    }
  }

}

let student1 = new student('alfan',12,'10 februari 2017','male','I23',['makan','minum']);

console.log('Data sebelum dirubah');
student1.getData();
console.log('--------------------');
student1.setName('Melani');
student1.setAge(12);
student1.setDateOfBirth('12 januari 2018');
student1.setGender('female');
student1.addHobby('dandan');
student1.removeHobby('makan');
student1.getData();
