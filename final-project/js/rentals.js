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

      name.textContent = rental.name;
      capacity.textContent = rental.maxPersons;
      reservHalf.textContent = rental.Reservation[0].halfDay;
      reservFull.textContent = rental.Reservation[0].fullDay;

      card.appendChild(name);
      card.appendChild(capacity);
      card.appendChild(reservation);
      reservation.appendChild(reservHalf);
      reservation.appendChild(reservFull);

      document.getElementById('rentalCards').appendChild(card);
    });

  });
