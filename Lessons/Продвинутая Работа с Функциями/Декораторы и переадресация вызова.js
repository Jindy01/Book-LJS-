// function f(a) {
//   console.log(a)
// }

// function throttle(func, ms) {
//     let isThrottle = false,
//     savedArgs,
//     savedThis;

//     function wrapper() {
//         if (isThrottle) {
//             savedArgs = arguments;
//             savedThis = this;
//             return;
//         }
    
//     func.apply(this, arguments);
    
//     isThrottle = true;

//     setTimeout(function() {
//         isThrottle = false;
//         if(savedArgs) {
//             wrapper.apply(savedThis, savedArgs);
//             savedArgs = savedThis = null;
//         }
//     }, ms);
// }

// return wrapper;
// }

// let f1000 = throttle(f, 1000);

// f1000(1); // показывает 1
// f1000(2); // (ограничение, 1000 мс ещё нет)
// f1000(3); // (ограничение, 1000 мс ещё нет)
// f1000(4); // (ограничение, 1000 мс ещё нет)
// f1000(5); 



// function alert(){
//   console.log('hi');
// }


// function debounce(f, ms) {
//   let isCalldown = false;

//   return function() {
//     if (isCalldown) return;

//     f.apply(this, arguments);

//     isCalldown = true;

//     setTimeout(() => isCalldown = false, ms)
//   }
// }

// let f = debounce(alert, 1000);

// setTimeout( () => f(3), 100);
// setTimeout( () => f(3), 1200);



// function alerts() {
//     console.log('hi');;
// }

// function debounce(f, ms) {

// let booleanParametr = true;

// setInterval(function() {
//   if (booleanParametr) {
//     booleanParametr = false;
//   } else {
//         booleanParametr = true;
//       }
//     }, ms);

//     if (booleanParametr) {
//       return function() {
//         f.apply(this, arguments);
//       }
//     }
// };



// let f = debounce(alerts, 1000);

// setTimeout( () => f(3), 100); 
// setTimeout( () => f(4), 1100); 
// setTimeout( () => f(5), 1500);


// setTimeout(function() {
//     if (booleanParametr) {
//       booleanParametr = false;
//     } else {
//       setInterval(function() {
//         if (booleanParametr) {
//           booleanParametr = false;
//         } else {
//           booleanParametr = true;
//         }
//       }, 1000);
//     }
//   }, 1000);


// function fun(x) {
//     alert(x);
// }

// function delay(func, ms) {

//     return function() {
//         setTimeout(() => func.apply(this, arguments), ms);
//     }   
// }

// let f4000 = delay(fun, 4000);

// f4000("test");



// function work(a, b) {
//     console.log(a + b);
// }

// function spy(func) {
    
//     function wrapper(...args) {
//         wrapper.calls.push(args);
//         return func.apply(this, args);
//     }

//     wrapper.calls = [];
//     return wrapper;
// }

// work = spy(work);

// work(1, 7);
// work(5, 9);

// for (let args of work.calls) {
//   alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
// }



// let cals = []; 

// function work(a, b) {
//     alert(a + b);
//     cals.push([a, b]);
// }

// work(1, 6);



// let hashes = [];

// let sum = {
//     slow(min, max) {
//         alert(`Call ${min}, ${max}`);
//         return min + max;
//     }
// };  

// let calls = [];

// function cachingDecorator(func, hash) {
//     let cache = new Map();

//     return function() {
//         let key = hash(arguments);
//         if (cache.has(key)) {
//             return cache.get(key);
//         }
//         let result = func.call(this, ...arguments);
//         cache.set(key, result);
//             calls.push([this, ...arguments])
//         return result;
//     };
// }

// function hash(args) {
//     return args[0] + ',' + args[1];
// }

// console.log(calls)

// sum.slow = cachingDecorator(sum.slow, hash);

// alert( sum.slow(3, 5, 7, 8) );
// alert( sum.slow(4, 5, 7, 8) )
// alert( sum.slow(5, 5, 7, 8) )
// alert( sum.slow(9, 5, 7, 8) )
// alert( sum.slow(3, 5, 7, 8) ) // работает
// alert( "Again " + sum.slow(3, 5, 7, 8) );




// let privateValue = (x) => {
//     // Cложна - Сложна ...
//         return x * 2;
// }

// const cachingDecorrator = (func) => {
//     let cache = new Map();

//     return function(x) {
//         alert(`cache ${x}`);
//         if(cache.has(x)) {
//             return cache.get(x);
//         }

//         let result = func(x);
//         cache.set(x, result);
//         alert('not cache')
        
//         return result;
//     }
// }  

// privateValue = cachingDecorrator(privateValue);

// privateValue(4);
// privateValue(4);
// privateValue(4);




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
