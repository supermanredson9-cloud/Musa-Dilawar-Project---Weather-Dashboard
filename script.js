const apiKey = "SNUMB8CXAS372JEKQYM55BKE8";

document.getElementById("searchBtn").addEventListener("click", getWeather);

function getWeather() {
  const city = document.getElementById("cityInput").value.trim();

  if (!city) {
    alert("Please enter a city name!");
    return;
  }

  const url = https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${apiKey}&contentType=json;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      const weather = data.currentConditions;

      document.getElementById("cityName").textContent = data.address;
      document.getElementById("temperature").textContent = 🌡️ Temperature: ${weather.temp} °C;
      document.getElementById("condition").textContent = ☁️ Condition: ${weather.conditions};
      document.getElementById("humidity").textContent = 💧 Humidity: ${weather.humidity}%;
      document.getElementById("wind").textContent = 🌬️ Wind Speed: ${weather.windspeed} km/h;

      document.getElementById("weatherInfo").classList.remove("hidden");
    })
    .catch(error => {
      console.error("Error fetching weather data:", error);
      alert("Unable to fetch weather data. Please check the city name.");
    });
}
