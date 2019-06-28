let time;

function startTime(timezone) {
  if (time) {clearInterval(time);}
  time = setInterval(() => showTime(timezone), 1000);
}

function showTime(timezone) {
  var today = new Date();
  var h = formatHour(today.getUTCHours() + timezone);
  var m = today.getMinutes();
  var s = today.getSeconds();
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
}

function formatHour(hour) {
  let formatH;
  formatH = (hour < 0) ? hour + 24 : hour;
  formatH = (hour > 23) ? hour - 24 : hour;
  return formatH;
}

function getBackground(code, timeDiff) {
  let bg;
  let hour = formatHour(new Date().getUTCHours() + timeDiff);
  switch (true) {
    case /^2/.test(code):
      bg = "thunderstorm";
      break;
    case /^3/.test(code):
      bg = "drizzle";
      break;
    case /^5/.test(code):
      bg = "rain";
      break;
    case /^6/.test(code):
      bg = "snow";
      break;
    case /^7/.test(code):
      bg = "mist";
      break;
    case /^800/.test(code):
      if (hour >= 6 && hour < 18) {
        bg = "clear-day";
      } else {
        bg = "clear-night";
      }
      break;
    default:
      if (hour >= 6 && hour < 18) {
        bg = "cloudy-day";
      } else {
        bg = "cloudy-night";
      }
  }
  return "url('./assets/images/" + bg + ".jpg')";
}

function tempScale(kelvin) {
  return Math.round(kelvin - 273.15);
}

function toF() {
  const maxTemp = document.querySelector(".main p:nth-of-type(1)");
  maxTemp.innerHTML = fConversion(maxTemp.innerHTML.split("<span>")[0]) + "<span>°F</span>";
  const medTemp = document.querySelector(".main p:nth-of-type(2)");
  medTemp.innerHTML = fConversion(medTemp.innerHTML.split("<span>")[0]) + "<span>°F</span>";
  medTemp.removeEventListener("click", toF);
  medTemp.addEventListener("click", toC);
  const minTemp = document.querySelector(".main p:nth-of-type(3)");
  minTemp.innerHTML = fConversion(minTemp.innerHTML.split("<span>")[0]) + "<span>°F</span>";
}

function fConversion(celsius) {
  return Math.round(celsius * 9/5 + 32);
}

function toC() {
  const maxTemp = document.querySelector(".main p:nth-of-type(1)");
  maxTemp.innerHTML = cConversion(maxTemp.innerHTML.split("<span>")[0]) + "<span>°C</span>";
  const medTemp = document.querySelector(".main p:nth-of-type(2)");
  medTemp.innerHTML = cConversion(medTemp.innerHTML.split("<span>")[0]) + "<span>°C</span>";
  medTemp.removeEventListener("click", toC);
  medTemp.addEventListener("click", toF);
  const minTemp = document.querySelector(".main p:nth-of-type(3)");
  minTemp.innerHTML = cConversion(minTemp.innerHTML.split("<span>")[0]) + "<span>°C</span>";
}

function cConversion(farenheit) {
  return Math.round((farenheit - 32) * 5/9);
}
