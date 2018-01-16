'use strict';

var hours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ', 'Total: '];

var pike = {
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiesPerCustomer: 6.3,

  hourlyCookies: function() { //this generates a random number of customers per hour and multiplies it by the average number of cookies
    return Math.round((Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers)) * this.avgCookiesPerCustomer) + ' cookies';
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
    var dailyCookies = this.cookieSales();
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + dailyCookies[i];
      console.log ('Pike Sales @ ' + hours[i] + dailyCookies[i]); //logs hours and numebrs into the console
      ulEl.appendChild(liEl);
    }
  }
};

var seaTac = {
  minCustomers: 3,
  maxCustomers: 24,
  avgCookiesPerCustomer: 1.2,

  hourlyCookies: function() {
    return Math.round((Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers)) * this.avgCookiesPerCustomer) + ' cookies';
  },

  cookieSales: function() {
    var salesByHour = [];
    var totalCookies = 0;
    for(var i = 0; i < hours.length; i++) {
      if(i === (hours.length - 1)) {
        salesByHour[i] = totalCookies + ' cookies';
      } else {
        salesByHour[i] = this.hourlyCookies();
        totalCookies += parseInt(salesByHour[i]);
      }
    }
    return salesByHour;
  },
  
  render: function() {
    var ulEl = document.getElementById('seaTac');
    var dailyCookies = this.cookieSales();
    for(var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + dailyCookies[i];
      console.log('Seatac Sales @' + hours[i] + dailyCookies[i]);
      ulEl.appendChild(liEl);
    }
  }
};

var seattleCenter = {
  minCustomers: 11,
  maxCustomers: 38,
  avgCookiesPerCustomer: 3.7,

  hourlyCookies: function() {
    return Math.round((Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers)) * this.avgCookiesPerCustomer) + ' cookies';
  },

  cookieSales: function() {
    var salesByHour = [];
    var totalCookies = 0;
    for(var i = 0; i < hours.length; i++) {
      if(i === (hours.length - 1)) {
        salesByHour[i] = totalCookies + ' cookies';
      } else {
        salesByHour[i] = this.hourlyCookies();
        totalCookies += parseInt(salesByHour[i]);
      }
    }
    return salesByHour;
  },

  render: function() {
    var ulEl = document.getElementById('seattleCenter');
    var dailyCookies = this.cookieSales();
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + dailyCookies[i];
      console.log('Seattle Center @ ' + hours[i] + dailyCookies [i]);
      ulEl.appendChild(liEl);
    }
  }
};

var capHill = {
  minCustomers: 20,
  maxCustomers: 38,
  avgCookiesPerCustomer: 2.3,
  
  hourlyCookies: function() {
    return Math.round((Math.floor(Math.random() * ((this.maxCustomers - this.minCustomers + 1) + this.minCustomers))) * this.avgCookiesPerCustomer) + ' cookies';
  },

  cookieSales: function() {
    var salesByHour = [];
    var totalCookies = 0;
    for(var i = 0; i < hours.length; i++) {
      if(i === (hours.length - 1)) {
        salesByHour[i] = totalCookies + ' cookies';
      } else {
        salesByHour[i] = this.hourlyCookies();
        totalCookies += parseInt(salesByHour[i]);
      }
    }
    return salesByHour;
  },

  render: function() {
    var ulEl = document.getElementById('capHill');
    var dailyCookies = this.cookieSales();
    for(var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + dailyCookies[i];
      console.log('Capitol Hill @ ' + hours[i] + dailyCookies[i]);
      ulEl.appendChild(liEl);
    }
  }
};

var alki = {
  minCustomers: 2,
  maxCustomers: 16,
  avgCookiesPerCustomer: 4.6,
  
  hourlyCookies: function() {
    return Math.round((Math.floor(Math.random() * ((this.maxCustomers - this.minCustomers) - 1) + this.minCustomers)) * this.avgCookiesPerCustomer) + ' cookies';
  },

  cookieSales: function() {
    var salesByHour = [];
    var totalCookies = 0;
    for(var i = 0; i < hours.length; i++) {
      if(i === (hours.length - 1)) {
        salesByHour[i] = totalCookies[i] + ' cookies'; 
      } else {
        salesByHour[i] = this.hourlyCookies();
        totalCookies += parseInt(salesByHour[i]);
      }
    }
    return salesByHour;
  },

  render: function() {
    var ulEl = document.getElementById('alki');
    var dailyCookies = this.cookieSales();
    for(var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + dailyCookies[i];
      console.log('Alki @ ' + hours[i] + dailyCookies[i]);
      ulEl.appendChild(liEl);
    }
  }
};


pike.render();
seaTac.render();
seattleCenter.render();
capHill.render();
alki.render();