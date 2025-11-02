const apiKey = "SNUMB8CXAS372JEKQYM55BKE8";

document.getElementById("searchBtn").addEventListener("click", getWeather);

function getWeather() {
  const city = document.getElementById("cityInput").value;
  if (!city) {
    alert("Please enter a city name!");
    return;
  }

  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${apiKey}&contentType=json`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data); // To see full data in browser console
      document.getElementById("cityName").textContent = data.address;
      document.getElementById("temp").textContent = `Temperature: ${data.currentConditions.temp} °C`;
      document.getElementById("conditions").textContent = `Condition: ${data.currentConditions.conditions}`;
    })
    .catch(error => {
      console.error("Error fetching weather data:", error);
      alert("Unable to fetch weather data. Please check the city name.");
    });
}
