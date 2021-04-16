"use stric";

// let Key = 'e6297ad1e1f3b7a35b749ff2967e9270';
// const inputForm = document.querySelector('.inputCity');
// const getResults = document.querySelector('.formBtn');

// getResults.addEventListener('click', function (event) {
// 	event.preventDefault;
// 	checkResults(inputForm.value);
// });

// function checkResults(ciudad) {
// 	fetch(
// 		`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${Key}`
// 	)
// 		// first then () --> access to JSON file(parse it)
// 		.then((weather) => {
// 			return weather.json();
// 		})
// 		.then(function Results(numOne) {
// 			let ciudad = document.querySelector('.result .city');
// 			ciudad.innerText = `${myArgument.name}`;
// let country = document.querySelector('.result .country');
// country.innerHTML = `, ${myArgument.sys.country}`;
// 			let temperature = document.querySelector('.resault .temperature');
// 			temperature.innerHTML = `${(numOne.main.temp - 273.15).toFixed(
// 				0
// 			)}<span>°c</span>`;
// 			let weather = document.querySelector('.current .weather');

// 			weather.innerHTML = arg1.weather[0].main;
// 			let highLow = document.querySelector('.resault .min-max');
// 			highLow.innerHTML = `${(numOne.main.temp_min - 273.15).toFixed(0)}°c / ${(
// 				arg1.main.temp_max - 273.15
// 			).toFixed(0)}°c`;
// 			let sky = document.querySelector('.resault .sky');
// 			sky.innerHTML = `${numOne.main.clouds}`;
// 		});
// }

let myKey = "e6297ad1e1f3b7a35b749ff2967e9270";
let showWeather = document.querySelector(".formBtn");
let inputCity = document.querySelector(".inputCity");
showWeather.addEventListener("click", function (eventForm) {
  eventForm.preventDefault();
  getDataFromApi(inputCity.value);

  function getDataFromApi(city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${myKey}`
    )
      .then((weather) => {
        return weather.json();
      })
      .then(function display(myArgument) {
        let city = document.querySelector(".result .city");
        city.innerHTML = `${myArgument.name}`;
        let country = document.querySelector(".result .country");
        country.innerHTML = `, ${myArgument.sys.country}`;
        let temp = document.querySelector(".result .temprature");
        temp.innerHTML = `${myArgument.main.temp.toFixed(0)}°c`;
        let sky = document.querySelector(".result .sky");
        sky.innerHTML = `${myArgument.weather[0].main}`;
        let minMax = document.querySelector(".result .min-max");
        minMax.innerHTML = `${myArgument.main.temp_min.toFixed(
          0
        )}°c /  ${myArgument.main.temp_max.toFixed(0)}°c`;
      })
      .catch(function () {
        alert("Please type valid city name!!");
      });
  }
});
