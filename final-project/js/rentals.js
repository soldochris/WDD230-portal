const requestURL = 'https://soldochris.github.io/final-project/data/rentals.json';

fetch(requestURL)
  .then(function (respose) {
    return respose.json();
  })
  .then(function (jsonObject) {
    const rentals = jsonObject['rentals'];
    rentals.forEach(rental => {
      let card = document.createElement('div');
      let name = document.createElement('h3');
      let capacity = document.createElement('p');
      let reservation = document.createElement('ul');
      let reservHalf = document.createElement('li');
      let reservFull = document.createElement('li');
      let walkin = document.createElement('ul');
      let walkinHalf = document.createElement('li');
      let walkinFull = document.createElement('li');

      name.textContent = rental.name;
      capacity.textContent = rental.maxPersons;
      reservHalf.textContent = rental.reservation[0].halfDay;
      reservFull.textContent = rental.reservation[0].fullDay;
      walkinHalf.textContent = rental.walkin[0].halfDay;
      walkinFull.textContent = rental.walkin[0].fullDay;

      card.appendChild(name);
      card.appendChild(capacity);
      card.appendChild(reservation);
      reservation.appendChild(reservHalf);
      reservation.appendChild(reservFull);
      card.appendChild(walkin);
      walkin.appendChild(walkinHalf);
      walkin.appendChild(walkinFull);

      document.getElementById('rentalCards').appendChild(card);
    });

  });
