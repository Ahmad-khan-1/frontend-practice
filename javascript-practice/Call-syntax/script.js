class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Aslamulikum my name is ${name} and age is ${age}`);
  }
}

const s1 = new Student("Ahmad", 25);
console.log(s1);

function Talib(name, age) {
  this.name = name;
  this.age = age;
  this.tararup = function () {
    console.log(`My name is ${this.name} and my age is ${this.age}`);
  };
}

const t1 = new Talib("Ahmad", 23);
const t2 = new Talib("Shaqran", 443);
t1.tararup();
t2.tararup();
// console.log(t1);
// console.log(t2);
