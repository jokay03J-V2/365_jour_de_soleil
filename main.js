"use strict";
import "./style.css";

const forecastContainer = document.querySelector("#forecasts");
const forecastData = [
  {
    title_day: "lun",
    title_date: "20",
    icon: "sleet.png",
    temp_max: "14",
    temp_min: "10",
    alt: "neige fondu",
  },
  {
    title_day: "lun",
    title_date: "20",
    icon: "chance-storm.png",
    temp_max: "14",
    temp_min: "10",
    alt: "chance qu'un orage tombe",
  },
  {
    title_day: "lun",
    title_date: "20",
    icon: "snow.png",
    temp_max: "14",
    temp_min: "10",
    alt: "neige",
  },
  {
    title_day: "lun",
    title_date: "20",
    icon: "sunny.png",
    temp_max: "14",
    temp_min: "10",
    alt: "soleil",
  },
  {
    title_day: "lun",
    title_date: "20",
    icon: "thunder-storm.png",
    temp_max: "14",
    temp_min: "10",
    alt: "tempête",
  },
  {
    title_day: "lun",
    title_date: "20",
    icon: "wind.png",
    temp_max: "14",
    temp_min: "10",
    alt: "vent",
  },
  {
    title_day: "lun",
    title_date: "20",
    icon: "chance-storm.png",
    temp_max: "14",
    temp_min: "10",
    alt: "chance qu'un orage tombe",
  },
  {
    title_day: "lun",
    title_date: "20",
    icon: "fog.png",
    temp_max: "14",
    temp_min: "10",
    alt: "brouillard",
  },
  {
    title_day: "lun",
    title_date: "20",
    icon: "hazy.png",
    temp_max: "14",
    temp_min: "10",
    alt: "brumeux",
  },
  {
    title_day: "lun",
    title_date: "20",
    icon: "chance-storm.png",
    temp_max: "14",
    temp_min: "10",
    alt: "chance qu'un orage tombe",
  },
];

for (const forecastItem of forecastData) {
  forecastContainer.innerHTML += `        <li class="forecast-item">
          <article>
            <h3><span>${forecastItem.title_day}</span><span>${forecastItem.title_date}</span></h3>
            <img src="./img/${forecastItem.icon}" alt="${forecastItem.alt}">
            <div class="forecast-temps"><span class="forecast-max forecast-temp">${forecastItem.temp_max}</span><span class="forecast-divider">|</span><span class="forecast-min forecast-temp">${forecastItem.temp_min}</span></div>
          </article>
        </li>`;
}
