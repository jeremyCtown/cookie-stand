'use strict';

var hours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '] 

var pike = {
  
  render: function() {
    var ulEl = document.getElementById('pike');

    for (var i = 0; i < hours.length; i++) {
      var hourlySales = Math.floor(Math.random() * (66 - 23) + 23);
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + hourlySales + ' cookies';
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: cookies';
    ulEl.appendChild(liEl);
  }
};

pike.render();

var seaTac = {

}

var seattleCenter = {

}

var capHill = {

}

var alki = {

}