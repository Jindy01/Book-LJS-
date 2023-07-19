

// function printNumbers(from, to) {
//     let current = from;
  
//     setTimeout(function go() {
//       alert(current);
//       if (current < to) {
//         setTimeout(go, 10);
//       }
//       current++;
//     }, 10);
//   }
  
//   // использование:
//   printNumbers(5, 10);



// function printNumbers(from, to) {
//     let i = from;
    
//     let timeID = setTimeout(function iter() {
//         if (i <= to) {
//             alert(i);
//             setTimeout(iter, 10)
//         }
//         i++;
//         // clearTimeout(timeID);
//     });

// }

// printNumbers(6, 10);



// function printNumbers(from, to) {
//     let i = from;
    
//         let setTimeID = setInterval(() => {
//             alert(i);
//             ++i;
//             if(i > to) {
//                 clearInterval(setTimeID);
//             }
//         }, 1000)
// }

// printNumbers(5, 10);



// let i = 0;

// setTimeout(function run() {
//     alert(i);
//     setTimeout(run, 2000);
// }, 2000)


// let timerId = setTimeout(function tick() {alert('tick')

//     timerId = setTimeout(tick, 2000);
// }, 2000)



// let timerId = setInterval(() => alert('tick'), 2000);

// setTimeout(() => {clearInterval(timerId); alert('stop')}, 5000);



// let timeId = setTimeout(() => alert('Hello'), 2500);
// alert(timeId);
 
// clearTimeout(timeId);
// alert(timeId);



// function sayHi(persona, age) {
//     alert(`Hi ${persona} и тебе ${age} лет ? `);
// }

// setTimeout(sayHi, 1000, 'Jon', 15);