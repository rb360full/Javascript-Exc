let body = document.body



setInterval(function () {
    // body.classList.add('background')
    let r = Math.trunc(Math.random() * 256)
    let g = Math.trunc(Math.random() * 256)
    let b = Math.trunc(Math.random() * 256)

    body.style.backgroundColor = `rgb(${r},${g},${b})`

}, 5000)