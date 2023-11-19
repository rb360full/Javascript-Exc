let allProducts = [
    { id: 1, name: "pen", price: 10 },
    { id: 2, name: "mouse", price: 200 },
    { id: 3, name: "phone", price: 500 },
    { id: 4, name: "book", price: 100 },
    { id: 5, name: "keyboard", price: 300 },
    { id: 6, name: "ram", price: 400 },
    { id: 7, name: "watch", price: 800 },
    { id: 8, name: "water", price: 20 },
    { id: 9, name: "labtop", price: 900 },
];

let userCart = [
    { id: 2, name: "mouse", price: 200 },
    { id: 5, name: "keyboard", price: 300 },
    { id: 9, name: "labtop", price: 900 },
];

let userMenue = prompt("Please Select one option below : \n 1: Add Product \n 2: Remove Product", 1);
let addProduct;
let removeProduct;

switch (userMenue) {
    case "1":
        addProduct = prompt("Type the Product you want Add: ");
        var addProductIndex = allProducts.findIndex(function (product) {
            return product.name == addProduct;
        });
        if (addProductIndex != -1) {
            userCart.push(allProducts[addProductIndex]);
            console.log(userCart);
        } else {
            alert("This Product not exist in Store !");
        }
        break;

    case "2":
        removeProduct = prompt("Type the Product you want Remove: ");

        var removeProductIndex = userCart.findIndex(function (product) {
            return product.name == removeProduct;
        });
        if (removeProductIndex != -1) {
            userCart.splice(removeProductIndex, 1);
            console.log(userCart);
        } else {
            alert("product not found in your Cart ! ");
        }
        break;
    default:
        alert("Enter True Value !");
        break;
}