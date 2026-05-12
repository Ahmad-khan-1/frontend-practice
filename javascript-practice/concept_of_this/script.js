console.clear();

// const Student = {
//   name: "Ahmad",
//   id: 123,
//   MyIntroduction: function () {
//     console.log(`My name is ${this.name} and my id is ${this.id}`);
//   },
// // };
// // Student.MyIntroduction();

// function Student(name, id, age) {
//   return {
//     name,
//     id,
//     age,
//     MyIntroduction: function () {
//       console.log(`My name is ${this.name} and my id is ${this.id}`);
//     },
//   };
// }

// // console.log(Student("Ahmad", 123, 24));
// let s1 = Student("Ahmad", 123, 223);
// let s2 = Student("Akmal", 13333, 34343223);
// console.log(s1);
// s1.MyIntroduction();
// s2.MyIntroduction();

function addData(name, age, id) {
  this.name = name;
  this.age = age;
  this.id = id;
  return this;
}
let s1 = new addData("ahmad", 1233, 444);
let s2 = new addData("ahmad", 333333, 444);
console.log(s1);
console.log(s2);
