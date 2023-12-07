// elements
const body = document.body
const todoContainer = document.getElementById('todoList')
const addButton = document.getElementById('addButton')
const clearButton = document.getElementById('clearButton')
const itemInput = document.getElementById('itemInput')
const completeBtn = document.querySelector('button.btn.btn-success')



// variables
let todoArray = []
let liNew;





// functions

function getTime() {
    const currentTime = new Date()
    return currentTime.toLocaleTimeString()
}
function setAllTodoItems() {
    localStorage.setItem('todoItem', JSON.stringify(todoArray))
}

function appendTodoElemnet(totoName, complete, classs) {

    liNew = document.createElement('li')
    const labelNew = document.createElement('label')
    const buttonNewComplete = document.createElement('button')
    const buttonNewDelete = document.createElement('button')
    liNew.className = `${classs} well`

    // liNew.classList.replace('completed', 'incomplete')


    labelNew.innerHTML = totoName
    buttonNewComplete.className = 'btn btn-success'
    buttonNewComplete.innerHTML = complete
    buttonNewDelete.className = 'btn btn-danger'
    buttonNewDelete.innerHTML = 'Delete'
    liNew.append(labelNew);
    liNew.append(buttonNewComplete);
    liNew.append(buttonNewDelete);

    todoContainer.append(liNew); // final Add Element







}

function getAllTodoItems() {
    let todoLocalArray = JSON.parse(localStorage.getItem('todoItem'));
    if (todoLocalArray) {
        todoLocalArray.forEach(item => {
            let itemObject = { id: item.id, name: item.name, complete: item.complete, timeAdded: item.timeAdded, timeCompleted: item.timeCompleted, classs: item.classs }
            appendTodoElemnet(item.name, item.complete, item.classs)
            liNew.setAttribute('id', item.id); // set id
            todoArray.push(itemObject)
        });
    }
}

function addTodoItem(todoName) {
    let randomId = Date.now();
    randomId++
    console.log(randomId);
    let itemObject = { id: randomId, name: todoName, complete: 'InCompleted', timeAdded: getTime(), timeCompleted: 0, classs: 'incompleted' }
    appendTodoElemnet(todoName, itemObject.complete, itemObject.classs)
    liNew.setAttribute('id', randomId); // set id
    todoArray.push(itemObject)
    setAllTodoItems()
    itemInput.value = ''
}














// events
document.addEventListener('DOMContentLoaded', getAllTodoItems)

addButton.addEventListener('click', function () {
    addTodoItem(itemInput.value)
})
itemInput.addEventListener('keydown', function (e) { e.key == 'Enter' ? addTodoItem(itemInput.value) : null })
todoContainer.addEventListener('click', e => {

    if (e.target.className == 'btn btn-danger') {
        let target = e.target.closest('li')
        let targetId = target.getAttribute('id')
        let removeItem = todoArray.find(function (item) {
            return item.id == targetId
        })
        todoArray.splice(todoArray.indexOf(removeItem), 1)
        setAllTodoItems()
        target.remove()


    }

})
todoContainer.addEventListener('click', e => {
    if (e.target.className == 'btn btn-success' && e.target.innerHTML == 'InCompleted') {

        e.target.closest('li').className = 'completed well'
        let findedItem = todoArray.find(function (item) {
            return e.target.closest('li').getAttribute('id') == item.id
        })
        findedItem.complete = 'Completed'
        findedItem.timeCompleted = getTime()
        findedItem.classs = 'completed'
        setAllTodoItems()
        e.target.innerHTML = 'Completed'


    }
    else if (e.target.className == 'btn btn-success' && e.target.innerHTML == 'Completed') {

        e.target.closest('li').className = 'incompleted well'
        let findedItem = todoArray.find(function (item) {
            return e.target.closest('li').getAttribute('id') == item.id
        })
        findedItem.complete = 'InCompleted'
        findedItem.timeCompleted = 0
        findedItem.classs = 'incompleted'

        setAllTodoItems()
        e.target.innerHTML = 'InCompleted'
    }
})



clearButton.addEventListener('click', function () {
    todoContainer.innerHTML = "";
    todoArray = [];
    localStorage.removeItem('todoItem');
})




