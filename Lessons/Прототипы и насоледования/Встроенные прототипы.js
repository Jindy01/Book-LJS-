//      Правильная функция 
// Function.prototype.defer = function(ms) {
//     let f = this;
//     return function(...args) {
//         setTimeout(() => f.apply(this, args), ms)
//     }
// }

//      Ошибочная функция 'Декорирующий метод "defer()"'
// Function.prototype.defer = function gastranamus(ms, f) {
//     setTimeout(this, ms);

//     return function setArgs(...args) {
//         let result = f.apply(this, ...args);
//         return result;
//     }
// };

// function f(a, b) {
//     console.log( a + b );
// }

// f.defer(1000)(1, 2);



// function resultTest(f) {
//     Function.prototype.defer = function(ms) {
//         setTimeout(this, ms);
//     }

//     return function result () {
//         let funcResult = f.apply(this, arguments);
//         return funcResult;
//     }
    
// }



// function func() {
//     alert('hi!');
// }

// func.defer(1000);

// func();



// let ob = {f(){}};
// console.log(ob);

// function f() {
//     alert('Hi');
// }



// f.defer = Array.prototype.
// f.defer(1000);



// let obj = {
//     0: 'Hi',
//     1: 'Wor',
//     length: 2,
// };

// obj.join = Array.prototype.join;
// console.log(obj.join(','));

// console.log(obj);