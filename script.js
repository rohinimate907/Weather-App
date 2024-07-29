const inputBox = document.querySelector('.input-box');
const searchBtn = document.querySelector('.search-box bx-search');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});

 async function checkWeather(city) {
    const api_key = '2f2fc124b696b00d1b6a92ae4b9bb797';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&standard=metric&appid=${api_key}`;
    const weather_data =  await fetch(`${url}`).then(response => response.json());

    temperature.innerHTML = `${ math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.wea}`
    console.log(weather_data)
       
}