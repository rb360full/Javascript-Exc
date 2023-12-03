const box = document.getElementById('box');

function handleMouseMove() {
  console.log('moved');
}

function removeMouseMoveListener() {
  box.removeEventListener('mousemove', handleMouseMove);
  console.log('removed');
}

box.addEventListener('click', removeMouseMoveListener);
box.addEventListener('mousemove', handleMouseMove);


document.body.addEventListener('touchcancel',function(){
  console.log('touch Canceled');
})

