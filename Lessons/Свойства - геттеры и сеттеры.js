'use strict';

// function User(name, birthday) {
//     this.name = name;
//     this.birthday = birthday;

//     Object.defineProperty(this, 'age', {
//         get() {
//             let todayYear = new Date().getFullYear();
//             return todayYear - this.birthday.getFullYear();
//         }
//     });
// }

// let jonn = new User('Pettro', new Date(1992, 6, 1));

// console.log(jonn.birthday);
// console.log(jonn.age);



// let user = {
//     get name() {
//         return this._name;
//     },

//     set name(value) {
//         if (value.length < 4) {
//             console.log('Имя короткое');
//             return;
//         }
//         this._name = value;
//     }
// };

// user.name = 'Pero'
// console.log(user.name);



// let obj = {
//     get propName() {

//     },
//     set propName(value) {

//     }
// };

// let user = {
//     name: 'Jonn',
//     surName: 'Moanta',
// };

// Object.defineProperty(user, 'fullName', {
//     get fullName() {
//         return `${this.name} ${this.surName}`
//     },

//     set fullName(value) {
//         [this.name, this.surName] = value.split(' ');
//     }
// });


// user.fullName = 'Jonn Coretto';

// console.log(user.name);
// console.log(user.surName);
// console.log(user.fullName);

