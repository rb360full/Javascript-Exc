// DOM Elements
const body = document.body;
const shopItemsContainer = document.querySelector(".shop-items");
const cart = document.querySelector(".cart-items");
const cartTotalPrice = document.querySelector(".cart-total-price");
const cartQuantity = document.querySelector(".cart-quantity-input");

// variables
let products = [
    { id: "product-1", name: "Album 1", price: 11.99, imageSrc: "Images/Album 1.png", quantity: 1 },
    { id: "product-2", name: "Album 2", price: 12.99, imageSrc: "Images/Album 2.png", quantity: 1 },
    { id: "product-3", name: "Album 3", price: 13.99, imageSrc: "Images/Album 3.png", quantity: 1 },
    { id: "product-4", name: "Album 4", price: 14.99, imageSrc: "Images/Album 4.png", quantity: 1 },
    { id: "product-5", name: "T Shirt", price: 25.99, imageSrc: "Images/Shirt.png", quantity: 1 },
    { id: "product-6", name: "Band Members", price: 36.99, imageSrc: "Images/Band Members.png", quantity: 1 },
];
let cardProducts = [];

// Functions

function appendProducts(products) {
    products.forEach((product) => {
        const productDom = `
        <div class="shop-item" id="${product.id}">
        <span class="shop-item-title">${product.name}</span>
        <img class="shop-item-image" src="${product.imageSrc}" alt="${product.name}"/>
        <div class="shop-item-details">
          <span class="shop-item-price">$${product.price}</span>
          <button class="btn btn-primary shop-item-button" type="button">
            ADD TO CART
          </button>
        </div>
      </div>`;

        shopItemsContainer.innerHTML += productDom;
    });
}

function addToCart(product) {
    cardProducts.push(product);

    cart.innerHTML = "";

    cardProducts.forEach((product) => {
        const productItem = `
            <div class="cart-row" id="${product.id}">
               <div class="cart-item cart-column">
                   <img class="cart-item-image" src="${product.imageSrc}" width="100" height="100">
                   <span class="cart-item-title">${product.name}</span>
               </div>
               <span class="cart-price cart-column">$${product.price}</span>
               <div class="cart-quantity cart-column">
                   <input class="cart-quantity-input" type="number" value=${product.quantity}>
                   <button class="btn btn-danger" type="button">REMOVE</button>
               </div>
             </div>`;

        cart.innerHTML += productItem;
    });
}

function totalPrice(cardProducts) {
    let cardTotalPrice = 0;
    let productSum = 0;
    cardProducts.forEach((product) => {
        productSum = product.quantity * product.price;

        cardTotalPrice += productSum;
    });

    cartTotalPrice.innerHTML = cardTotalPrice.toFixed(2);

    return cardTotalPrice;
}

// Events

shopItemsContainer.addEventListener("click", function (e) {
    if (e.target.innerText.includes("ADD TO CART")) {
        const targetProduct = e.target.closest("div.shop-item");
        let findedProduct = products.find((product) => {
            return product.id == targetProduct.id;
        });

        addToCart(findedProduct);
        totalPrice(cardProducts);
    }
});

cart.addEventListener("change", function (e) {
    if (e.target.className.includes("cart-quantity-input")) {
        const targetProduct = e.target.closest("div.cart-row");
        let findedProduct = products.find((product) => {
            return product.id == targetProduct.id;
        });

        findedProduct.quantity = e.target.value;
        totalPrice(cardProducts);
    }
});

// Calls
appendProducts(products);
