
// // تابعی که یک عملیات ناهمزمان را انجام می‌دهد
// function fetchData() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve('داده‌های جدید');
//       }, 2000);
//     });
//   }

//   // تابع اصلی که از async و await استفاده می‌کند
//   async function main() {
//     console.log('شروع اجرای کد');

//     // انتظار برای اجرای تابع fetchData
//     const data = await fetchData();

//     console.log('دریافت داده: ', data);

//     console.log('پایان اجرای کد');
//   }

//   main();




function fetchData() {

    let myPromise = new Promise((resolve, reject) => {
        let user;
        myPromise.then(res => {
            user = 'reza'
            console.log('done');
        })
    }, 2000);


    return user
}


fetchData().then(res => {
    console.log(res);
})