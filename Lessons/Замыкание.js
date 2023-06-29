'use strict';

function makeArmy() {
  let shooters = [];

  for(let i = 0; i < 10; ++i) {
    let shooter = function() { // функция shooter
      alert( i ); // должна выводить порядковый номер
    };
    shooters.push(shooter);
  }

  return shooters;
}

let army = makeArmy();

army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10



// let users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" }
// ];

// function byField(arr) {
//     return function(a, b) {
//        return a[arr] > b[arr] ? 1 : -1;
//     }
// }

// users.sort(byField('name'));
// users.map(user => alert(user.name));



// function inArray(arr) {

//     return function(x) {
//         return arr.includes(x);
//     };
// }

// let arr = [1,2,3,4,5,6,7,8,9];
// alert( arr.filter(inArray([1, 2, 6])) );



// function inBetween(a, b) {

//     return function(x) {
//         return x >= a && x <= b;
//     };
// }

// alert(arr.filter(inBetween(3, 6)) )



// function inBetween(a, b) {
//     let funcArr = [];

//     for(let i = 1; i <= b; ++i) {

//         if (i >= a && i <= b) {
//             funcArr.push(i)
//         } 
//     }
//     return funcArr;
// }

// alert(inBetween(3, 6))



// let returted = arr.filter((a, b) => 3 <= a && 6 > b);
//     console.log(returted);


// function getFilter(x) {
//     let i = x;

//     return function() {
//         return alert(i);
//     } 
// }

// getFilter()()


// function sum(a){

//     return function(b) {
//         return a + b;
//     };
// }

// alert(sum(4)(5));



// function bind(context, fun) {

//     return function(...args) {
//         fun.apply(context, args)
//     }
// }

// function logPerson() {
//     return console.log(`Person: ${this.name}, age: ${this.age}, job: ${this.job} `);
// }


// const person1 = { name:'Jony', age: 17, job:  'cock' }
// const person2 = { name: 'Kelly', age:26, job: 'work' }


// let result = bind(person1, logPerson)(); // Основа person1, person2;
// console.log(result);



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