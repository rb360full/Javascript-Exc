const ulElem = document.querySelector('ul')

let users = ['reza','ali','mosi','hasan']

let usersFragment = document.createDocumentFragment()

users.forEach((user)=>{
    let newLi = document.createElement('li')
    newLi.innerText = user
    usersFragment.appendChild(newLi)
})


ulElem.appendChild(usersFragment)