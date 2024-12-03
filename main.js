// // u JS je moguce koristiti funkciju u funkciji
// //Ctrl+Alt+N -run code
// //ctrl+A -> kopira ceo kod
// //FUNKCIJE function imeFunkcije(parametar1, parametar2) {
//     // Kod koji se izvršava
//    // return parametar1 + parametar2; // Opcioni povratni rezultat}
//    // CTRL+? -> KOMENTAR


//    //Nested function scope
// //let a = 10
// //function outer() {
//     //let b = 20 
//     //function inner() {
//         //let c = 30
//         //console.log(a,b,c)
//    // }
//    // inner()
// //}
// //outer()

// //CLOSURE
// function outer() {
//     var counter = 0 
//     function inner() {
//         counter++
//         console.log(counter)
//     }
//    return inner
// }
// const fn = outer()
// fn()
// fn()

// //FUNCTION CURRYING
// function sum(a,b,c) {
//     return a+b+c
// }
// console.log(sum(2,3,5))

// function curry(fn) {
//     return function(a) {
//         return function(b) {
//             return function(c) {
//             return fn(a,b,c) 
//         }
//         }
//     }
// }
// const curriedSum = curry(sum)
// console.log(curriedSum(2)(3)(5))

// const add2 = curriedSum(2)
// const add3 = curriedSum(3)
// const add5 = curriedSum(5)
// console.log(add5)

// //THIS KEYWORD
// //function sayMyName(name) {
//   //  console.log('My name is ${name}') }

//   const person = {
//     name: 'VishWas',
//     sayMyName: function() {
//         console.log(`My name is ${this.name}`);
//     },
// };

// // Poziv metode
// // person.sayMyName();

// function sayMyName() {
//     console.log(`My name is ${this.name}`);
// }

// // Koristeći `call` da pozovemo funkciju `sayMyName` sa kontekstom objekta `person`
// sayMyName.call(person);

// function Person(name) {
//     this.name = name 
// }
// const p1 = new Person('VishWas')
// const p2 = new Person('Batman')

// //console.log(p1.name, p2.name)

// sayMyName()

// //Prototype

// function Person(fName, lName) {
//     this.firstName = fName;  // Ispravi 'fristName' u 'firstName'
//     this.lastName = lName;   // Dodeli ispravno 'lastName'
// }

// // Dodavanje metode `getFullName` u prototip funkcije Person
// Person.prototype.getFullName = function() {
//     return this.firstName + ' ' + this.lastName;
// }
// function SuperHero(fName, lName) {
//     //this = {}
//     Person.call(this, fName, lName)
//     this.isSuperHero = true
// }
// SuperHero.prototype.fightCrime = function() {
//     console.log('Fighting crime')
// }
// SuperHero.prototype = Object.create(Person.prototype)

// const batman = new SuperHero('Bruce' , 'Wayne')
// SuperHero.prototype.constructor = SuperHero
// console.log(batman.getFullName())





// // Kreiranje objekata
// //const person1 = new Person('Bruse', 'Wayne');
// //const person2 = new Person('Clark', 'Kent');

// // Dodavanje metode `getFullName` u prototip funkcije Person
// //Person.prototype.getFullName = function() {
//    // return this.firstName + ' ' + this.lastName;};

// // Poziv metode na objekat
// //console.log(person1.getFullName());  // Ispisuje: Clark Kent
// //console.log(person2.getFullName());  // Ispisuje: Clark Kent


// class Person {
//     constructor(fName, lName) {
//         this.firstName = fName
//         this.lastName = lName
//     }
//     sayMyName() {
//         return this.firstName + ' ' + this.lastName
//     }
// }
// const classP1 = new Person('Bruce', 'Wayne' )
// console.log(classP1.sayMyName())

// class SuperHero extends Person {
// constructor(fName, lName) {
//     super(fName, Lname)
//     this.isSuperHero = true 
// }
// fightCrime() {
//     console.log('Fighting crime')
// }
// }

// const batman = new SuperHero('Bruce' , 'Wayne')
// console.log(batman.sayMyName())

// const obj =  {
//     [Symbol.iterator]: function() {
//         let step = 0;
//         const iterator = {
//             next: function() {
//                 step++;
//                 if (step === 1) {
//                     return { value: 'Hello', done: false };
//                 } else if (step === 2) {
//                     return { value: 'World', done: false };
//                 }
//                 return { value: undefined, done: true }; 
//             }
//         };
//         return iterator;
//     }
// };

// for (const word of obj) {
//     console.log(word);
// }

// function normalFunction() {
//     console.log('Hello')
// console.log('Word')
// }
// // normalFunction()
// function* generatorFunction(){
//     yield 'Hello'
//     yield 'World'
// }
// const generatorObject = generatorFunction()
// for(const word of generatorObject) {
//     console.log(first) 
// }