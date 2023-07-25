'use strict';

new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
}).then(function(result) {
    console.log(result);
    return result + 2;
    
}).then(function(result) {
    console.log(result);
    return result + 2;

}).then(function(result) {
    console.log(result);
    return result + 2;
});

new Promise(function(resolve, reject) {
    setTimeout(() => resolve(2), 1000);
}).then(function(result) {
    console.log(result);

    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(result + 2), 1000);
    });
}).then(function(result){
    console.log(result);
});



//      YouTubeLesson
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Ready!')
    }, 1000);
    
});

promise.then((data) => console.log(data))   