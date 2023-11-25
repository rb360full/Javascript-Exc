let countryElem = document.getElementById("country");
let cityElem = document.getElementById("city");

let citiesData = [
    { country: "Iran", cities: ["Tehran", "Shiraz", "Tabriz"] },
    { country: "Canada", cities: ["Vancouver", "Toronto", "Calgary"] },
    { country: "Usa", cities: ["New York", "Los Angeles", "Chicago"] },
    { country: "France", cities: ["Paris", "Lyon", "Marseille"] },
    { country: "Italy", cities: ["Rome", "Venice", "Milan"] },
    { country: "Spain", cities: ["Madrid", "Barcelona", "Valencia"] },
];

let optionNewElem = [];

citiesData.forEach(function (data) {
    console.log(data.country);

    for (let i = 0; i < citiesData.length; i++) {
        optionNewElem.push(document.createElement("option"));
        optionNewElem[i].value = citiesData[i].country;
        optionNewElem[i].innerText = citiesData[i].country;
        countryElem.append(optionNewElem[i]);
    }
});

countryElem.addEventListener("change", function (event) {
    if (countryElem.value == "Select one") {
        cityElem.innerHTML = '<option value="Select one">Select one</option>';
        return;
    }

    let countryName = event.target.value;
    console.log(countryName);

    let cities = citiesData.find(function (data) {
        return data.country == countryName;
    });

    console.log(cities.cities);

    cityElem.innerHTML = "";

    cities.cities.forEach(function (city) {
        console.log(city);

        let optionNewElem = document.createElement("option");
        optionNewElem.value = city;
        optionNewElem.innerText = city;
        cityElem.append(optionNewElem);
    });
});
