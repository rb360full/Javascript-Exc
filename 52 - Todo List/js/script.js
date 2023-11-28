let inputTodo = document.getElementById("inputTodo");
let icons = document.querySelectorAll('i');
let ulElem = document.querySelector("ul");


icons.forEach(function (icon) {
    icon.addEventListener('click', function (event) {
        icon.parentElement.remove()
    })
})

inputTodo.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {
        event.preventDefault();
        let newLiElem = document.createElement('li');
        newLiElem.className = "list-group-item d-flex justify-content-between align-items-center"
        let newSpanElem = document.createElement('span')

        newIconElem = document.createElement('i');
        newIconElem.className = "fa fa-trash-o delete";
        newLiElem.appendChild(newSpanElem);
        newLiElem.appendChild(newIconElem);
        newSpanElem.innerText = inputTodo.value;
        ulElem.appendChild(newLiElem)

        icons = document.querySelectorAll('i');
        inputTodo.value = ''


        icons.forEach(function (icon) {
            icon.addEventListener('click', function (event) {
                icon.parentElement.remove()
            })
        })

    }
})
