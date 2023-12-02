// let backImg = ["pic_1.jpg", "pic_2.jpg", "pic_3.jpg", "pic_4.jpg", "pic_5.jpg", "pic_6.jpg", "pic_7.jpg", "pic_8.jpg"];
// let backImgRandIndex = Math.floor(Math.random() * backImg.length);
// backImgRand = backImg[backImgRandIndex];

// function ChangeBackground() {
//     document.body.style.backgroundImage = `url(img/${backImgRand})`;
// }

// ChangeBackground();

// let inputCityElem = document.getElementById("inputCity");
// let searchBtnElem = document.getElementById("searchBtn");
// let searchBoxElem = document.getElementById("searchbox");

// let cityNameElem = document.getElementById("cityName");
// let degreeElem = document.getElementById("degree");
// let sunIconElem = document.getElementById("sunicon");
// let sunElem = document.getElementById("sun");
// let humidityElem = document.getElementById("humidity");
// let windSpeedElem = document.getElementById("windSpeed");

// let citiesData = [
//     { name: "tehran", degree: "25°C", sun: "Sunny", humidity: "26%", windSpeed: "10 km/h", iconClass: "bi-brightness-high-fill" },
//     { name: "mashhad", degree: "28°C", sun: "Cloudy", humidity: "31%", windSpeed: "23 km/h", iconClass: "bi-cloud-fill" },
//     { name: "shiraz", degree: "35°C", sun: "Semi-Cloudy", humidity: "37%", windSpeed: "35 km/h", iconClass: "bi-cloud-sun" },
//     { name: "tabriz", degree: "20°C", sun: "Rainy", humidity: "18%", windSpeed: "26 km/h", iconClass: "bi-cloud-rain-fill" },
//     { name: "abadan", degree: "45°C", sun: "Sunny", humidity: "36%", windSpeed: "15 km/h", iconClass: "bi-brightness-high-fill" },
// ];

// let unknownCity = { name: "unknown", degree: "- °C", sun: "-", humidity: "- %", windSpeed: "- km/h", iconClass: "bi-brightness-high-fill" };

// searchBtnElem.addEventListener("click", function () {
//     let cityFounded = citiesData.find(function (cityData) {
//         if (cityData.name === inputCityElem.value) {
//             backImgRandIndex = Math.floor(Math.random() * backImg.length);
//             backImgRand = backImg[backImgRandIndex];
//             document.body.style.backgroundImage = `url(img/${backImgRand})`;

//             searchBoxElem.style.backgroundColor = "rgba(12, 2, 2, 0.8)";
//             searchBtnElem.style.backgroundColor = "rgba(12, 2, 2, 0.4)";
//             inputCityElem.style.backgroundColor = "rgba(12, 2, 2, 0.2)";
//             return true;

//         }
//     });


//     if (!cityFounded) {
//         cityFounded = unknownCity;
//         console.log(cityFounded);
//     }
//     let cityName = cityFounded.name.charAt(0).toUpperCase() + cityFounded.name.slice(1);
//     cityNameElem.innerHTML = "Weather in " + cityName;
//     document.querySelector(".loading").innerHTML = ""
//     degreeElem.innerHTML = cityFounded.degree;
//     sunElem.innerHTML = cityFounded.sun;
//     sunIconElem.setAttribute("class", "");
//     sunIconElem.classList.add("bi", "text-white", cityFounded.iconClass);
//     humidityElem.innerHTML = 'Humidity : ' + cityFounded.humidity;
//     windSpeedElem.innerHTML = 'Wind Speed : ' + cityFounded.windSpeed;


// });












// Define an array of background images and randomly select one
const backImg = ["pic_1.jpg", "pic_2.jpg", "pic_3.jpg", "pic_4.jpg", "pic_5.jpg", "pic_6.jpg", "pic_7.jpg", "pic_8.jpg"];
let backImgRandIndex = Math.floor(Math.random() * backImg.length);
let backImgRand = backImg[backImgRandIndex];

// Change the background image of the page
function changeBackground() {
    document.body.style.backgroundImage = `url(img/${backImgRand})`;
}
changeBackground();

// Define variables for HTML elements
const inputCityElem = document.getElementById("inputCity");
const searchBtnElem = document.getElementById("searchBtn");
const searchBoxElem = document.getElementById("searchbox");
const cityNameElem = document.getElementById("cityName");
const degreeElem = document.getElementById("degree");
const sunIconElem = document.getElementById("sunicon");
const sunElem = document.getElementById("sun");
const humidityElem = document.getElementById("humidity");
const windSpeedElem = document.getElementById("windSpeed");

// Define an array of city data objects
const citiesData = [
    { name: "tehran", degree: "25°C", sun: "Sunny", humidity: "26%", windSpeed: "10 km/h", iconClass: "bi-brightness-high-fill" },
    { name: "mashhad", degree: "28°C", sun: "Cloudy", humidity: "31%", windSpeed: "23 km/h", iconClass: "bi-cloud-fill" },
    { name: "shiraz", degree: "35°C", sun: "Semi-Cloudy", humidity: "37%", windSpeed: "35 km/h", iconClass: "bi-cloud-sun" },
    { name: "tabriz", degree: "20°C", sun: "Rainy", humidity: "18%", windSpeed: "26 km/h", iconClass: "bi-cloud-rain-fill" },
    { name: "abadan", degree: "45°C", sun: "Sunny", humidity: "36%", windSpeed: "15 km/h", iconClass: "bi-brightness-high-fill" },
];

// Define a default city data object for unknown cities
const unknownCity = { name: "unknown", degree: "- °C", sun: "-", humidity: "- %", windSpeed: "- km/h", iconClass: "bi-brightness-high-fill" };

// Add an event listener to the search button
searchBtnElem.addEventListener("click", function () {
    // Find the city data object with the same name as the input value
    const cityFounded = citiesData.find(function (cityData) {
        return cityData.name === inputCityElem.value.toLowerCase();
    });

    // If the city is found, update the page with the city data and a new background image
    if (cityFounded) {
        backImgRandIndex = Math.floor(Math.random() * backImg.length);
        backImgRand = backImg[backImgRandIndex];
        changeBackground();

        searchBoxElem.style.backgroundColor = "rgba(12, 2, 2, 0.8)";
        searchBtnElem.style.backgroundColor = "rgba(12, 2, 2, 0.4)";
        inputCityElem.style.backgroundColor = "rgba(12, 2, 2, 0.2)";

        const cityName = cityFounded.name.charAt(0).toUpperCase() + cityFounded.name.slice(1);
        cityNameElem.innerHTML = "Weather in " + cityName;
        document.querySelector(".loading").innerHTML = "";
        degreeElem.innerHTML = cityFounded.degree;
        sunElem.innerHTML = cityFounded.sun;
        sunIconElem.setAttribute("class", "");
        sunIconElem.classList.add("bi", "text-white", cityFounded.iconClass);
        humidityElem.innerHTML = 'Humidity : ' + cityFounded.humidity;
        windSpeedElem.innerHTML = 'Wind Speed : ' + cityFounded.windSpeed;
    } 
    // If the city is not found, update the page with the default city data and the same background image
    else {
        cityNameElem.innerHTML = "Weather in Unknown";
        degreeElem.innerHTML = unknownCity.degree;
        sunElem.innerHTML = unknownCity.sun;
        sunIconElem.setAttribute("class", "");
        sunIconElem.classList.add("bi", "text-white", unknownCity.iconClass);
        humidityElem.innerHTML = 'Humidity : ' + unknownCity.humidity;
        windSpeedElem.innerHTML = 'Wind Speed : ' + unknownCity.windSpeed;
    }
});
