const apiKey = "eeaa6787d912e0e86635457e893ae433";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchCity = document.querySelector('.city-input');
const searchButton = document.querySelector('.search-button');

searchButton.addEventListener('click', ()=> {
    let city = searchCity.value;
    if(!city){
        city = "new York";
    }
    checkWeather(searchCity.value);
});


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + `°C`;
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + `%`;
    document.querySelector(".wind").innerHTML = data.wind.speed + `km/h`;

    if(data.weather[0].main === "Clouds"){
        document.querySelector(".weather-icon").src = "images/clouds.png";
    }
    else if(data.weather[0].main === "Clear"){
        document.querySelector(".weather-icon").src = "images/clear.png";
    }
    else if(data.weather[0].main === "Mist"){
        document.querySelector(".weather-icon").src = "images/mist.png";
    }
    else if(data.weather[0].main === 'Drizzle'){
        document.querySelector(".weather-icon").src = "images/drizzle.png";
    }
    else if(data.weather[0].main === 'Snow'){
        document.querySelector(".weather-icon").src = "images/snow.png";
    }
    else if(data.weather[0].main === 'Rain'){
        document.querySelector(".weather-icon").src = "images/rain.png"
    }
}

checkWeather();
