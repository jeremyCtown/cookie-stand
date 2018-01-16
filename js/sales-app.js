'use strict';

var hours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '];

var pike = {
  min: 23,
  max: 65,
  avg: 6.3,
  hourlyCookies: [],

  hourlySales: function() {
    return (Math.floor((Math.random() * (this.max - this.min) + this.min) * this.avg));
  },

  cookiesByHour: function() 

  render: function() {
    var ulEl = document.getElementById('pike');

    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + this.hourlySales() + ' cookies';
      ulEl.appendChild(liEl);
    }
  }
};

pike.render();
/*
var seaTac = {

}

var seattleCenter = {

}

var capHill = {

}

var alki = {

}
*/