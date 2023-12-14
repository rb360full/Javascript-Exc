// elements
const body = document.body;
const form = document.querySelector("form");
const bookList = document.getElementById("book-list");
const addBookBtn = document.querySelector('input[type="submit"]');
const title = document.getElementById("title");
const author = document.getElementById("author");
const year = document.getElementById("year");

// variables
const books = [];

// functions

function newBook() {
    book = { id: "book-" + books.length, title: title.value, author: author.value, year: year.value };
    return book;
}

function appendBook(book) {
    const trElem = `<tr id='${book.id}'>
        <th>${book.title}</th>
        <th>${book.author}</th>
        <th>${book.year}</th>
     </tr>`;
    bookList.innerHTML += trElem;
}

function addBookToList() {
    let book = newBook();
    appendBook(book);
    books.push(book);
    setLocalStorage();
    (title.value = ""), (author.value = ""), (year.value = "");
}

function setLocalStorage() {
    localStorage.setItem("books", JSON.stringify(books));
}

function getLocalStorage() {
    const booksLocal = JSON.parse(localStorage.getItem("books"));
    if (booksLocal) {
        booksLocal.forEach((element) => {
            books.push(element);
            appendBook(element);
        });
    }
}

// events
form.addEventListener("submit", (e) => {
    e.preventDefault();
});

addBookBtn.addEventListener("click", (e) => {
    newBook();
    addBookToList(newBook());
    console.log(books);
});
body.onload = getLocalStorage;
