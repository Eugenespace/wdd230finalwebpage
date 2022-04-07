// 3 days forecast

const weatherURL =
  "https://api.openweathermap.org/data/2.5/forecast?lat=5.5571096&lon=-0.2012376&appid=711fe49e37cbe5b266a5f38ba8238bbb";
fetch(weatherURL)
  .then((response) => response.json())
  .then((jsonObject) => {
    // Day 1
    const day_one = jsonObject.list[6].dt_txt;
    const weather_one = new Date(day_one);
    // Image for day1
    const image_day_one =
      "https://openweathermap.org/img/wn/" +
      jsonObject.list[6].weather[0].icon +
      "@2x.png";
  
    const temp_day_one = jsonObject.list[6].main.temp;

    // Day 2
    const day_two = jsonObject.list[14].dt_txt;
    const weather_two = new Date(day_two);
    // Image for day2
    const image_day_two =
      "https://openweathermap.org/img/wn/" +
      jsonObject.list[14].weather[0].icon +
      "@2x.png";
    //  temperature
    const temp_day_two = jsonObject.list[14].main.temp;

    // Day 3
    const day_three = jsonObject.list[22].dt_txt;
    const weather_three = new Date(day_three);
    // Image for day3
    const image_day_three =
      "https://openweathermap.org/img/wn/" +
      jsonObject.list[22].weather[0].icon +
      "@2x.png";
    // temperature
    const temp_day_three = jsonObject.list[22].main.temp;

    // Array list for days of the week but only three forecast
    const weekdays = new Array(7);
    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";

    // Day 1
    const day1 = weekdays[weather_one.getDay()];
    document.getElementById("day_one").textContent = day1;
    document.getElementById("icon_day_one").setAttribute("src", image_day_one);
    document.getElementById("icon_day_one").setAttribute("alt", day1);

    document.getElementById("temp_day_one").textContent =
      Math.round(1.8 * (temp_day_one - 273) + 32) + "˚F";

    // Day 2
    const day2 = weekdays[weather_two.getDay()];
    document.getElementById("day_two").textContent = day2;
    document.getElementById("icon_day_two").setAttribute("src", image_day_two);
    document.getElementById("icon_day_two").setAttribute("alt", day2);

    document.getElementById("temp_day_two").textContent =
      Math.round(1.8 * (temp_day_two - 273) + 32) + "˚F";

    // Day 3
    const day3 = weekdays[weather_three.getDay()];
    document.getElementById("day_three").textContent = day3;
    document
      .getElementById("icon_day_three")
      .setAttribute("src", image_day_three);
    document.getElementById("icon_day_three").setAttribute("alt", day3);

    document.getElementById("temp_day_three").textContent =
      Math.round(1.8 * (temp_day_three - 273) + 32) + "˚F";
  })
  .catch((err) =>
    console.log("Error message from openweather api: ", err.message)
  );
