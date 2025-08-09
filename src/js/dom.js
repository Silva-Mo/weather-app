import { fetchWeatherData } from './weatherAPI';

const main = document.querySelector('main');
const searchBtn = document.querySelector('.search-bar-container img');
const searchInput = document.querySelector('.search-bar-container input');

searchBtn.addEventListener('click', async () => {
  const location = searchInput.value;
  try {
    const weatherData = await fetchWeatherData(location);
    createLocationDataElement(weatherData);
  } catch (e) {
    alert(e);
  }
});

const createLocationDataElement = (weatherData) => {
  const container = document.createElement('div');
  const mainContentContainer = document.createElement('div');
  const weatherlogo = document.createElement('img');
  const textContainer = document.createElement('div');
  const conditionText = document.createElement('h2');
  const tempText = document.createElement('h2');

  container.classList.add('location-weather-data-container');
  mainContentContainer.classList.add('main-content-container');
  textContainer.classList.add('text-container');

  conditionText.textContent = weatherData.conditions;
  tempText.textContent = weatherData.temp;
  import(`../imgs/weather-icons/${weatherData.iconType}.svg`).then((response) => {
    weatherlogo.src = response.default;
  });

  textContainer.appendChild(conditionText);
  textContainer.appendChild(tempText);
  mainContentContainer.appendChild(weatherlogo);
  mainContentContainer.appendChild(textContainer);
  container.appendChild(mainContentContainer);
  main.appendChild(container);
};
