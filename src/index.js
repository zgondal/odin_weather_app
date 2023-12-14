const API_KEY = "99bebd2d0d754532ba291255231112";
const QUERY = "http://api.weatherapi.com/v1/current.json";
const searchButton = document.getElementById("search");
let location = document.getElementById("location").value;
let url = `${QUERY}?key=${API_KEY}&q=${location}`;

async function queryAPI(url) {
  const request = await fetch(url);
  const response = await request.json();
  console.log(response);
}

searchButton.addEventListener("click", () => {
  url = `${QUERY}?key=${API_KEY}&q=${location}`;
  queryAPI(url);
})