'use strict';

// function bind(context, fun) {

//     return function(...args) {
//         fun.apply(context, args)
//     }
// }

// function logPerson() {
//     return console.log(`Person: ${this.name}, age: ${this.age}, job: ${this.job} `);
// }


const person1 = { name:'Jony', age: 17, job:  'cock' }
const person2 = { name: 'Kelly', age:26, job: 'work' }


let result = bind(person1, logPerson)(); // Основа person1, person2;
console.log(result);



// function newNumb(n) {

//     return function(x) {
//         console.log(`Результат 1: ${20 * n + x}`);
//     }
// }

// let numb = newNumb(2);
// let twoNumb = newNumb(6);

//     numb(10);
//         twoNumb(2);
//         twoNumb(10);


// function newEnvi() {
//     let name = 'Jony';

//     return function getName() {
//         alert(`Привет ${name}`);
//     }
// }

// let names = newEnvi();
//     names();


// function test() {
//     let value = 4;
    
//     function testTwo() {
//         alert('asd');
//     }
//     return testTwo;
// }

// testTwo();



// let user = 'Hormia';

// if (true) {
//     let name = 'Artem';
//         alert(`Привет ${user} и привет ${name}` );
// }


// function getCount() {
//     let count = 0;

//     return function() {
//         return count++;
//     };
// }

// let counter = getCount();

// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());




// function User(name) {
    
//     this.sayHi = function() {
//         alert(name);
//     };
// }

// let user = new User('Artem');

// user.sayHi();