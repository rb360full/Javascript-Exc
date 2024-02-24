const container = document.querySelector(".container");

fetch('part.html').then(response=> response.text())
.then(html=> {
    container.innerHTML = html
})
// container.innerHTML = `
// <h1>Hello World</h1>
// `