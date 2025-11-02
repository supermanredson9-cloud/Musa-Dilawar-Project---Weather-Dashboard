const apiKey = "SNUMB8CXAS372JEKQYM55BKE8";

document.getElementById("searchBtn").addEventListener("click", getWeather);

function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  if (!city) {
    alert("Please enter a city name!");
    return;
  }

  const url = https://corsproxy.io/?https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${apiKey}&contentType=json;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data); // check what's available

      const weather = data.currentConditions  {};
      document.getElementById("cityName").textContent = data.address  city;

      document.getElementById("temperature").textContent = 
        weather.temp !== undefined ? 🌡️ Temperature: ${weather.temp} °C : "Temperature: N/A";

      document.getElementById("condition").textContent = 
        weather.conditions ? ☁️ Condition: ${weather.conditions} : "Condition: N/A";

      document.getElementById("humidity").textContent = 
        weather.humidity !== undefined ? 💧 Humidity: ${weather.humidity}% : "Humidity: N/A";

      document.getElementById("wind").textContent = 
        weather.windspeed !== undefined ? 🌬️ Wind Speed: ${weather.windspeed} km/h : "Wind Speed: N/A";

      document.getElementById("weatherInfo").classList.remove("hidden");
    })
    .catch(error => {
      console.error("Error fetching weather data:", error);
      alert("Unable to fetch weather data. Please check the city name or try again later.");
    });
}
