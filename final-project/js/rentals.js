const requestURL = '/data/rentals.json';

fetch(requestURL)
  .then(function (respose) {
    return respose.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    //const prophets = jsonObject['prophets'];

  });
