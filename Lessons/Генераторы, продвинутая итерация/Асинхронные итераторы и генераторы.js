// async function* generateSequence(start, end) {
//     for (let i = start; i <= end; i++) {
//         await new Promise(resolve => setTimeout(resolve, 1000));
//             yield i;
//     }
// }

// (async () => {
//     let generator = generateSequence(1, 5);
//     console.log(generator);
//     for await (let value of generator) {
//         console.log(value);
//     }
// }) ();



// let range = {
//     from: 1,
//     to: 5,

//     [Symbol.asyncIterator]() {
//         return {
//             current: this.from,
//             last: this.to,

//             async next() {
//                 await new Promise(resolve => setTimeout(resolve, 1000));

//                 if (this.current <= this.last) {
//                     return { done: false, value: this.current++}
//                 } else {
//                     return { done: true,}
//                 }
//             }
//         }
//     }
// };

// (async () => {
//     for await (let value of range) {
//         alert(value)
//     }
// })()


