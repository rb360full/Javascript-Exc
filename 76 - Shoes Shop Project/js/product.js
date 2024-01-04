// Elements
const backButton = document.querySelector('button')

// Data and variables
const products = [
    { id: 1, name: 'Sport Shoes', price: 200, description: 'This is  the description of the product', imageSrc: 'images/1.png' },
    { id: 2, name: 'Women Shoes', price: 100, description: 'This is  the description of the product', imageSrc: 'images/2.png' },
    { id: 3, name: 'Boots', price: 150, description: 'This is  the description of the product', imageSrc: 'images/3.png' }
]

const searchParam = new URLSearchParams(window.location.search)
const productId = searchParam.get('id')


let product = products.find(p => {
    return p.id == productId
})



document.body.insertAdjacentHTML('beforeend', `
<div class="details">
<div class="desc">
  <h1>${product.name}</h1>
  <p>
    ${product.description}
    ${product.description}
    ${product.description}
  </p>
</div>
<div class="image">
  <img src="${product.imageSrc}" />
</div>
</div>
`)


// Events
backButton.addEventListener('click', () => {
    window.history.back()
})