// Function to fetch and display weather data when the user enter a city name in weather.html .
function buttonClicked() {
    var city = document.getElementById("city_input").value

    // If user didn't search a city name, no weather box will be display.
    if (city === "") {
        alert("Please enter a city name.")
        document.querySelector(".weather-box").style.display = "none"
        return
    }

    // If user search a city name, data will fetch from API and weather box will be display.
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=32804b24a847407391c53709241010&q=${city}`)
        .then((response) => response.json())
        .then((data) => {
            
            // 13 data from rubric requirements, 8 extra data.
            console.log(data)
            var locationName = data.location.name
            var localTime = data.location.localtime
            var temperature = data.current.temp_c
            var feelsLike = data.current.feelslike_c
            var conditionIcon = data.current.condition.icon
            var region = data.location.region
            var country = data.location.country
            var windSpeed = data.current.wind_kph
            var humidity = data.current.humidity
            var weatherDescription = data.current.condition.text
            var forecastTemp = data.forecast.forecastday[0].day.maxtemp_c
            var minTemp = data.forecast.forecastday[0].day.mintemp_c
            var maxTemp = data.forecast.forecastday[0].day.maxtemp_c 
            var chanceOfRain = data.forecast.forecastday[0].day.daily_chance_of_rain
            var chanceOfSnow = data.forecast.forecastday[0].day.daily_chance_of_snow 
            var sunset = data.forecast.forecastday[0].astro.sunset
            var sunrise = data.forecast.forecastday[0].astro.sunrise
            var uvIndex = data.current.uv
            var moonrise = data.forecast.forecastday[0].astro.moonrise
            var moonset = data.forecast.forecastday[0].astro.moonset
            var moonPhase = data.forecast.forecastday[0].astro.moon_phase

            // Display data on the website
            document.getElementById("demo13").innerHTML = locationName
            document.getElementById("demo1").innerHTML = localTime
            document.getElementById("demo2").src = `https:${conditionIcon}`
            document.getElementById("demo3").innerHTML = temperature
            document.getElementById("demo4").innerHTML = feelsLike
            document.getElementById("demo5").innerHTML = region
            document.getElementById("demo6").innerHTML = country
            document.getElementById("demo7").innerHTML = windSpeed
            document.getElementById("demo8").innerHTML = humidity
            document.getElementById("demo9").innerHTML = weatherDescription
            document.getElementById("demo10").innerHTML = forecastTemp
            document.getElementById("demo11").innerHTML = sunset
            document.getElementById("demo12").inneHTML = chanceOfSnow
            document.getElementById("demo19").innerHTML = moonrise 
            document.getElementById("demo20").innerHTML = moonset 
            document.getElementById("demo21").innerHTML = moonPhase

            document.querySelector(".weather-box").style.display = "block"

        })
}


// Function to fetch and display weather data for Los Angeles
function fetchLosAngeles() {
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=32804b24a847407391c53709241010&q=Los Angeles`)
        .then((response) => response.json())
        .then((data) => {

            console.log(data)
            var temperature = data.current.temp_c
            var feelsLike = data.current.feelslike_c
            var condition = data.current.condition.text
            var cityName = data.location.name

            // Display data for Los Angeles under the Los Angeles image
            document.getElementById("la-demo1").innerHTML = `Temperature in ${cityName} is ${temperature} °C`
            document.getElementById("la-demo2").innerHTML = `Feels like: ${feelsLike} °C`
            document.getElementById("la-demo3").innerHTML = `Weather condition: ${condition}`
        })
}
fetchLosAngeles()


// Function to fetch and display weather data for London
function fetchLondon() {
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=32804b24a847407391c53709241010&q=London`)
        .then((response) => response.json())
        .then((data) => {

            console.log(data)
            var temperature = data.current.temp_c
            var feelsLike = data.current.feelslike_c
            var condition = data.current.condition.text
            var cityName = data.location.name

            // Display data for London under the London image
            document.getElementById("london-demo1").innerHTML = `Temperature in ${cityName} is ${temperature} °C`
            document.getElementById("london-demo2").innerHTML = `Feels like: ${feelsLike} °C`
            document.getElementById("london-demo3").innerHTML = `Weather condition: ${condition}`
        })
}
fetchLondon()


// Function to fetch and display weather data for Beijing
function fetchBeijing() {
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=32804b24a847407391c53709241010&q=Beijing`)
        .then((response) => response.json())
        .then((data) => {

            console.log(data)
            var temperature = data.current.temp_c
            var feelsLike = data.current.feelslike_c
            var condition = data.current.condition.text
            var cityName = data.location.name

            // Display data for Beijing under the Beijing image
            document.getElementById("beijing-demo1").innerHTML = `Temperature in ${cityName} is ${temperature} °C`
            document.getElementById("beijing-demo2").innerHTML = `Feels like: ${feelsLike} °C`
            document.getElementById("beijing-demo3").innerHTML = `Weather condition: ${condition}`
        })
}
fetchBeijing()


// Function to fetch and display weather data for Tokyo
function fetchTokyo() {
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=32804b24a847407391c53709241010&q=Tokyo`)
        .then((response) => response.json())
        .then((data) => {

            console.log(data)
            var temperature = data.current.temp_c
            var feelsLike = data.current.feelslike_c
            var condition = data.current.condition.text
            var cityName = data.location.name

            // Display data for Tokyo under the Tokyo image
            document.getElementById("tokyo-demo1").innerHTML = `Temperature in ${cityName} is ${temperature} °C`
            document.getElementById("tokyo-demo2").innerHTML = `Feels like: ${feelsLike} °C`
            document.getElementById("tokyo-demo3").innerHTML = `Weather condition: ${condition}`
        })
}
fetchTokyo()


// Function to fetch and display weather data for Sydney
function fetchSydney() {
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=32804b24a847407391c53709241010&q=Sydney`)
        .then((response) => response.json())
        .then((data) => {

            console.log(data)
            var temperature = data.current.temp_c
            var feelsLike = data.current.feelslike_c
            var condition = data.current.condition.text
            var cityName = data.location.name

            // Display data for Sydney under the Sydney image
            document.getElementById("sydney-demo1").innerHTML = `Temperature in ${cityName} is ${temperature} °C`
            document.getElementById("sydney-demo2").innerHTML = `Feels like: ${feelsLike} °C`
            document.getElementById("sydney-demo3").innerHTML = `Weather condition: ${condition}`
        })
}
fetchSydney()


// Function to fetch and display weather data for Wellington
function fetchWellington() {
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=32804b24a847407391c53709241010&q=Wellington`)
        .then((response) => response.json())
        .then((data) => {

            console.log(data)
            var temperature = data.current.temp_c
            var feelsLike = data.current.feelslike_c
            var condition = data.current.condition.text
            var cityName = data.location.name

            // Display data for Wellington under the Wellington image
            document.getElementById("well-demo1").innerHTML = `Temperature in ${cityName} is ${temperature} °C`
            document.getElementById("well-demo2").innerHTML = `Feels like: ${feelsLike} °C`
            document.getElementById("well-demo3").innerHTML = `Weather condition: ${condition}`
        })
}
fetchWellington()











