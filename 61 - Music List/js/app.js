const container = document.getElementById("container");
const songs = document.querySelectorAll("audio");
const icons = document.querySelectorAll("i");

container.addEventListener("click", (e) => {
    songs.forEach(function (song) {
        song.pause();
    });

    if (e.target.closest("i")) {
        e.target.nextElementSibling.play();
    }
});

// icons.forEach(function (icon) {
//     icon.addEventListener('click', function (e) {
//         songs.forEach(function (song) { song.pause() })

//         e.target.dataset.name == icon.dataset.name ? icon.nextElementSibling.play() : ""
//     })
// })
