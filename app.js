const api = {
    key: "440dc36b240757d76084ad2a8572cadc",
    base: "https://api.openweathermap.org/data/2.5/"
  }

  const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

let body = document.getElementById('body')



function setQuery(evt) {
  if (evt.keyCode == 13) {
     getResults(searchbox.value);
    console.log(searchbox.value)
  }
}

function getResults (query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(weather => {
        return weather.json();
      }).then(displayResults);
  }

  function displayResults (weather) {
console.log(weather);

  
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
  
    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);
  
const weatherState = weather.weather[0].main;

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
  
    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weatherState;


console.log(weatherState)

     if(weatherState == 'Clouds'){
            console.log("it working")
            document.body.style.backgroundImage ="url('/cloud2.gif')"
    }else if(weatherState == 'Sunny'){

        document.body.style.backgroundImage ="url('/sunny2.gif')"

    }else if(weatherState == 'Rain'){

        document.body.style.backgroundImage ="url('/rain3.gif')"

    }else if(weatherState == 'Clear'){

        document.body.style.backgroundImage ="url('/clear2.gif')"

    }
 

  
    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
  }
  
  function dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
  }