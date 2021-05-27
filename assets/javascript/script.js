var usaUrl = "https://disease.sh/v3/covid-19/countries/usa";
var stateUrl = `https://disease.sh//v3/covid-19/states/${state}`;

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


fetch(usaUrl)
    .then(function (response) {
        return response.json();
    }).then(function (usaData) {
        console.log(usaData);
    })

fetch(stateUrl)
    .then(function (response) {
        return response.json();
    }).then(function (stateData) {
        console.log(stateData);
    })

// searchBtn.addEventListener('click', searchBtnHandler);