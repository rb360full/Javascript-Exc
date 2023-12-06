// Elements
const body = document.body;
const modalTodoShow = document.getElementById("add_btn");
const modalTodo = document.getElementById("todo_form");
const closeModalBtn = document.querySelector(".close-modal");
const todoSubmitBtn = document.getElementById('todo_submit');
const todoInput = document.getElementById('todo_input');

const noStatusBox = document.getElementById('no_status');












// Functions

function closeModal() { modalTodo.style.top = '-100%', todoInput.blur() }
function openModal() { modalTodo.style.top = '50%', todoInput.focus(); }

function addTodoItem() {


    let newDivElem = document.createElement('div');
    let newSpanElem = document.createElement('span');
    newDivElem.classList.add('todo');
    newDivElem.setAttribute('draggable', true);
    newDivElem.innerHTML = todoInput.value;
    newSpanElem.classList.add('close');
    newSpanElem.innerHTML = '&times;'
    newDivElem.append(newSpanElem)
    noStatusBox.append(newDivElem);

    closeModal()
    todoInput.value = '';
}
























// Events
modalTodoShow.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
body.addEventListener('keydown', e => { e.key === 'Escape' && modalTodo.style.top == '50%' ? closeModal() : null })
todoSubmitBtn.addEventListener('click', addTodoItem)
todoInput.addEventListener('keydown', e => { if (e.key === 'Enter') { addTodoItem() } })
