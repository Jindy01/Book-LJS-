// class PowerArray extends Array {
//     isEmpty() {
//         return this.length === 0;
//     }
//     static get [Symbol.species]() {
//         return Array;
//     }
// }

// let arr = new PowerArray(1, 2, 3, 6, 10, 50);
// console.log(arr);
// console.log(arr.isEmpty());

// let filteredArr = arr.filter(item => item >= 10);
// console.log(filteredArr);