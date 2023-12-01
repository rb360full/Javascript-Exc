// Selecting the necessary elements from the DOM
const ul = document.querySelector("ul");
const input = document.querySelector("input");

// Function to get the current time
function getCurrentTime() {
  return new Date().toLocaleTimeString();
}

// Event listener for deleting a list item
ul.addEventListener("click", (event) => {
  if (event.target.matches(".delete")) {
    event.target.closest("li").remove();
  }
});

// Event listener for editing a list item
ul.addEventListener("click", (event) => {
  if (event.target.matches(".edit")) {
    const newValue = prompt("Enter new value");
    const listItem = event.target.closest("li");
    const span = listItem.querySelector("span:first-child");
    span.textContent = newValue;
  }
});

// Event listener for adding a new list item
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    const newListItem = document.createElement("li");
    newListItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
    newListItem.innerHTML = `
      <span>${input.value}</span>
      <span>
        <i>${getCurrentTime()}</i>
        <i class="fa fa-pencil px-3 edit"></i>
        <i class="fa fa-trash-o delete"></i>
      </span>
    `;
    ul.appendChild(newListItem);
    input.value = "";
  }
});