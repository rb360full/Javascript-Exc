

document.addEventListener('scroll', () => {
    let scrollTop = document.documentElement.scrollTop
    let clientHeight = document.documentElement.clientHeight
    let scrollHeight = document.documentElement.scrollHeight
  
    let scroll = (scrollTop / (scrollHeight - clientHeight)) * 100;

    console.log('scroll : ', scroll + '%');
})




