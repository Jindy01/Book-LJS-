'use strict';

function mul(a, b) {
    return a * b;
}

let double = mul.bind(null, 4);

console.log(double(4));
console.log(double(8));


// let user = {
//     name:'Gema',
//     sayHi(massage) {
//         console.log(`${massage} ${this.name}!`);
//     }
// };

// let sayHi = user.sayHi.bind(user);

// sayHi('Hello!');
// sayHi('Bay!');
// setTimeout(sayHi('Not'), 1000)



// let user = {
//     firstName: 'Rezar',
//         sayHi() {
//             alert(`Hello ,${this.firstName}`);
//         }
// };

// setTimeout(() => user.sayHi());
