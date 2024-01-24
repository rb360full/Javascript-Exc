!localStorage.getItem("dbVersion") ? localStorage.setItem("dbVersion", 1) : null;
let dbVersion = parseInt(localStorage.getItem("dbVersion"));
let idCounter = parseInt(localStorage.getItem("idCounter")) || 0;
let db = null;
let dbStore = null;

const btnSubmit = document.querySelector("button");
const nameInput = document.querySelector('input[type="text"]');
const passInput = document.querySelector('input[type="password"]');
const emailInput = document.querySelector('input[type="email"]');

let dbOpenReq = indexedDB.open("Reza", dbVersion);

dbOpenReq.addEventListener("success", (e) => {
    console.log("Open success :", e);
});
dbOpenReq.addEventListener("error", (e) => console.log(e));
dbOpenReq.addEventListener("upgradeneeded", (e) => {
    db = e.target.result;

    //  db.deleteObjectStore('users')
    dbStore = !db.objectStoreNames.contains("users") ? db.createObjectStore("users", { keyPath: "id" }) : null;

    localStorage.setItem("dbVersion", dbVersion + 1);
});

btnSubmit.addEventListener("click", (e) => {
    let tx = db.transaction("users", "readwrite");
    tx.addEventListener("comleted", (e) => {
        console.log("sub suc");
    });

    tx.addEventListener("error", (e) => {
        console.log("tx Error : ", e);
    });

    let store = tx.objectStore("users");
    let storeLenght = store.indexNames.lenght;
    console.log(storeLenght);
    console.log(store);
    idCounter++;
    localStorage.setItem("idCounter", idCounter);
    let newUser = { id: idCounter, name: nameInput.value, pass: passInput.value, email: emailInput.value };

    let txRequest = store.add(newUser);
    txRequest.addEventListener("success", (e) => { });
});
