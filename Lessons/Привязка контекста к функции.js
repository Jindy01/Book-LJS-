'use strict';

function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'Вася',

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },

};
  
askPassword(user.loginOk.bind(user), user.loginFail.bind(user));




// function partial(func, ...argsBound) {
//     return function(...args) {
//         return func.call(this, ...argsBound, ...args)
//     }
// }

// let user = {
//     firstName: 'Fob',
//     say(time, phrase) {
//         alert(`[${time}] : ${this.firstName} ${phrase}`)
//     }
// };

// user.sayNow = partial(user.say, 
//     new Date().getHours() + `:` +
//     new Date().getMinutes());

// user.sayNow('Hello');



// function mul(a, b) {
//     return a * b;
// }

// let double = mul.bind(null, 4);

// console.log(double(4));
// console.log(double(8));



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
