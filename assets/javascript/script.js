var usaUrl = "https://disease.sh/v3/covid-19/countries/usa";
var stateUrl = "https://disease.sh/v3/covid-19/states/North%20Carolina";

fetch(usaUrl)
    .then (function (response) {
        return response.json;
    }) .then(function (usaData) {
        console.log(usaData);
    })

fetch(stateUrl)
    .then(function (response){
        return response.json;
    }) .then(function (stateData) {
        console.log(stateData);
    })