const myApi = "https://rbazdaran-js-default-rtdb.firebaseio.com/";
let usersArray = null;
let userID = null;
const wrapUsers = document.querySelector("#wrap-users");
const deleteModal = document.querySelector("#delete-modal");
const editModal = document.querySelector("#edit-modal");

const firstname = document.querySelector(".firstname");
const lastname = document.querySelector(".lastname");
const password = document.querySelector(".password");

window.addEventListener("load", function () {
    fetch(myApi + "users.json", {
        method: "GET",
    })
        .then((res) => res.json())
        .then((res) => {
            usersArray = Object.entries(res);
            console.log(usersArray);
            insertUsersDom(usersArray);
        });
});

function insertUsersDom() {
    wrapUsers.innerHTML = "";
    usersArray.forEach((user) => {
        // console.log(user[1]);

        wrapUsers.insertAdjacentHTML(
            "beforeend",
            `
              <div class="user">
             <div class="user-profile-wrap">
                 <img class="user-profile" src="content/img/noimg.png" alt="default-image">
                 <div class="user-profile-description">
                     <h1 class="user-profile-name">${user[1].firstname} - ${user[1].lastname}<span class="user-age">18</span> </h1>
                     <h3 class="user-explanations">Pass: ${user[1].password}</h3>
                 </div>
             </div>
             <div class="btn-groups-column">
                 <button class="delete-user-btn" onclick="openDeleteModal('${user[0]}')">delete</button>
                 <button class="edit-user-btn" onclick="openEditModal('${user[0]}')">edit</button>
             </div>
             </div>
             `
        );
    });
}

function openDeleteModal(id) {
    deleteModal.classList.add("visible");
    userID = id;
}

function closeDeleteModal() {
    deleteModal.classList.remove("visible");
}

async function deleteUser() {
    console.log(userID);
    await fetch(myApi + "users/" + userID + ".json", {
        method: "DELETE",
    }).then((res) => {
        console.log(res);
        closeDeleteModal();
        insertUsersDom();
    });
}

function openEditModal(id) {
    editModal.classList.add("visible");

    userID = id;
}

function closeEditModal() {
    editModal.classList.remove("visible");
}

async function updateUser() {
    let user = {
        firstname: firstname.value,
        lastname: lastname.value,
        password: password.value,
    };
    await fetch(myApi + "users/" + userID + ".json", {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(user),
    })
        .then((res) => {
            console.log(res);
            closeEditModal();
            insertUsersDom();
        })
        .catch((err) => console.log(err));
}


document.addEventListener('click', e => {


    e.target.parentElement.matches('#edit-modal') ? closeEditModal() : null


})