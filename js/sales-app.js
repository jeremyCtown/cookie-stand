'use strict';

var hours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ', 'Total: '];

var pike = {
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiesPerCustomer: 6.3,

  hourlyCookies: function() { //this generates a random number of customers per hour and multiplies it by the average number of cookies
    return Math.round((Math.floor((Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers))) * this.avgCookiesPerCustomer) + ' cookies';
  },

  cookieSales: function () {
    var salesByHour = [];
    var totalCookies = 0;
    for(var i = 0 ; i < hours.length ; i++) {
      if(i === (hours.length - 1)) { //this is for last item in array
        salesByHour[i] = totalCookies + ' cookies';
      } else { //this runs until we get to last element
        salesByHour[i] = this.hourlyCookies(); //this adds values to 'salesByHour'
        totalCookies += parseInt(salesByHour[i]);
      }
    }
    return salesByHour;
  },

  render: function() {
    var ulEl = document.getElementById('pike');
    var todaySales = this.cookieSales();
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + todaySales[i];
      console.log (hours[i] + todaySales[i]);
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