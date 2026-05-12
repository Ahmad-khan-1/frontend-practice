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
