// function* pseudoRandom(seed) {

//     let value = seed;

//     while(true) {
//         value = value * 16807 % 2147483647;
//         yield value;
//     }

// }

// let generator = pseudoRandom(1);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);



// function* testEA(j) {
//     let value = j;

//     while(true) {
//         value = value + 1; 
//         yield value;
//     }

// }

// let cost = testEA(1);
// console.log(cost.next().value);
// console.log(cost.next().value);
// console.log(cost.next().value);
// console.log(cost.next().value);



// function* functionGenerator() {
//     yield 1;
//     yield 2;
//     yield 3;
// }

// let generator = functionGenerator();
// console.log(generator);

// let one = generator.next();
// console.log(JSON.stringify(one));

// let two = generator.next();
// console.log(JSON.stringify(two));

// let three = generator.next();
// console.log(JSON.stringify(three));

// for (let value of generator) {
//     console.log(value);
// }

// let range = {
//     from: 1,
//     to: 5,

//     [Symbol.iterator]() {
//         return {
//             current: this.from,
//             last: this.to,
//             next() {
//                 if (this.current <= this.last) {
//                     return { done: false, value: this.current++ };
//                 } else {
//                     return { done: true, };
//                 }
//             }
//         }
//     }
// };

// console.log([...range]);



// let rangeTest = {
//     from: 1,
//     to: 5,

//     *[Symbol.iterator]() {
//         for(let value = this.from; value <= this.to; value++) {
//             yield value;
//         }
//     }
// }

// console.log([...range]);

// function* gen() {
//     let result = yield;
//     console.log(result);
// }

// let generatorTest = gen();

// let question = generatorTest.next().value;
// generatorTest.next(6);