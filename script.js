const apiKey = "SNUMB8CXAS372JEKQYM55BKE8"; // your Visual Crossing API key

document.getElementById("searchBtn").addEventListener("click", getWeather);

function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  if (!city) {
    alert("Please enter a city name!");
    return;
  }

  // ✅ Proxy used to bypass CORS issue on GitHub Pages
  const url = https://corsproxy.io/?https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${apiKey}&contentType=json;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data); // Debugging output

      if (!data.currentConditions) {
        alert("City not found or API returned no data.");
        return;
      }

      document.getElementById("cityName").textContent = data.address || city;
      document.getElementById("temperature").textContent = 🌡️ Temperature: ${data.currentConditions.temp} °C;
      document.getElementById("condition").textContent = ☁️ Condition: ${data.currentConditions.conditions};
      document.getElementById("humidity").textContent = 💧 Humidity: ${data.currentConditions.humidity}%;
      document.getElementById("wind").textContent = 🌬️ Wind Speed: ${data.currentConditions.windspeed} km/h;

      // show the weather info section
      document.getElementById("weatherInfo").classList.remove("hidden");
    })
    .catch(error => {
      console.error("Error fetching weather data:", error);
      alert("Unable to fetch weather data. Please check the city name or try again later.");
    });
}
