const API_KEY = "99bebd2d0d754532ba291255231112";
const QUERY = "http://api.weatherapi.com/v1/current.json";
const searchButton = document.getElementById("search");
const icon = document.querySelector(".icon");
const temp = document.querySelector(".temp");
const location = document.querySelector(".location");
const condition = document.querySelector(".condition");
const container = document.querySelector(".container");
let searchLocation = document.getElementById("location").value;
let url = `${QUERY}?key=${API_KEY}&q=${location}`;

async function queryAPI(url) {
  const request = await fetch(url);
  return await request.json();
}

function parseJson(json) {
  const data = {
    location: {
      city: json.location.name,
      region: json.location.region,
      country: json.location.country,
      localTime: json.location.localtime,
    },
    weather: {
      temp_c: json.current.temp_c,
      temp_f: json.current.temp_f,
      condition: {
        text: json.current.condition.text,
        icon: json.current.condition.icon,
        code: json.current.condition.code,
      },
    }
  };
  return data;
}

searchButton.addEventListener("click", () => {
  searchLocation = document.getElementById("location").value;
  url = `${QUERY}?key=${API_KEY}&q=${searchLocation}`;
  let responseJson = queryAPI(url);
  console.log(typeof(responseJson));
  responseJson.then(response => {
    let data = parseJson(response);
  
    icon.setAttribute("src", data.weather.condition.icon);
    temp.textContent = `${data.weather.temp_c}°C`;
    location.textContent = `
      ${data.location.city}, 
      ${data.location.region}, 
      ${data.location.country}`;
    condition.textContent = data.weather.condition.text;
    container.style.display = "inline-block";
    console.log(`Executed code inside resolution of responseJson`);
  })
  
});