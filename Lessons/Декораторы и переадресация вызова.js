'use strict';

let privateValue = (x) => {
    // Cложна - Сложна ...
        return x * 2;
}

const cachingDecorrator = (func) => {
    let cache = new Map();

    return function(x) {
        alert(`cache ${x}`);
        if(cache.has(x)) {
            return cache.get(x);
        }

        let result = func(x);
        cache.set(x, result);
        alert('not cache')
        
        return result;
    }
}  

privateValue = cachingDecorrator(privateValue);

privateValue(4);
privateValue(4);
privateValue(4);




// function double(a, b) {
//     console.log(a * b);
// }

// let testDouble = double.bind(null, 4);
// let testTriple = double.bind(null, 12);

// testDouble(2);
// testDouble(4);
// testDouble(8);
// testDouble(16);

// testTriple(2);
// testTriple(4)
// testTriple(8);
// testTriple(16);



// function printName(...args){
//     console.log(this.name + args);
// }

// let user = {
//     name: 'Joon',
// }

// let testBind = printName.bind(user, ' Добро пожаловать!');

// testBind('Привет')

// testBind('Привет1')



// let sum = {
//     slow(min, max) {
//         alert(`Call ${min}, ${max}`);
//         return min + max;
//     }
// };

// function cachingDecorator(func, hash) {
//     let cache = new Map();

//     return function() {
//         let key = hash(arguments);
//         if (cache.has(key)) {
//             return cache.get(key);
//         }
//         let result = func.call(this, ...arguments);

//         cache.set(key, result);
//         return result;
//     };
// }

// function hash(args) {
//     return args[0] + ',' + args[1];
// }

// sum.slow = cachingDecorator(sum.slow, hash);

// alert( sum.slow(3, 5, 7, 8) ); // работает
// alert( "Again " + sum.slow(3, 5, 7, 8) );



// let worker = {
//     someMetod() {
//         return 1;
//     },

//     slow(x) {
//         alert('Called with' + x);
//         return x * this.someMetod();
//     }
// };

// function cachingDecorator(func) {
//     let cache = new Map();

//     return function(x) {
//         if (cache.has(x)) {
//             return cache.get(x);
//         }
//         let result = func.call(this, x);

//         cache.set(x, result);
//         return result;
//     };
// }

// worker.slow = cachingDecorator(worker.slow);

// alert( worker.slow(4) ); 
// alert( worker.slow(2) ); 
// alert( worker.slow(2) ); 





// function say(param) {
//     alert(this.name + `: ` + param);
// }

// let user = { name: 'Koll'};

// say.call(user, 'привет');



// function sayHi() {
//     alert(this.name);
// }


// let user = { name: 'Koll'};
// let admin = { name: 'Nicl'};

// sayHi.call( user );



// function slow(x) {
//     alert(`Тип ${x}`);
//     return x;
// }

// function cachingDecorator(func) {
//     let cache = new Map();

//     return function(x) {
//         if (cache.has(x)) {
//             return cache.get(x);
//         }
//         let result = func(x);

//         cache.set(x, result);
//         return result;
//     };
// }

// slow = cachingDecorator(slow);

// console.log(slow(1));
// console.log(( "Again: " + slow(1) ));
