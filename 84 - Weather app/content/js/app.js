// variables

const myApi = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=49e59b4d3b43e99c74710be5a95c3eeb";
const now = new Date();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const inputCity = document.querySelector("input");
const city = document.querySelector(".city");
const weather = document.querySelector(".weather");
const temp = document.querySelector(".temp");
const tempHiLow = document.querySelector(".hi-low");
const dateElem = document.querySelector(".date");

// Events

inputCity.addEventListener("keydown", (e) => {
    e.key == "Enter" &&
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&appid=49e59b4d3b43e99c74710be5a95c3eeb`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                getData(data);
            })
            .catch((msg) => console.log(msg));
});

// functions

function getData(data) {
    city.innerHTML = data.name + " , " + data.sys.country;
    weather.innerHTML = data.weather[0].main;
    temp.innerHTML = (Number(data.main.temp) - 273.15).toFixed(1) + " °c ";
    tempHiLow.innerHTML = (Number(data.main.temp_min) - 273.15).toFixed(1) + " / " + (Number(data.main.temp_max) - 273.15).toFixed(1) + " °c ";
    dateElem.innerHTML = `${days[now.getDay()]} ${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
}
