//  Task
// function delay(ms) {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(`done`), ms);
//     });
// };

// delay(3000).then(() => console.log(`Выполниться через 3 сек`));



// let promise = new Promise(function(resolve, reject) {
    
//     setTimeout(() => resolve('done'), 1000);
//     setTimeout(() => reject(new Error('Wops!')), 1000);
// });

// promise.then(
//         result => console.log(result),
//             error => console.log(error)
// );

// let promiseTest = new Promise(resolve => {
//     setTimeout(() => resolve('done'), 1000);
// });

// promiseTest.then(console.log)

// let promiseTest1 = new Promise((resolve, reject) => {
//     setTimeout(() => reject(new Error('Ошибка')), 1000);
// });

// promiseTest1.catch(console.log)

// new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Done'), 2000);
// })
// .finally(() => console.log('Промис завершён'))
// .then(result => console.log(result));


// function loadScript(src) {
//     return new Promise(function(resolve, reject) {
//         let script = document.createElement('script');
//         script.src = src;

//         script.onload = () => resolve(script);
//         script.onerror = () => reject(new Error(`Error load script ${src}`));

//         document.head.append(script);
//     })
// }