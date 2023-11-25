let backImg = ['pic_1.jpg', 'pic_2.jpg', 'pic_3.jpg', 'pic_4.jpg', 'pic_5.jpg', 'pic_6.jpg', 'pic_7.jpg', 'pic_8.jpg'];
let backImgRandIndex = Math.floor(Math.random() * backImg.length);
backImgRand = backImg[backImgRandIndex];

function ChangeBackground() {
    document.body.style.backgroundImage = `url(img/${backImgRand})`

};

(ChangeBackground());


let isCityFound = false;
let inputCityElem = document.getElementById('inputCity');
let searchBtnElem = document.getElementById('searchBtn');
let searchBoxElem = document.getElementById('searchbox');

let degreeElem = document.getElementById('degree');
let sunIconElem = document.getElementById('sunicon');
let sunElem = document.getElementById('sun');
let humidityElem = document.getElementById('humidity');
let windSpeedElem = document.getElementById('windSpeed');
let cityNameElem = document.getElementById('cityName');

let citiesData = [
    { name: 'tehran', degree: '25°C', sun: 'Sunny', humidity: '26%', windSpeed: '10 km/h' },
    { name: 'mashhad', degree: '28°C', sun: 'Cloudy', humidity: '31%', windSpeed: '23 km/h' },
    { name: 'shiraz', degree: '35°C', sun: 'Semi-Cloudy', humidity: '37%', windSpeed: '35 km/h' },
    { name: 'tabriz', degree: '20°C', sun: 'Rainy', humidity: '18%', windSpeed: '26 km/h' },
    { name: 'abadan', degree: '45°C', sun: 'Sunny', humidity: '36%', windSpeed: '15 km/h' }
]

let unknownCity = { name: 'unknown', degree: '- °C', sun: '-', humidity: '- %', windSpeed: '- km/h' }

searchBtnElem.addEventListener('click', function () {
    let cityFounded = citiesData.find(function (cityData) {
        if (cityData.name === inputCityElem.value) {
            isCityFound = true
            backImgRandIndex = Math.floor(Math.random() * backImg.length);
            backImgRand = backImg[backImgRandIndex];
            console.log(backImgRandIndex);
            document.body.style.backgroundImage = `url(img/${backImgRand})`

            searchBoxElem.style.backgroundColor = 'rgba(12, 2, 2, 0.8)';
            searchBtnElem.style.backgroundColor = 'rgba(12, 2, 2, 0.4)';
            inputCityElem.style.backgroundColor = 'rgba(12, 2, 2, 0.2)';



            return true
        }
        else {
            isCityFound = false

        }
    })

    if (isCityFound == false) { cityFounded = unknownCity }
    else {

    }
    let cityName = cityFounded.name.charAt(0).toUpperCase() + cityFounded.name.slice(1);
    console.log(cityName);





})