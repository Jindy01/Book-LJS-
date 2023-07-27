//      Проброс неизвестных ошибок      //

// new Promise((resolve, reject) => {
//     throw new Error('Error');
// }).catch(function(error) {
//     if (error instanceof URIError) {

//     } else {
//         console.log('I don`t known');
//         throw error;
//     }
// }).then(function() {
    
// }).catch(error => {
//     console.log(`Неизвестная ошибка ${error}`);
// });