const btn = document.querySelector('button')

btn.addEventListener('click', function () {
    let fetched = fetch('https://randomuser.me/api/',{method:'GET'})
    fetched.then(res => {
        return res.status == 200 ? res.json() : null
    })
        .then(data => {
            console.log(data.results[0]);
        })
        .catch(err => console.log(err))
})