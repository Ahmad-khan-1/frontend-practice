// class Car {
//   constructor(name, model, modelNo) {
//     this.name = name;
//     this.model = model;
//     this.modelNo = modelNo;
//   }
//   starting() {
//     console.log(`${this.name} is starting`);
//   }
//   stopping() {
//     console.log(`${this.name} is stopping`);
//   }
// }

// let BMW = new Car("BMW", "Sk1", 2233);
// console.log(BMW);
// BMW.starting();

class Car {
  fuel = 100;
  burnfuel() {
    this.fuel -= 1;
  }

  start() {
    this.burnfuel();
    console.log("Car is starting ");
  }
}

let BMW = new Car();
console.log(BMW);
BMW.start();
BMW.start();
BMW.start();
BMW.start();
