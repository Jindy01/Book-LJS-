// new Promise(function(resolve, reject) {
//     setTimeout(() => resolve(1), 1000);
// }).then(function(result) {
//     console.log(result);
//     return result + 2;
    
// }).then(function(result) {
//     console.log(result);
//     return result + 2;

// }).then(function(result) {
//     console.log(result);
//     return result + 2;
// });

// new Promise(function(resolve, reject) {
//     setTimeout(() => resolve(2), 1000);
// }).then(function(result) {
//     console.log(result);

//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(result + 2), 1000);
//     });
// }).then(function(result){
//     console.log(result);
// });



//      YouTubeLesson
//          Цепочка Promise
// let promise = new Promise((resolve) => {
//     setTimeout(() => { 
//         resolve('Я переместился');
//     }, 1000);
    
// });

// promise.then((result) => {
//     console.log(result);
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(result + `, досталк ПК`);
//         }, 1000);
//     }).then((result2) => {
//         console.log(result2);
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve(result2 + ' и начал изучать JS');
//             }, 1500)
//         }, 1000).then((endData) => console.log(endData))
//     })
// });

// let promise = new Promise((resolve) => {
//     resolve();
// });

// promise.then((result) => console.log(result))
//         .catch((error) => console.log(error));



// const getPromise = (time, isResoltve = true) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(isResoltve == true) {
//                 resolve(time);
//             } else {
//                 reject(new Error('Ошибка'));
//             }
//         }, time);
//     })
// }
// //      Есть методы Promise[all, allSettled, race, any]
// Promise.race(
//     [getPromise(1000, false),
//      getPromise(1500, false),
//       getPromise(2000, false)])
//       .then((result) => console.log(result))
//       .catch((error) => console.log(error)); 



// const getNumber = (number) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(number);
//         }, 1000)
//     }) 
// };

// const printNumber = async (number) => {
//     const result = await getNumber(number);
//     return result;

//     // return new Promise((resolve) => {
//     //     getNumber(number).then(result => {
//     //         resolve(result);
//     //     })
//     // })

// };

// printNumber(4).then((data) => console.log(data));


// class Thenable {
//     constructor(num) {
//         this.num = num;
//     }
//     then(resolve, reject) {
//         console.log(resolve);
//             setTimeout(() => resolve(this.num * 2), 1000);
//     }
// }

// new Promise(resolve => resolve(1)).then(result => {
//     return new Thenable(result);
// })
//     .then(console.log);
