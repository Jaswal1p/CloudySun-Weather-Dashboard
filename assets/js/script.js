const cityNameInput = document.querySelector("#city-name");
const searchForm = document.querySelector("#search-form");
const currentConditionsUl = document.querySelector("#current-forecast #conditions");
const currentConditionsH3 = document.querySelector("#current-forecast h3");
const previousSearches = document.querySelector("#previous-searches");
const previousSearchContainer = document.querySelector("#previous-searches .card-body");
const dailyCardContainer = document.querySelector("#daily-forecast");
const fiveDayHeader = document.querySelector("#five-day");

// Declares localCityArray in global variable
const localCityArray = [];