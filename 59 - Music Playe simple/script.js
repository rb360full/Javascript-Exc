// define Elements
const audioElem = document.getElementById("audio");
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("previous");
const stopBtn = document.getElementById("stop");
const playbackSpeed = document.getElementById("speed");
const resetBtn = document.getElementById("reset");
const forwardBtn = document.getElementById("forward");
const backwardBtn = document.getElementById("backward");
const repeatBtn = document.getElementById('repeat');
const trackNameElem = document.getElementById("trackname");
const fileInput = document.getElementById("file-input");
const durationElem = document.getElementById("duration");
const currentTimeElem = document.getElementById("currentTime");

// define variables
const audioList = [
    { url: "media/music 01.mp3", name: "music 01" },
    { url: "media/music 02.mp3", name: "music 02" },
    { url: "media/music 03.mp3", name: "music 03" },
    { url: "media/music 04.mp3", name: "music 04" },
];
let isRepeat = false;

audioElem.setAttribute("src", audioList[0].url);

let currentTrack = audioList.find(function (track) {
    return audioElem.getAttribute("src") == track.url;
});
let currentTrackIndex = audioList.indexOf(currentTrack);

console.log(currentTrack);
console.log(currentTrackIndex);

// define functions
function playMusic() {
    audioElem.play();
    showTrackName();
}

function pauseMusic() {
    audioElem.pause();
}

function nextMusic() {
    currentTrackIndex < audioList.length - 1 ? currentTrackIndex++ : (currentTrackIndex = 0);
    audioElem.src = audioList[currentTrackIndex].url;
    playMusic();
    showTrackName();
}

function prevMusic() {
    currentTrackIndex == 0 ? (currentTrackIndex = audioList.length - 1) : currentTrackIndex--;
    audioElem.src = audioList[currentTrackIndex].url;
    playMusic();
    showTrackName();
}

function showTrackName() {
    console.log(currentTrackIndex);
    trackNameElem.innerHTML = audioList[currentTrackIndex].name.split(".mp3")[0];
}

function timeUpdate() {
    let min;
    let sec;
    min = String(Math.floor(audioElem.currentTime / 60)).padStart(2, "0");
    sec = String(Math.floor(audioElem.currentTime % 60)).padStart(2, "0");
    currentTimeElem.innerHTML = min + " : " + sec;
}

function speedMusic(rate) {
    return (audioElem.playbackRate = rate);
}

function forwardMusic() {
    audioElem.currentTime += 10;
    playMusic();
}
function backwardMusic() {
    audioElem.currentTime -= 10;
    playMusic();
}

function stopMusic() {
    pauseMusic();
    audioElem.currentTime = 0;
}

function repeatMusic() {
    isRepeat = true;
}




























// define Events

playBtn.addEventListener("click", playMusic);
pauseBtn.addEventListener("click", pauseMusic);
nextBtn.addEventListener("click", nextMusic);
prevBtn.addEventListener("click", prevMusic);
audioElem.addEventListener("timeupdate", timeUpdate);
audioElem.addEventListener("ended", function () {
    if (!isRepeat) { nextMusic() }
    else { audioElem.currentTime = 0, playMusic() }






});
playbackSpeed.addEventListener("click", function () { speedMusic(1.5); });
resetBtn.addEventListener("click", function () { speedMusic(1); });
forwardBtn.addEventListener("click", forwardMusic);
backwardBtn.addEventListener("click", backwardMusic);
stopBtn.addEventListener("click", stopMusic);
repeatBtn.addEventListener('click', repeatMusic)

durationElem.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        audioElem.currentTime = event.target.value;
    }
});

fileInput.addEventListener("change", function (event) {
    const files = fileInput.files;
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileName = file.name;
        const fileUrl = URL.createObjectURL(file);
        const fileObject = { url: fileUrl, name: fileName };
        audioList.push(fileObject);
    }
});
