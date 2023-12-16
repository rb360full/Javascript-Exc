const body = document.body;
const list = document.getElementById("list");
const pagination = document.getElementById("pagination");

const users = [
    { id: 1, name: "Amin", family: "Saeedi Rad" },
    { id: 2, name: "Amir", family: "Zehtab" },
    { id: 3, name: "Qadir", family: "Yolme" },
    { id: 4, name: "Babak", family: "Mohammadi" },
    { id: 5, name: "Hasan", family: "Ghahreman Zadeh" },

    { id: 6, name: "Reza", family: "Bazdaran" },
    { id: 7, name: "Amir", family: "Zehtab" },
    { id: 8, name: "Qadir", family: "Yolme" },
    { id: 9, name: "Babak", family: "Mohammadi" },
    { id: 10, name: "Hasan", family: "Ghahreman Zadeh" },

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

function paginate(usersArray, user_in_page, start_page) {
    let counter = 0;

    let pages = Math.ceil(usersArray.length / user_in_page);

    for (let i = 1; i <= pages; i++) {
        pagination.innerHTML += `<button id='page-${i}' class="">${i}</button>`;
    }






    pagination.addEventListener("click", (event) => {
        let pageNumber = event.target.innerHTML;
        console.log("pageNumber : ", pageNumber);
        list.innerHTML = "";
        counter = (pageNumber - 1) * user_in_page;

        let sliced = usersArray.slice(counter, user_in_page + counter);
        console.log(sliced);
        sliced.forEach((user) => {
            list.innerHTML += `<div class="item">${user.name} ${user.family}</div>`;
        });
    });
}

paginate(users, 5, 1);



// window.addEventListener('load', function () {
//     alert('msg');
// })
