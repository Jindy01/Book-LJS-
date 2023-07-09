// function User(name) {
//     this.name = name;
// };

// let user = new User('John');
// let user2 = new user.constructor('Pete');

// console.log(user);
// console.log(user2);
// console.log( user2.name );



// let human = {
//     speak: true,
// };

// function Armor(armory) {
//     this.armory = armory;
// };
// Armor.prototype = human;

// let armor = new Armor('Iron Shild');
// let armorTwo = new armor.constructor('Red Shild');
// console.log(armor.speak);

// console.log(armor);

// let humanTwo = new armor.constructor('BlackShild');
// console.log(armor.speak);
// console.log(humanTwo);



// let animal = {
//     eats: true,
//     jump() {
//         this.isJump = true;
//     },
// };

// function Rabbit(name, sureName) {
//     this.name = name;
//     this.sureName = sureName;
// }

// Rabbit.prototype = animal;

// let rabbit = new Rabbit('White', 'Rabbit');
// console.log(rabbit);
// let rabbit2 = new rabbit.constructor('Black Rabbit');

// for(let prop in rabbit) {
//     let isOwn = rabbit.hasOwnProperty(prop);
    
//     if (isOwn) {
//         console.log(`Our: ${prop}`);
//     } else {
//         console.log(`Inherited: ${prop}`);
//     }
// }

// animal.jump()
// console.log(animal.isJump);
// console.log(rabbit.isJump);
// console.log(rabbit.eats);
// console.log(rabbit);
// console.log(rabbit2);
// console.log(rabbit.eats);