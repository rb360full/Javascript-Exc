const ulElem = document.querySelector('ul');
const li = document.querySelector('li');

const p = document.querySelector('ul').children[0].innerHTML;

console.log(p);


ulElem.addEventListener('click',function(event){
  const newValue = prompt('Enter new value');
  
  
  event.target.closest('li').textContent = newValue
})