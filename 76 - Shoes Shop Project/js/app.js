const containerElem = document.querySelector('.container')

const products = [
    { id: 1, name: 'Sport Shoes', price: 200, description: 'This is  the description of the product', imageSrc: 'images/1.png' },
    { id: 2, name: 'Women Shoes', price: 100, description: 'This is  the description of the product', imageSrc: 'images/2.png' },
    { id: 3, name: 'Boots', price: 150, description: 'This is  the description of the product', imageSrc: 'images/3.png' }
]



products.forEach(product => {

    containerElem.insertAdjacentHTML("afterbegin", `
    <div class="product-card">
        <h1>${product.name}</h1>
        <p>${product.description}</p>
        <div class="product-pic" style="background-image: url(${product.imageSrc});"></div>
        <div class="product-info">
          <div class="product-price">$${product.price}</div>
          <a href="product.html?id=${product.id}" class="product-button">See More</a>
        </div>
      </div>
    `)
})
