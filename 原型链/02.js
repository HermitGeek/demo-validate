var Person = function () {}

var a = new Person();


console.log(a instanceof Person);                   // true
console.log(Person.prototype.isPrototypeOf(a));     // true

// 此时：a的原型链： a --- Person.prototype --- Object.prototype --- null