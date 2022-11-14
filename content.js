const apiData = {
    key: '7e2fdaaff06ddb3f0b41c7f1bc48d066',
    baseURL: 'https://api.openweathermap.org/data/2.5/weather'
};

const cityName = document.querySelector('.cityName');

cityName.addEventListener("keypress", function (event) {
    if (event.key == 'Enter') {
        getApiInformation(cityName.value);
    }
})

 
function getApiInformation(city) {
    fetch(`${apiData.baseURL}?q=${city}&appid=${apiData.key}&units=metric`)
        .then(response => response.json())
        .then(data => updateInformation(data))

        .catch(err => alert("Incorrect Input"));

}

function updateInformation(weatherDetails) {
    const name = document.querySelector('#name');
    const date = document.querySelector('#date');
    const temp = document.querySelector('.temp');
    const minMax = document.querySelector('.minMax');
    const currentWeather = document.querySelector('.currentWeather');
    const weatherImage = document.querySelector('.weatherImage');


    name.innerHTML = cityName.value + ",   " + weatherDetails.sys.country;
    date.innerHTML = getCurrentDate();
    temp.innerHTML = Math.floor(weatherDetails.main.temp) + " \u00b0C";
    minMax.innerHTML = Math.floor(weatherDetails.main.temp_min) + " \u00b0C (min) / " + Math.round(weatherDetails.main.temp_max) + " \u00b0C (max)";
    currentWeather.innerHTML = weatherDetails.weather[0].main;

    if (currentWeather.innerHTML == 'Haze') {
        weatherImage.innerHTML = "🌫";
        document.body.style.backgroundImage = "url(/Resources/Haze.jpg)";
    }

    if (currentWeather.innerHTML == 'Clouds') {
        weatherImage.innerHTML = "☁";
        document.body.style.backgroundImage = "url(/Resources/Clouds.jpg)";
    }

    if (currentWeather.innerHTML == 'Rain') {
        weatherImage.innerHTML = "☔";
        document.body.style.backgroundImage = "url(/Resources/Rain.jpg)";
    }

    if (currentWeather.innerHTML == 'Mist') {
        weatherImage.innerHTML = "❅";
        document.body.style.backgroundImage = "url(/Resources/Mist.jpg)";
    }

    if (currentWeather.innerHTML == 'Clear') {
        weatherImage.innerHTML = "🌞";
        document.body.style.backgroundImage = "url(/Resources/Clear.jpg)";
    }

}


function getCurrentDate() {
    const currentDate = new Date();

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return currentDate.getDate() + " " + months[currentDate.getMonth()] + " (" + days[currentDate.getDay()] + "), " + currentDate.getFullYear();
}

