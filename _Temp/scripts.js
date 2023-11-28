let ul = document.querySelector('.list');

let lis = document.querySelectorAll('.list-item');

let input = document.querySelector('#input');
let spans = document.querySelectorAll('.list-item');


input.addEventListener('keydown', (event) => {
    
    if (event.key == 'Enter') {
        event.preventDefault();
        let li = document.createElement('li');
        li.classList.add('list-item');
        let span= document.createElement('span');
        li.appendChild(span);
        span.innerHTML = input.value;
        ul.appendChild(li);
        spans = document.querySelectorAll('.list-item');
        lis = document.querySelectorAll('.list-item');
        input.value = '';
        console.log(lis);
        lis.forEach(li => {

            li.addEventListener('click', () => {
                li.remove();
            })
        })
        
    }
})


spans.forEach(span => {

    span.addEventListener('click', (event) => {
        event.target.parentElement.remove();
    })
})





