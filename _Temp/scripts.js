let ul = document.querySelector('.list');

let lis = document.querySelectorAll('.list-item');

let input = document.getElementById('input');
let spans = document.querySelectorAll('.list-item');


const element1 = document.querySelector('[idReza="reza"]');

console.log(element1);



let i = 0





spans.forEach(function (span) {
    span.addEventListener('click', function (event) {
        i++
        input.focus();
        input.value = span.textContent
        span.setAttribute('idReza', i)


        input.addEventListener('keydown', function (event) {
            if (event.key == 'Enter') {

                (document.querySelector(`[idReza="${i}"]`)).innerHTML = input.value



            }
            
        })



    });
    
})



input.addEventListener('keydown' , function(event){
    if (event.key == 'Enter'){
        document.querySelector('.list').innerHTML +=`<li class="list-item"><span>${input.value}</span></li>`
    }

})