var gifKey = "KISAUxVEoSojC461QWS5Qdgd1ZGxaUE5";
var usaUrl = "https://disease.sh/v3/covid-19/countries/usa";
// var stateUrl = `https://disease.sh//v3/covid-19/states/${state}`;
var gifUrl= `https://api.giphy.com/v1/gifs/search?q=cats&api_key=${gifKey}`

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

// fetch(stateUrl)
//     .then(function (response) {
//         return response.json();
//     }).then(function (stateData) {
//         console.log(stateData);
//     })

    fetch(gifUrl)
    .then(function (response) {
        return response.json();
    }).then(function (gifData) {
        console.log(gifData);
    })
    
// searchBtn.addEventListener('click', searchBtnHandler);