const accessKey = "_5J1jUjajOEDtiXFHTpxIuj8Yc4jk89zdDlMFSYSpNk";
const weather = "492c7acf3812babf00deaccae17f1951";
const city = "Zaporizhia"
const img = document.querySelector("img");
let images = document.querySelector(".gallery__content");
async function fetchImage() {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=music&client_id=${accessKey}`
  );
  const data = await response.json();

  for (let i = 0; i < data.results.length; i++) {
    images.innerHTML += `<img class="gallery__image" src="${data.results[i].links.download}">` 
  }
}

async function fetchWeather() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weather}&units=metric`
  );
	const data = await response.json();
	console.log(response);
	console.log(data);
	  console.log(`Weather in ${data.name}: ${data.weather[0].description}`);
  console.log(`Temperature: ${data.main.temp}°C`);
}


fetchImage();
// fetchWeather();

