const scrollBarElem = document.querySelector('#scroll');
const body = document.body
const div = document.querySelector('div')


console.log(window.innerHeight);
console.log(body.clientHeight);

window.addEventListener('scroll', e => {
    
    
    console.log(window.scrollY);


    let scrollBarPercent = (window.scrollY / (document.body.clientHeight - window.innerHeight)) * 100
    scrollBarElem.style.width = scrollBarPercent + '%'
})
