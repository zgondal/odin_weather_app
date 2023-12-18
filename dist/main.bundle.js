(self["webpackChunkodin_weather_app"] = self["webpackChunkodin_weather_app"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

const API_KEY = "99bebd2d0d754532ba291255231112";
const QUERY = "http://api.weatherapi.com/v1/current.json";
const searchButton = document.getElementById("search");
let location = document.getElementById("location").value;
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
      localTime: json.location.localtime
    },
    weather: {
      temp_c: json.current.temp_c,
      temp_f: json.current.temp_f,
      condition: {
        text: json.current.condition.text,
        icon: json.current.condition.icon,
        code: json.current.condition.code
      }
    }
  };
  return data;
}
searchButton.addEventListener("click", async () => {
  location = document.getElementById("location").value;
  url = `${QUERY}?key=${API_KEY}&q=${location}`;
  let responseJson = await queryAPI(url);
  let data = parseJson(responseJson);
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxNQUFNQSxPQUFPLEdBQUcsZ0NBQWdDO0FBQ2hELE1BQU1DLEtBQUssR0FBRywyQ0FBMkM7QUFDekQsTUFBTUMsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxRQUFRLENBQUM7QUFDdEQsSUFBSUMsUUFBUSxHQUFHRixRQUFRLENBQUNDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQ0UsS0FBSztBQUN4RCxJQUFJQyxHQUFHLEdBQUksR0FBRU4sS0FBTSxRQUFPRCxPQUFRLE1BQUtLLFFBQVMsRUFBQztBQUVqRCxlQUFlRyxRQUFRQSxDQUFDRCxHQUFHLEVBQUU7RUFDM0IsTUFBTUUsT0FBTyxHQUFHLE1BQU1DLEtBQUssQ0FBQ0gsR0FBRyxDQUFDO0VBQ2hDLE9BQU8sTUFBTUUsT0FBTyxDQUFDRSxJQUFJLENBQUMsQ0FBQztBQUM3QjtBQUVBLFNBQVNDLFNBQVNBLENBQUNELElBQUksRUFBRTtFQUN2QixNQUFNRSxJQUFJLEdBQUc7SUFDWFIsUUFBUSxFQUFFO01BQ1JTLElBQUksRUFBRUgsSUFBSSxDQUFDTixRQUFRLENBQUNVLElBQUk7TUFDeEJDLE1BQU0sRUFBRUwsSUFBSSxDQUFDTixRQUFRLENBQUNXLE1BQU07TUFDNUJDLE9BQU8sRUFBRU4sSUFBSSxDQUFDTixRQUFRLENBQUNZLE9BQU87TUFDOUJDLFNBQVMsRUFBRVAsSUFBSSxDQUFDTixRQUFRLENBQUNjO0lBQzNCLENBQUM7SUFDREMsT0FBTyxFQUFFO01BQ1BDLE1BQU0sRUFBRVYsSUFBSSxDQUFDVyxPQUFPLENBQUNELE1BQU07TUFDM0JFLE1BQU0sRUFBRVosSUFBSSxDQUFDVyxPQUFPLENBQUNDLE1BQU07TUFDM0JDLFNBQVMsRUFBRTtRQUNUQyxJQUFJLEVBQUVkLElBQUksQ0FBQ1csT0FBTyxDQUFDRSxTQUFTLENBQUNDLElBQUk7UUFDakNDLElBQUksRUFBRWYsSUFBSSxDQUFDVyxPQUFPLENBQUNFLFNBQVMsQ0FBQ0UsSUFBSTtRQUNqQ0MsSUFBSSxFQUFFaEIsSUFBSSxDQUFDVyxPQUFPLENBQUNFLFNBQVMsQ0FBQ0c7TUFDL0I7SUFDRjtFQUNGLENBQUM7RUFDRCxPQUFPZCxJQUFJO0FBQ2I7QUFFQVgsWUFBWSxDQUFDMEIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVk7RUFDakR2QixRQUFRLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDRSxLQUFLO0VBQ3BEQyxHQUFHLEdBQUksR0FBRU4sS0FBTSxRQUFPRCxPQUFRLE1BQUtLLFFBQVMsRUFBQztFQUM3QyxJQUFJd0IsWUFBWSxHQUFHLE1BQU1yQixRQUFRLENBQUNELEdBQUcsQ0FBQztFQUN0QyxJQUFJTSxJQUFJLEdBQUdELFNBQVMsQ0FBQ2lCLFlBQVksQ0FBQztBQUNwQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluX3dlYXRoZXJfYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFQSV9LRVkgPSBcIjk5YmViZDJkMGQ3NTQ1MzJiYTI5MTI1NTIzMTExMlwiO1xuY29uc3QgUVVFUlkgPSBcImh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uXCI7XG5jb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaFwiKTtcbmxldCBsb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jYXRpb25cIikudmFsdWU7XG5sZXQgdXJsID0gYCR7UVVFUll9P2tleT0ke0FQSV9LRVl9JnE9JHtsb2NhdGlvbn1gO1xuXG5hc3luYyBmdW5jdGlvbiBxdWVyeUFQSSh1cmwpIHtcbiAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKHVybCk7XG4gIHJldHVybiBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VKc29uKGpzb24pIHtcbiAgY29uc3QgZGF0YSA9IHtcbiAgICBsb2NhdGlvbjoge1xuICAgICAgY2l0eToganNvbi5sb2NhdGlvbi5uYW1lLFxuICAgICAgcmVnaW9uOiBqc29uLmxvY2F0aW9uLnJlZ2lvbixcbiAgICAgIGNvdW50cnk6IGpzb24ubG9jYXRpb24uY291bnRyeSxcbiAgICAgIGxvY2FsVGltZToganNvbi5sb2NhdGlvbi5sb2NhbHRpbWUsXG4gICAgfSxcbiAgICB3ZWF0aGVyOiB7XG4gICAgICB0ZW1wX2M6IGpzb24uY3VycmVudC50ZW1wX2MsXG4gICAgICB0ZW1wX2Y6IGpzb24uY3VycmVudC50ZW1wX2YsXG4gICAgICBjb25kaXRpb246IHtcbiAgICAgICAgdGV4dDoganNvbi5jdXJyZW50LmNvbmRpdGlvbi50ZXh0LFxuICAgICAgICBpY29uOiBqc29uLmN1cnJlbnQuY29uZGl0aW9uLmljb24sXG4gICAgICAgIGNvZGU6IGpzb24uY3VycmVudC5jb25kaXRpb24uY29kZSxcbiAgICAgIH0sXG4gICAgfVxuICB9O1xuICByZXR1cm4gZGF0YTtcbn1cblxuc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG4gIGxvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhdGlvblwiKS52YWx1ZTtcbiAgdXJsID0gYCR7UVVFUll9P2tleT0ke0FQSV9LRVl9JnE9JHtsb2NhdGlvbn1gO1xuICBsZXQgcmVzcG9uc2VKc29uID0gYXdhaXQgcXVlcnlBUEkodXJsKTtcbiAgbGV0IGRhdGEgPSBwYXJzZUpzb24ocmVzcG9uc2VKc29uKTtcbn0pOyJdLCJuYW1lcyI6WyJBUElfS0VZIiwiUVVFUlkiLCJzZWFyY2hCdXR0b24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibG9jYXRpb24iLCJ2YWx1ZSIsInVybCIsInF1ZXJ5QVBJIiwicmVxdWVzdCIsImZldGNoIiwianNvbiIsInBhcnNlSnNvbiIsImRhdGEiLCJjaXR5IiwibmFtZSIsInJlZ2lvbiIsImNvdW50cnkiLCJsb2NhbFRpbWUiLCJsb2NhbHRpbWUiLCJ3ZWF0aGVyIiwidGVtcF9jIiwiY3VycmVudCIsInRlbXBfZiIsImNvbmRpdGlvbiIsInRleHQiLCJpY29uIiwiY29kZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXNwb25zZUpzb24iXSwic291cmNlUm9vdCI6IiJ9