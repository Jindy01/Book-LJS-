'use strict';

function curry(f) {
    return function(a) {
        return function(b) {
            return f(a, b);
        };
    };
}

function sum(a, b) {
    return a + b;
}

let curriedSum = curry(sum);

console.log(curriedSum(12)(2));

function newCurry(func) {

    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function pass(...args2) {
                return curried.apply(this. args.concat(args2));
            }
        }
    };
}

function newSum(a, b, c) {
    return a + b + c;
}

let curriedSumNew = newCurry(newSum);

console.log(curriedSumNew(1, (3)));