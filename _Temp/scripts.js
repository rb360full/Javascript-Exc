
const users = [
    {id:1 , name:'reza',age:40},
    {id:2 , name:'ali',age:20},
    {id:3 , name:'hasan',age:30},
    {id:4 , name:'akbar',age:25}
]


let locationSearchParams = new URLSearchParams(location.search)

let userId = locationSearchParams.get('id')

let mainUser =  users.find((user)=>{
    return user.id == userId
})

console.log(mainUser);

