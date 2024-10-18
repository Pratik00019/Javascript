/// Callback Hell ///

// let getData = (idx, newCallback) =>{
//     setTimeout(()=>{
//         console.log(`Hello JS ${idx}`);
//         if(newCallback)
//             newCallback(2);
//     }, 3000);
// }

// getData(1,()=>{
//     getData(2);
// })


/// Promises ///

// function getData(idx) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`Data fetched ${idx}`);
//             //reject("Rejected");
//         }, 3000);
//     });
// }

// /// Promise Chaining
// /// This chainig or callback helps to execute the data or code in our manner
// /// For example - If we are trying to login in instagram first we will check whether there is username
// //                and then we will enter the password 
// getData(1).then((approved)=>{
//     console.log(approved);
//     getData(2).then((approved)=>{
//         console.log(approved);
//     })
// }).catch((err)=>{
//     console.log(err);
//     console.log("In Catch Promise");
// });

/// Async Await 
// function getApi(idx) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(`Hello using async await ${idx}`);
//             resolve(); // Resolve the promise after the timeout
//         }, 2000);
//     });
// }

// async function getData() {
//     await getApi(1);
//     await getApi(2);
// }