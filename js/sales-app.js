'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];
var dailyStoreSales = document.getElementById('dailyStoreSales');
var newStoreForm = document.getElementById('newStore');
var allStores = [];
var sumOfSales = [];

function makeHeaderRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Location';
  trEl.appendChild(thEl);

  for (var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  dailyStoreSales.appendChild(trEl);
}

function StoreSales(location, minCustomers, maxCustomers, avgCookiesPerCustomer) {
  this.location = location;
  this.minCustomers = parseInt(minCustomers);
  this.maxCustomers = parseInt(maxCustomers);
  this.avgCookiesPerCustomer = parseInt(avgCookiesPerCustomer);
  allStores.push(this);

}

StoreSales.prototype.render = function() {

  this.hourlyCookies = function () {
    return Math.round((Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers)) * this.avgCookiesPerCustomer);
  };

  this.cookieSales = function () {
    var salesByHour = [];
    var totalCookies = 0;
    for(var i = 0 ; i < hours.length ; i++) {
      if(i === (hours.length - 1)) {
        salesByHour[i] = totalCookies;
        sumOfSales.push(salesByHour[i]);
      } else {
        salesByHour.push(this.hourlyCookies());
        totalCookies += parseInt(salesByHour[i]);
      }
    }
    return salesByHour;
  };

  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.location;
  trEl.appendChild(tdEl);
  dailyStoreSales.appendChild(trEl);

  var dailyCookies = this.cookieSales();
  for (var i = 0; i < hours.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = dailyCookies[i];
    trEl.appendChild(tdEl);
  }
  dailyStoreSales.appendChild(trEl);
};

function makeFooterRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('td');
  thEl.textContent = 'Total';
  trEl.appendChild(thEl);

  for (var i = 0; i < hours.length; i++) {
    thEl = document.createElement('td');
    thEl.textContent = sumOfSales[i];
    console.log(sumOfSales);
    trEl.appendChild(thEl);
  }
  dailyStoreSales.appendChild(trEl);
}

function renderAllStores() {
  for (var i in allStores) {
    allStores[i].render();
  }
}

function addNewStore(event) {
  event.preventDefault();
  console.log('New Store: ' + event.target.newStoreName.value + ' ' + event.target.newMin.value + ', ' + event.target.newMax.value + ', ' + event.target.newAvg.value);
  var newLocation = event.target.newStoreName.value;
  var newMin = event.target.newMin.value;
  var newMax = event.target.newMax.value;
  var newAvg = event.target.newAvg.value;

  new StoreSales(newLocation, newMin, newMax, newAvg);



  dailyStoreSales.innerHTML = '';
  makeHeaderRow();
  renderAllStores();
  makeFooterRow();
}

var pikePlace = new StoreSales('Pike Place', 23, 65, 6.3);
var seattleCenter = new StoreSales('Seattle Center', 11, 38, 3.7);
var capHill = new StoreSales('Capitol Hill', 20, 38, 2.3);
var alki = new StoreSales('Alki Beach', 2, 16, 4.6);
var seaTac = new StoreSales('SeaTac Airport', 3, 24, 1.2);

newStoreForm.addEventListener('submit', addNewStore);

makeHeaderRow();
renderAllStores();
makeFooterRow();













/*
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
      console.log ('Pike Sales @ ' + hours[i] + dailyCookies[i]); //logs hours and numbers into the console
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
        salesByHour[i] = totalCookies + ' cookies'; 
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
*/