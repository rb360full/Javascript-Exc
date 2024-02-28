// //////////////////////////// Callback Hell ////////////////////////////

// const do1 = (fname, lname, callback) => {
//     setTimeout(() => {
//         const user = {
//             fname,
//             lname,
//         };
//         console.log("the user is : ", user);
//         do2();
//     }, 2000);
// };

// const do2 = (course) => {
//     let lessons = { course };
//     let out = setTimeout(() => {
//         console.log("the course is : ", lessons);
//     }, 1000);
//     return out;
// };

// do1("reza", "bazdaran");
// // do2('JavaScript')

//////////////////////////// Promise ////////////////////////////


//////////////////////////// Callback Hell ////////////////////////////

// const do1 = (fname, lname) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({
//                 fname,
//                 lname


//             })

//         }, 2000);
//     })
// };

// const do2 = (course) => {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             resolve({ 'this is the course': course })
//         }, 1000);
//     })
// };


// do1('reza', 'bazdaran').then(user => {
//     console.log(user);
// }).then(res => {
//     do2('javascript').then(course => {
//         console.log(course);
//     })
// })


//////////////////////////// Async Await ////////////////////////////



