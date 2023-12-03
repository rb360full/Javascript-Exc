const box = document.getElementById('box');

document.addEventListener('scroll', function (e) {
  console.log(document.documentElement.scrollTop, document.documentElement.scrollIntoView, document.documentElement.scrollWidth);
})

