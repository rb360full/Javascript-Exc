fetch('https://jsonplaceholder.typicode.com/posts/15')
    .then(res => res.json()).then(res => console.log(res))