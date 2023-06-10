var Person = function () {}

var a = new Person();
Person.prototype = {};


console.log(a instanceof Person);                   // false
console.log(Person.prototype.isPrototypeOf(a));     // false

// 此时：a的原型链： a --- {} --- Object.prototype --- null