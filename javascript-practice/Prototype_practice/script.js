console.clear();

function Animal(name) {
  this.name = name;
}

Animal.prototype.sound = function () {
  console.log("this is animal sound");
};
let cat = new Animal("Kitty");
let dog = new Animal("doggys");

cat.sound();
console.log(cat);
