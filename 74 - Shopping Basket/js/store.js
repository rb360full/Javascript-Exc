// DOM Elements
const body = document.body;
const shopItemsContainer = document.querySelector(".shop-items");
const cart = document.querySelector(".cart-items");
const cartTotalPrice = document.querySelector(".cart-total-price");
const cartQuantity = document.querySelector(".cart-quantity-input");
const purchaseBtn = document.querySelector(".btn-purchase");
const removeElem = document.querySelector(".btn.btn-danger");

// variables
const products = [
    { id: "product-1", name: "Album 1", price: 11.99, imageSrc: "Images/Album 1.png", quantity: 1 },
    { id: "product-2", name: "Album 2", price: 12.99, imageSrc: "Images/Album 2.png", quantity: 1 },
    { id: "product-3", name: "Album 3", price: 13.99, imageSrc: "Images/Album 3.png", quantity: 1 },
    { id: "product-4", name: "Album 4", price: 14.99, imageSrc: "Images/Album 4.png", quantity: 1 },
    { id: "product-5", name: "T Shirt", price: 25.99, imageSrc: "Images/Shirt.png", quantity: 1 },
    { id: "product-6", name: "Band Members", price: 36.99, imageSrc: "Images/Band Members.png", quantity: 1 },
];
let cartProducts = [];

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
    cartProducts.push(product);

    cart.innerHTML = "";

    cartProducts.forEach((product) => {
        const productItem = `
            <div class="cart-row" id="${product.id}">
               <div class="cart-item cart-column">
                   <img class="cart-item-image" src="${product.imageSrc}" width="100" height="100">
                   <span class="cart-item-title">${product.name}</span>
               </div>
               <span class="cart-price cart-column">$${product.price}</span>
               <div class="cart-quantity cart-column">
                   <input class="cart-quantity-input" type="number" min="1" value=${product.quantity} >
                   <button class="btn btn-danger" type="button">REMOVE</button>
               </div>
             </div>`;

        cart.innerHTML += productItem;
    });
}

function totalPrice(cartProducts) {
    let cardTotalPrice = 0;
    let productSum = 0;
    cartProducts.forEach((product) => {
        productSum = product.quantity * product.price;

        cardTotalPrice += productSum;
    });
    cartTotalPrice.innerHTML = cardTotalPrice.toFixed(2);

    return cardTotalPrice;
}

function purchase() {
    cartProducts = [];
    cart.innerHTML = "";
}

function removeCardItem(event) {
    if (event.target.innerHTML === "REMOVE") {
        const product = event.target.closest("div.cart-row");
        let productIndex = cartProducts.findIndex((prod) => {
            return prod.id == product.id;
        });

        cartProducts[productIndex].quantity = 1;
        cartProducts.splice(productIndex, 1);
        product.remove();
    }
}

// Events

shopItemsContainer.addEventListener("click", function (e) {
    if (e.target.innerText.includes("ADD TO CART")) {
        const targetProduct = e.target.closest("div.shop-item");
        let findedProduct = products.find((product) => {
            return product.id == targetProduct.id;
        });

        !cartProducts.includes(findedProduct) ? addToCart(findedProduct) : null;
        totalPrice(cartProducts);
    }
});

cart.addEventListener("change", function (e) {
    if (e.target.className.includes("cart-quantity-input")) {
        const targetProduct = e.target.closest("div.cart-row");
        let findedProduct = cartProducts.find((product) => {
            return product.id == targetProduct.id;
        });

        findedProduct.quantity = e.target.value;

        totalPrice(cartProducts);
    }
});

purchaseBtn.addEventListener("click", () => {
    purchase();
    totalPrice(cartProducts);
});

cart.addEventListener("click", (event) => {
    removeCardItem(event);
    totalPrice(cartProducts);
});

// Calls
appendProducts(products);
