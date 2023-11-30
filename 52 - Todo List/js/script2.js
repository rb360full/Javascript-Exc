// declare variables and functions
let $ = document
function _id(elemId = "") { return $.getElementById(elemId) }
function _class(elemClass = "") { return $.querySelector("." + elemClass) }
function _classes(elemClasses = "") { return $.querySelectorAll("." + elemClasses) }
let idCounter = localStorage.getItem('idCounter')
let idCounters = []
if (localStorage.getItem('idCounters') == undefined) {
    localStorage.setItem('idCounters', 0)
}
else {
    idCounters = localStorage.getItem('idCounters').split(',').map(Number)
    console.log(idCounters);
}




let myData = 0;



function timeNow() {
    const currentTime = new Date()
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    return (hours + ':' + minutes + ':' + seconds);
}


function removeTodo(id = "") {
    _id(id).parentElement.parentElement.remove();

}

function addTodo(value = "") {
    idCounter++
    let output =
        `
    <li class=" list-group-item d-flex justify-content-between align-items-center">
    <span>${value}</span>
    <span>
      <i>${timeNow()}</i>
      <i class="fa fa-pencil px-3 edit" id="edit${idCounter}"></i>
      <i class="fa fa-trash-o delete" id="del${idCounter}"></i>
    </span>
  </li>`
    localStorage.setItem(`item${idCounter}`, output)
    _id('ultodo').innerHTML += localStorage.getItem(`item${idCounter}`)
    // idCounters = [concat.(localStorage.getItem('idCounters'))]
    localStorage.setItem('idCounter', idCounter)

    idCounters.push(idCounter)
    localStorage.setItem('idCounters', idCounters)
    console.log(idCounters);

    return output

}


function editTodo(id = "", value = "") {
    _id(id).parentElement.previousElementSibling.innerHTML = value
}

////////////////////////////////////


for (let i = 0; i < idCounters.length; i++) {
    _id('ultodo').innerHTML += localStorage.getItem(`item${idCounters[i]}`)
}


//  localItems = localStorage.getItem(`item${i}`)
//  _id('ultodo').innerHTML += localItems




_id('inputtodo').addEventListener('keydown', function (event) {


    if (event.key == "Enter") {
        event.preventDefault()

        addTodo(_id('inputtodo').value)








        _id('inputtodo').value = ""


        _classes('delete').forEach(function (item) {
            item.addEventListener('click', function (event) {
                removeTodo(item.id)

                localStorage.removeItem(`item${item.id.slice(-1)}`)
            })
        })


        _classes('edit').forEach(function (item) {
            item.addEventListener('click', function (event) {
                editTodo(item.id, _id('inputtodo').value)
            })
        })


    }





})



///////////////////////////////

_classes('edit').forEach(function (item) {
    item.addEventListener('click', function (event) {
        editTodo(item.id, _id('inputtodo').value)
    })
})






// _classes('edit').forEach(function (item) {
//     item.addEventListener('click', function (event) {
//         editTodo(item.id, _id('inputtodo').value)
//         console.log(item.id);
//     })
// })

