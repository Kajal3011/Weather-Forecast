const uniApi = "1a6bc9b25f2aeee1f4fddfc9b118436f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${uniApi}`);

    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        
        var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed+"km/h";

    if(data.weather[0].main == "Clouds"){
        weathIcon.src="images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weathIcon.src="images/clear.png";
    }
    else if(data.weather[0].main == "Dizzle"){
        weathIcon.src="images/dizzle.png";
    }
    else if(data.weather[0].main == "Humidity"){
        weathIcon.src="images/humidity.png";
    }
    else if(data.weather[0].main == "Mist"){
        weathIcon.src="images/mist.png";
    }
    else if(data.weather[0].main == "Rain"){
        weathIcon.src="images/rain.png";
    }
    else if(data.weather[0].main == "Snow"){
        weathIcon.src="images/snow.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }
    
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
