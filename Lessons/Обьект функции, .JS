// function sum(a) {

//   let currentSum = a;
  
//   function f(b) {
//     currentSum += b;
//     return f;
//   }

//   f.toString = function() {
//     return currentSum;
//   };

//   return f;
// }

// alert((sum(1)(2)(5)));


// function getSum() {
//   let costSum = 0;

//   function setSum(...value) {
//     costSum += value.reduce((x, y) => x + y, 0);
//     return setSum;
//   }

//   setSum.sum = () => costSum;
//   return setSum;
// }

// let mySum = getSum();

// console.log(mySum(2)(2)(2)(2).sum());



// function makeCounter() {
//   let count = 0;
  
//     function counter() {
//       return count;
//     }
//     counter.set = value => count = value;
//     counter.decrease = () => count--;
    
//     return counter;
// }

// let counter = makeCounter();

// console.log(counter.set(5));
// console.log(counter());



// function testFunc() {
//     let i = 1;

//     function getI() {
//         alert(i);
//     };
//     function notGetI() {
//         alert('Неа')
//     }
//     return {getI, notGetI};
// }

// let getI = testFunc();

// getI.notGetI();



// function makeCounter() {

//     function counter() {
//       return counter.count++;
//     };
//     function decrease() {
//         return counter.count--;
//     };
//     function set(x){
//         return counter.count + x;
//     };
//     counter.count = 0;
//     return counter;
//   }
  
//   let counter = makeCounter();

//   alert( counter() ); // 0
//   alert( counter() ); // 1
  
//   counter.set(10); // установить новое значение счётчика
  
//   alert( counter() ); // 10
  
//   counter.decrease(); // уменьшить значение счётчика на 1
  
//   alert( counter() ); // 10 (вместо 11)


// let sayHi = function func(who) {
//     if(who) {
//         alert(`Hello ${who}`)
//     } else {
//         func('Gus')
//     }
// };

// let welcome = sayHi;
// sayHi = null;
// welcome()



// function makeCounter() {

//     function counter() {
//         return ++counter.count;
//     };
//     counter.count = 0; 

//     return counter;
// }



// let counter = makeCounter();
// console.log(counter());



// function sayHi (){
//     console.log('Hi!');
//     sayHi.counter++;
// }

// sayHi.counter = {name: 'Pet'};

// sayHi();
// sayHi();

// console.log(sayHi.counter);



// function ask(qw, ...hend) {
//     let isYes = confirm(qw);

//         for(let han of hend) {
//             if(han.length == 0) {
//                 if(isYes) han();
//             } else {
//                 han(isYes)
//             }
//         }
// }

// ask("Вопрос?", () => alert('Вы ответили да'), result => alert(result));