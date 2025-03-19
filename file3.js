document.getElementById('search-btn').addEventListener('click', function() {
    const cityName = document.getElementById('city-input').value;
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API Key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                alert('City not found!');
            } else {
                document.getElementById('city-name').textContent = `${data.name}, ${data.sys.country}`;
                document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
                document.getElementById('weather-description').textContent = `Weather: ${data.weather[0].description}`;
                document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
                document.getElementById('wind-speed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
});
