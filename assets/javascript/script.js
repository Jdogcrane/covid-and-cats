var gifKey = "KISAUxVEoSojC461QWS5Qdgd1ZGxaUE5";
var usaUrl = "https://disease.sh/v3/covid-19/countries/usa";
var gifUrl = `https://api.giphy.com/v1/gifs/search?q=cats&api_key=${gifKey}`

// var usaTitleEl = document.querySelector('#usaTitle');
// var usaTotalEl = document.querySelector('#usaTotal');
// var usaActiveEl = document.querySelector('#usaActive');
// var usaRecoveredEl = document.querySelector('#usaRecovered');
// var usaDeathEl = document.querySelector('#usaDeath');
// var stateTitleEl = document.querySelector('#stateTitle');
// var stateTotalEl = document.querySelector('#stateTotal');
// var stateActiveEl = document.querySelector('#stateActive');
// var stateRecoveredEl = document.querySelector('#stateRecovered');
// var stateDeathEl = document.querySelector('#stateDeath');
// var searchBtnEl = document.querySelector('#searchBtn');
// var input = document.querySelector('#stateInput');

var sideNav = document.querySelector('.sidenav');
// Side nav needs to be capitalized for some reason..
M.Sidenav.init(sideNav, {})

var slider = document.querySelector('.slider')
M.Slider.init(slider, {
indicators: false,
height: 600,
width: 200,
transition: 500,
interval: 6000

});

// var searchBtnHandler = function (event) {
//     event.preventDefault();
    
//     var state = input.value.trim();
    
//     if (state) {
//         getState(state);
//         input.value = '';
//     } else {
//         return;
//     }
    
// };

// var getState = (function (state) {
//     var stateUrl = `https://disease.sh/v3/covid-19/states/${state}`;

//     fetch(stateUrl)
//         .then(function (response) {
//             return response.json();
//         }).then(function (stateData) {
//             console.log(stateData);
//             displayState(stateData);
//         })
        
        
//     })
    
// var displayState = (function (data) {
    
//     var stateTitle = data.state;
//     var stateTotal = data.cases;
//     var stateActive = data.active;
//     var stateRecovered = data.recovered;
//     var stateDeath = data.deaths;

//     stateTitleEl.textContent = "State: " + stateTitle;
//     stateTotalEl.textContent = "Total Cases: " + stateTotal;
//     stateActiveEl.textContent = "Active Cases: " + stateActive;
//     stateRecoveredEl.textContent = "Recovered: " +stateRecovered;
//     stateDeathEl.textContent = "Deaths: " + stateDeath;
// })    

// var displayUSA = (function (country) {

//     var usaTitle = country.country;
//     var usaTotal = country.cases;
//     var usaActive = country.active;
//     var usaRecovered = country.recovered;
//     var usaDeath = country.deaths;

//     usaTitleEl.textContent = "State: " + usaTitle;
//     usaTotalEl.textContent = "Total Cases: " + usaTotal;
//     usaActiveEl.textContent = "Active Cases: " + usaActive;
//     usaRecoveredEl.textContent = "Recovered: " +usaRecovered;
//     usaDeathEl.textContent = "Deaths: " + usaDeath;
// })

fetch(usaUrl)
    .then(function (response) {
        return response.json();
    }).then(function (usaData) {
        console.log(usaData);
        // displayUSA(usaData);
    })


fetch(gifUrl)
    .then(function (response) {
        return response.json();
    }).then(function (gifData) {
        // displayCats(gifData);
    })

// var displayCats = function(cats) {
//     console.log(cats);

//     var catsGif = cats.data[0].url;
//     console.log(catsGif);
// }
// searchBtn.addEventListener('click', searchBtnHandler);