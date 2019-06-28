function showForecast(forecast) {
  document.querySelector("body").style.backgroundImage = getBackground(forecast.weather[0].id, forecast.timezone/3600);

  const local = document.createElement("p");
  local.innerHTML = forecast.name + ", " + forecast.sys.country;
  const clock = document.createElement("p");
  clock.id = "clock";
  const title = document.createElement("div");
  title.appendChild(local);
  title.appendChild(clock);
  const search = document.createElement("i");
  search.className = "search fas fa-search";
  search.addEventListener("click", getForecastForm);

  const head = document.createElement("div");
  head.className = "head";
  head.appendChild(title);
  head.appendChild(search);

  const maxTemp = document.createElement("p");
  maxTemp.innerHTML = tempScale(forecast.main.temp_max) + "<span>°C</span>";
  maxTemp.className = "small-temp";
  const medTemp = document.createElement("p");
  medTemp.innerHTML = tempScale(forecast.main.temp) + "<span>°C</span>";
  medTemp.addEventListener("click", toF);
  const minTemp = document.createElement("p");
  minTemp.innerHTML = tempScale(forecast.main.temp_min) + "<span>°C</span>";
  minTemp.className = "small-temp";
  const icon = document.createElement("img");
  icon.src = "./assets/images/icons/" + forecast.weather[0].icon + ".png";

  const main = document.createElement("div");
  main.className = "main";
  main.appendChild(icon);
  main.appendChild(maxTemp);
  main.appendChild(medTemp);
  main.appendChild(minTemp);

  const cloudsIcon = document.createElement("i");
  cloudsIcon.className = "fab fa-soundcloud";
  const cloudsInfo = document.createElement("p");
  cloudsInfo.innerHTML = forecast.clouds.all + "%";
  const clouds = document.createElement("div");
  clouds.appendChild(cloudsIcon);
  clouds.appendChild(cloudsInfo);

  const umidityIcon = document.createElement("i");
  umidityIcon.className = "fas fa-tint";
  const umidityInfo = document.createElement("p");
  umidityInfo.innerHTML = forecast.main.humidity + "%";
  const umidity = document.createElement("div");
  umidity.appendChild(umidityIcon);
  umidity.appendChild(umidityInfo);

  const pressureIcon = document.createElement("i");
  pressureIcon.className = "fas fa-compress";
  const pressureInfo = document.createElement("p");
  pressureInfo.innerHTML = forecast.main.pressure + " hPa";
  const pressure = document.createElement("div");
  pressure.appendChild(pressureIcon);
  pressure.appendChild(pressureInfo);

  const windIcon = document.createElement("i");
  windIcon.className = "fas fa-wind";
  const windInfo = document.createElement("p");
  windInfo.innerHTML = forecast.wind.speed + " m/s";
  const wind = document.createElement("div");
  wind.appendChild(windIcon);
  wind.appendChild(windInfo);

  const info = document.createElement("div");
  info.className = "info";
  info.appendChild(clouds);
  info.appendChild(umidity);
  info.appendChild(pressure);
  info.appendChild(wind);

  const display = document.querySelector(".display");
  while (display.firstChild) {
    display.removeChild(display.firstChild);
  }
  display.appendChild(head);
  display.appendChild(main);
  display.appendChild(info);

  startTime(forecast.timezone/3600);
}

function showMessage(msg) {
  document.querySelector("body").style.backgroundImage = 'url("./assets/images/default.jpg")';

  const message = document.createElement("p");
  message.innerHTML = msg;
  const search = document.createElement("i");
  search.className = "search fas fa-search";
  search.addEventListener("click", getForecastForm);

  const head = document.createElement("div");
  head.className = "head";
  head.appendChild(message);
  head.appendChild(search);

  const display = document.querySelector(".display");
  while (display.firstChild) {
    display.removeChild(display.firstChild);
  }
  display.appendChild(head);
}
