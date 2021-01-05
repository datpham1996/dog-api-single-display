'use strict'

function getDogs(dogBreed) {
  const url = 'https://dog.ceo/api/breed/' + dogBreed + '/images/random'
  fetch(url)
    .then(response => response.json())
    .then(responseJson => displayDogSearchData(responseJson))
    .catch(error => 'Something went wrong. Try again later.');
};

function listenToInput(event) {
  $('form').submit(event => {
    event.preventDefault();
    let dogBreed = $('option').val();
    getDogs(dogBreed);
  });
}

function displayDogSearchData(responseJson) {
  console.log(responseJson)
  $('.js-image').html(`<img src="${responseJson.message}" class="dog-image" alt="Random Dog Picture">`);
  };

$(listenToInput);