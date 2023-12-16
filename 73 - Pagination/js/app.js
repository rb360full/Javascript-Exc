// Elements
const body = document.body;
const list = document.getElementById("list");
const pagination = document.getElementById("pagination");

// Data
const users = [
    { id: 1, name: "Amin", family: "Saeedi Rad" },
    { id: 2, name: "Amir", family: "Zehtab" },
    { id: 3, name: "Qadir", family: "Yolme" },
    { id: 4, name: "Babak", family: "Mohammadi" },
    { id: 5, name: "Hasan", family: "Ghahreman Zadeh" },

    { id: 6, name: "Reza", family: "Bazdaran" },
    { id: 7, name: "Nader", family: "Tahmasb" },
    { id: 8, name: "Mohammad", family: "akbari" },
    { id: 9, name: "Mostafa", family: "Sheykhi" },
    { id: 10, name: "Iman", family: "Zarei" },

    { id: 11, name: "Saeed", family: "Ehsani" },
    { id: 12, name: "Siamak", family: "Modiri" },
    { id: 13, name: "Mohsen", family: "Ansari" },
    { id: 14, name: "Mehran", family: "Ali Pour" },
    { id: 15, name: "Amir Hossein", family: "Mahtabi" },

    { id: 16, name: "Hossein", family: "Amino" },
    { id: 17, name: "Melika", family: "Ehsani" },
    { id: 18, name: "Qadir", family: "Yolme" },
    { id: 19, name: "Fatemeh", family: "Alilou" },
    { id: 20, name: "Ehsan", family: "Tayyebi" },

    { id: 21, name: "Zahra", family: "Gholami" },
    { id: 22, name: "Matin", family: "Sahebi" },
];

// Variables
let user_in_page = 3;
let pageStart = 4;


// Functions
function paginate(usersArray, user_in_page) {
    let pages = Math.ceil(usersArray.length / user_in_page);
    for (let i = 1; i <= pages; i++) {
        pagination.innerHTML += `<button id='page-${i}' class="">${i}</button>`;
    }
}

function sliceUsers(user_in_page, pageNumber) {
    list.innerHTML = "";
    counter = (pageNumber - 1) * user_in_page;
    let sliced = users.slice(counter, user_in_page + counter);
    sliced.forEach((user) => {
        list.innerHTML += `<div class="item">${user.name} ${user.family}</div>`;
    });
}

// Events
pagination.addEventListener("click", function (event) {
    let pageBtns = document.querySelectorAll("button");
    pageBtns.forEach((btn) => { btn.classList.remove("active"); });
    event.target.className = "active";
    sliceUsers(user_in_page, event.target.innerHTML);
});


window.addEventListener("load", function () {
    sliceUsers(user_in_page, pageStart);
    this.document.getElementById(`page-${pageStart}`).classList.add("active");
});


// Call Functions
paginate(users, user_in_page, pageStart);