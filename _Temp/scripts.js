



const audioElem = document.querySelector('audio')
const playBtn = document.getElementById('play')
const pauseBtn = document.getElementById('pause')
const durationBtn = document.getElementById('duration')
const speed2XBtn = document.getElementById('speed2x')
const currentTimeBtn = document.getElementById('current')

playBtn.addEventListener('click', function (e) {
  audioElem.play()
})
pauseBtn.addEventListener('click', function (e) {
  audioElem.pause()
})
durationBtn.addEventListener('click', function (e) {
  console.log(audioElem.duration);
})

speed2XBtn.addEventListener('click', function (e) {
  audioElem.playbackRate = 2
})
currentTimeBtn.addEventListener('click', function (e) {
  console.log(audioElem.currentTime);
})