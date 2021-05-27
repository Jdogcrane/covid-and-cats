var gifKey = "KISAUxVEoSojC461QWS5Qdgd1ZGxaUE5";
var usaUrl = "https://disease.sh/v3/covid-19/countries/usa";
var gifUrl = `https://api.giphy.com/v1/gifs/search?q=cats&api_key=${gifKey}`

var usaTitleEl = document.querySelector('#usaTitle');
var usaTotalEl = document.querySelector('#usaTotal');
var usaActiveEl = document.querySelector('#usaActive');
var usaHospitalEl = document.querySelector('#usaHospital');
var usaDeathEl = document.querySelector('#usaDeath');
var stateTitleEl = document.querySelector('#stateTitle');
var stateTotalEl = document.querySelector('#stateTotal');
var stateActiveEl = document.querySelector('#stateActive');
var stateHospitalEl = document.querySelector('#stateHospital');
var stateDeathEl = document.querySelector('#stateDeath');
var searchBtnEl = document.querySelector('#searchBtn');
var input = document.querySelector('#stateInput');

var sideNav = document.querySelector('.sidenav');
// Side nav needs to be capitalized for some reason..
M.Sidenav.init(sideNav, {})

var searchBtnHandler = function (event) {
    event.preventDefault();
    
    var state = input.value.trim();
    
    if (state) {
        getState(state);
        input.value = '';
    } else {
        return;
    }
    
};

var getState = (function (state) {
    var stateUrl = `https://disease.sh/v3/covid-19/states/${state}`;

    fetch(stateUrl)
        .then(function (response) {
            return response.json();
        }).then(function (stateData) {
            console.log(stateData);
            displayState(stateData);
        })
        
        
    })
    
var displayState = (function (data) {
    
    var stateTitle = data.state;
    var stateTotal = data.cases;
    var stateActive = data.active;
    var stateHospital = data.recovered;
    var stateDeath = data.deaths;

    stateTitleEl.textContent = "State: " + stateTitle;
    stateTotalEl.textContent = "Total Cases: " + stateTotal;
    stateActiveEl.textContent = "Active Cases: " + stateActive;
    stateHospitalEl.textContent = "Recovered: " +stateHospital;
    stateDeathEl.textContent = "Deaths: " + stateDeath;
})    

fetch(usaUrl)
    .then(function (response) {
        return response.json();
    }).then(function (usaData) {
        console.log(usaData);
    })


fetch(gifUrl)
    .then(function (response) {
        return response.json();
    }).then(function (gifData) {
        console.log(gifData);
    })

searchBtn.addEventListener('click', searchBtnHandler);