'use strict';

let list = {
  value: 1,
  next: {
    value: 2,
      next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(a) {
  let tmp = list;
  
    while (tmp) {
      console.log(tmp.value);
      tmp = tmp.next;
      
    }

}

console.log(printList(list));




// function recursionList(list) { 
    
//   for(let key in list) {
//     if (typeof list[key] === 'object') {
//       recursionList(list[key])
//    } else {
//     console.log(list[key]);
//    }
//   }
// }

// console.log(recursionList(list));



// console.log(printList(list));


// function myFibonachy(x) { // Моя формула + Есть вариант решения через плавающий массив
    
//     let result = 0;
//         let oneNumber = 1;
    
//         for (let i = 0; i <= x; ++i) {
//             result = oneNumber * (x - 1) + oneNumber * (x - 2); 
//         }
//         return result;

// }

// console.log(myFibonachy(7));



// function numberOfFibonachi(x) {

//     let a = 1;
//     let b = 1;

//     for (let i = 3; i <= x; i++) {
//         let c = a + b;
//         a = b;
//         b = c;
//     }
//     return b;
// }
// // F(n) = F(n-1) + F(n-2) Формула;
 
// console.log(numberOfFibonachi(13));


// function numberFirst(z)

// for (let i = 0; true; ++i) { // f
    
// }

// function numberSecond(z) {
    
//     for (let i = 0; z > i; ++i) { // x

//     }
// }

// function factorial (x) {
//     if (x == 1) {
//         return x;
//     } else 
//        return x * factorial(x - 1);
// }

// console.log(factorial(5));



// function sumTo(x) {

//     return x * (x + 1) / 2;
// }

// console.log(sumTo(100));


// function sumTo(x) {

//     if (x == 0) {
//         return x;
//     } else 
//         return x + sumTo(x - 1);
    
// }

// console.log(sumTo(100));



// function itteration(x) {

//     let number = x;
//     let result = 0;

//     for (let i = 0; i < x; ++i) {
//         result += number; 
//         number = number - 1;
//     }
//     return result;
// }

// console.log(itteration(100));



// function pow(x, n) {
//     if (n == 1) {
//         return x;
//     } else {
//         return x * pow(x,n - 1);
//     }
// }

// console.log(pow(2, 4))



// function pow(x, n) {
//     if (n == 1) {
//         return x;
//     } else {
//         return x * pow(x,n - 1);
//     }
// }
//
// alert(pow(2, 4))