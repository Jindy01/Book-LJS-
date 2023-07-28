// async function wait() {
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     return 10;
// }

// function wtf() {
//     wait().then((data) => console.log(data));
// }

// wtf();



// class HttpError extends Error {
//     constructor(response) {
//         super(`${response.status} for ${response.url}`);
//         this.name = 'HttpError';
//         this.response = response;
//     }
// }

// async function loadJson(url)  {
//     let response = await fetch(url);

//     if(response.status == 200) {
//         let json = await response.json();
//         return json;
//     } else {
//         throw new HttpError(response);
//     }
// }

// async function demoGitHubUser() {
//     let user;
    
//     while(true) {
//         let name = prompt("Введите логин?", "iliakan");
        
//         try {
//             user = await loadJson(`https://api.github.com/users/${name}`);
//             break;
//         } catch(err) {
//             if (err instanceof HttpError && err.response.status == 404) {
//                 console.log('Не существует');
//             } else {
//                 throw err;
//             }
//         }
//     }
//     console.log(`Полное имя: ${user.name}.`);
//     return user;
// }

// demoGitHubUser();



// async function loadJson(url) {
//     let response = await fetch(url);

//     if (response.status == 200) {
//         let json = await response.json();
//         return json;
//     } else {
//         throw new Error(response.status);
//     }
// }

// loadJson('no-such-user.json') // (3)
//   .catch(console.log);



// async function getPromise(massege) {
//     let promise = new Promise((resolve) => {
//         setTimeout(() => resolve(massege), 1000);
//     });
    
//     let result = await promise;
//     console.log(result);
// }

// getPromise('Rady')

// async function getError() {
//     try {
//         let response = await fetch(new Error('Ops !'));
//     } catch(err) {
//         console.log(err.name);
//     }
// }

// getError();

// function alertMessage() {
//     console.log('Asome !');
// }

// alertMessage();