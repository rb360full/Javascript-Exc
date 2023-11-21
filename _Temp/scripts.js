

let i =10;

let timer = setInterval(function () {
    
    if(i==0){
        clearInterval(timer)
    }

    console.log(i);
    i--
 }, 1000);


