async function f1(...args) {
  let sum = 0;

  let promise = new Promise((resolve) => {
    setTimeout(() => {
      for (let arg of args) {
        sum += arg;
      }
      resolve(sum);
    }, 2000);
  });

  return promise;
}

(async function runCodes(...args) {
  let lg = await f1(...args);
  console.log(lg);
}())

// runCodes(1, 2, 3);

f1(1, 2, 3, 4).then((res) => {
  console.log(res);
});
