const requestURL = 'https://soldochris.github.io/final-project/data/rentals.json';

fetch(requestURL)
  .then(function (respose) {
    return respose.json();
  })
  .then(function (jsonObject) {
    const rentals = jsonObject['rentals'];
    console.log(rentals);

  });
