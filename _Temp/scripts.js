
let id = (id) => {
    return document.getElementById(id)
}

let db;
let usersStore;
let ver = parseInt(localStorage.getItem('ver')) || 1
let openDbReq = indexedDB.open('Database', ver)

openDbReq.addEventListener('error', e => { console.log('open Error'); })
openDbReq.addEventListener('success', e => {
    localStorage.setItem('ver', ver + 1)

    console.log('open Succes');
})
openDbReq.addEventListener('upgradeneeded', e => {
    console.log('upgrade need');
    db = e.target.result
    usersStore = db.objectStoreNames.contains('users') || db.createObjectStore('users', { keyPath: 'id' })

    console.log(db);
})


setTimeout(() => {


    let tx = db.transaction('users', 'readwrite')
    tx.objectStore('users').add({ id: 1, name: id('name').value, pass: id('pass').value, email: id('email').value })


    tx.addEventListener('complete', e => {
        console.log('tx completed');
    })


    let tx2 = db.transaction('users', 'readonly').objectStore('users').getAll()
    tx2.addEventListener('success', e => {
        let array = e.target.result
        let ar2 = array.map(arr => {
            return arr
        })
        console.log(ar2[0]);


    })
}, 2000)


