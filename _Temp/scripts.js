

localStorage.setItem('users', ['reza', 'ali', 'abbas', 'hasan'])




localStorage.setItem('usersJSON', JSON.stringify(['reza', 'ali', 'abbas', 'hasan']))



console.log(JSON.parse(localStorage.getItem('usersJSON'))); 

localStorage.removeItem('users')






JSON.parse(localStorage.getItem('usersJSON'))