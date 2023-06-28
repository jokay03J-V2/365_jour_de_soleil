import "./style.css";

const forecastContainer = document.querySelector("#forecasts");
const forecastData = [
  {
    title_day: "lun",
    title_date: "20",
    icon: "sleet.png",
    temp_max: "14",
    temp_min: "10",
  },
  {
    title_day: "lun",
    title_date: "20",
    icon: "chance-storm.png",
    temp_max: "14",
    temp_min: "10",
  },
  {
    title_day: "lun",
    title_date: "20",
    icon: "chance-storm.png",
    temp_max: "14",
    temp_min: "10",
  },
  {
    title_day: "lun",
    title_date: "20",
    icon: "chance-storm.png",
    temp_max: "14",
    temp_min: "10",
  },
  {
    title_day: "lun",
    title_date: "20",
    icon: "chance-storm.png",
    temp_max: "14",
    temp_min: "10",
  },
  {
    title_day: "lun",
    title_date: "20",
    icon: "chance-storm.png",
    temp_max: "14",
    temp_min: "10",
  },
  {
    title_day: "lun",
    title_date: "20",
    icon: "chance-storm.png",
    temp_max: "14",
    temp_min: "10",
  },
  {
    title_day: "lun",
    title_date: "20",
    icon: "chance-storm.png",
    temp_max: "14",
    temp_min: "10",
  },
  {
    title_day: "lun",
    title_date: "20",
    icon: "chance-storm.png",
    temp_max: "14",
    temp_min: "10",
  },
  {
    title_day: "lun",
    title_date: "20",
    icon: "chance-storm.png",
    temp_max: "14",
    temp_min: "10",
  },
];

for (const forecastItem of forecastData) {
  forecastContainer.innerHTML += `        <li class="forecast-item">
          <article>
            <h3><span>${forecastItem.title_day}</span><span>${forecastItem.title_date}</span></h3>
            <img src="./img/${forecastItem.icon}" alt="blizzard">
            <div class="forecast-temps"><span class="forecast-max forecast-temp">${forecastItem.temp_max}</span><span class="forecast-divider">|</span><span class="forecast-min forecast-temp">${forecastItem.temp_min}</span></div>
          </article>
        </li>`;
}
