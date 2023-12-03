const modalParentElem = document.querySelector(".modal-parent");
const buttonElem = document.querySelector("button");
const closeBtn = document.querySelector(".X");
const sectionElem = document.querySelector("section");

function closeModal() {
    modalParentElem.style.display = "none";
    sectionElem.style.filter = "blur(0px)";
    buttonElem.blur()
}

function openModal() {
    modalParentElem.style.display = "block";
    sectionElem.style.filter = "blur(10px)";
}

buttonElem.addEventListener("click", openModal);

closeBtn.addEventListener("click", closeModal);

document.body.addEventListener("keydown", function (e) {
    if (e.key == "Escape") {
        closeModal();
    }
});
