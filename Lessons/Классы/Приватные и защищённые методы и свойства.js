//      Приватный класс
// class PrivateCoffeeMachine {
//     #waterLimit = 200;
//     #waterAmount = 0;

//     get waterAmount() {
//         return this.#waterAmount;
//     }

//     set waterAmount(value) {
//         if(value < 0) throw new Error('Отрицательная вода?');
//         this.#waterAmount = value;
//     }

//     #checkWater(value) {
//         if(value < 0) throw new Error('Недостаточно воды');
//         if(value > this.#waterLimit) throw new Error('Слишком много воды');
//     }
// }

// let privateCoffeeMachine = new PrivateCoffeeMachine()
// privateCoffeeMachine.waterAmount = 100;




// //      Просто класс
// class CoffeeMachine {
//     _waterAmount = 0;
//     _grainQuantity = 0;
    
//     set waterAmount(value) {
//         if (value < 0) throw new Error('Нету воды');
//         this._waterAmount = value;
//     }
//     get waterAmount() {
//         return this._waterAmount;
//     }
//     get power() {
//         return this._power;
//     }
    
//     constructor(power) {
//         this._power = power;
//         console.log(`Кофеварка мощностью ${power}`);
//     }

//     makeСoffee() {
//         if (this.waterAmount >= 50 && this.grainQuantity >= 25) {
//             console.log('Кофее делается');
//             setTimeout(() => console.log(`Коффе готово`), 2000);
//         } else {
//             console.log('Недостаточно ингридиентов');
//         }
//     }
// }

// let coffeeMachine = new CoffeeMachine(100);
// console.log(coffeeMachine);
// coffeeMachine.waterAmount = 200;
// coffeeMachine.grainQuantity = 200;
// coffeeMachine.makeСoffee();
// console.log(coffeeMachine);
// console.log(`Мощность ${coffeeMachine.power} W`);