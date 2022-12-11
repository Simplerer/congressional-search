var button = document.querySelector('.btn')


button.addEventListener('click', function() {
var requestURL = 'https://www.loc.gov/' + format + '/?q=' + q + '&fo=json'
var q = document.querySelector('#search');
var format = document.querySelector('.form-select');

console.log(q, format)

    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
        })
        .catch(function(error) {
            console.log(error)
        });
})    




