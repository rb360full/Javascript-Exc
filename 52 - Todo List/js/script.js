let ul = document.querySelector("ul");
let input = document.querySelector("input");
function timeNow() {
  let date = new Date().toLocaleTimeString();
  return date;
}

ul.addEventListener("click", (event) => {
  if (event.target.matches(".delete")) {
    event.target.parentElement.parentElement.remove();
  }
});

ul.addEventListener("click", (event) => {
  if (event.target.matches(".edit")) {
    let value = prompt("Enter new value");
    event.target.parentElement.previousElementSibling.textContent = value;
  }
});

input.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    event.preventDefault();
    ul.innerHTML += `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${input.value}</span>
    <span>
      <i>${timeNow()}</i>
      <i class="fa fa-pencil px-3 edit" id="edit3"></i>
      <i class="fa fa-trash-o delete" id="del3"></i>
    </span>
  </li>`;
    input.value = "";
  }
});