const accessKey = "_5J1jUjajOEDtiXFHTpxIuj8Yc4jk89zdDlMFSYSpNk";
const search = ["music", "guitar", "piano", "violin", "flute"];
const img = document.querySelector("img");
let images = document.querySelector(".gallery__content");
async function fetchImage(search) {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${search}&client_id=${accessKey}`
  );
  const data = await response.json();


  for (let i = 0; i < data.results.length; i++) {
    images.innerHTML += `<img class="gallery__image" src="${data.results[i].links.download}">` 
  }
}



search.forEach((item)=>{
  fetchImage(item);
});

