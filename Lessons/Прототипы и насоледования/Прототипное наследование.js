'use strict';


let hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach = [food];
    }
  };
  
  let speedy = {
    __proto__: hamster,
  };
  
  let lazy = {
    __proto__: hamster
  };
  
  // Этот хомяк нашёл еду
  speedy.eat("apple");
  console.log( speedy.stomach ); // apple
  // У этого хомяка тоже есть еда. Почему? Исправьте
  console.log( lazy.stomach ); // apple



// let head = {
//     glasses: 1
//   };
  
//   let table = {
//     __proto__: head,
//     pen: 3
//   };
  
//   let bed = {
//     __proto__: table,
//     sheet: 1,
//     pillow: 2
//   };
  
//   let pockets = {
//     __proto__: bed,
//     money: 2000

//   };

// console.log(pockets.pen);
// console.log(bed.glasses);
// console.log(head.glasses);



// let animal = {
//     eats: true, 
//     walk() {
//         if (!this.isSleeping) {
//             console.log('I, walk');
//         }
//     },
//     sleep() {
//         this.isSleeping = true;
//     },
// };

// let rabbit = {
//     __proto__: animal,
//     name: 'Black Rabbit',
//     jumps: true,
// };

// for(let prop in rabbit) {
//     let isOwn = rabbit.hasOwnProperty(prop);
    
//     if (isOwn) {
//         console.log(`Our: ${prop}`);
//     } else {
//         console.log(`Inherited: ${prop}`);
//     }
// }
// console.log(animal);
// rabbit.sleep(); 

// console.log(rabbit.isSleeping);



// let user = {
//     name: 'Jonn',
//     sureName: 'Mont',
//     set fullName (value) {
//         [this.name, this.sureName] = value.split(' ');
//     },
    
//     get fullName() {
//         return `${this.name} ${this.sureName}`
//     }, 
// };

// let admin = {
//     __proto__: user,
//     isAdmin: true,
// };

// console.log(admin.fullName);

// admin.fullName = 'Artem Artemonov';

// console.log(admin.name);



// let animal = {
//     eats: true,
//     walk() {

//     }
// };

// let rebbit = {
//     __proto__: animal,
// };

// rebbit.walk = function() {
//     console.log('Bouce!');
// };

// rebbit.walk();



// let animal = {
//     eats: true,
//     walk() {
//         console.log('Animal');
//     }
// };

// let rabbit = {
//     jumps: true,
//     __proto__: animal,
// };

// let longEar = {
//     earLenght: 10,
//     __proto__: rabbit,
// };

// console.log(longEar.jumps);
// rabbit.walk()



// let animal = {
//     eats: true,
// };
// let rabbit = {
//     jump: true,
// };

// rabbit.__proto__ = animal;

// console.log(rabbit.eats);
// console.log(rabbit.jump);