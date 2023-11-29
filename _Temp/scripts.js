let ul = document.querySelector('.list');

let lis = document.querySelectorAll('.list-item');

let input = document.getElementById('input');
let spans = document.querySelectorAll('.list-item'); 



spans.forEach(function (span) {
    span.addEventListener('click', function () {
        input.focus();
        span.classList.toggle('done');
    });
})