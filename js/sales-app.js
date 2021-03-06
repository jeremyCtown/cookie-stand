'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var dailyStoreSales = document.getElementById('dailyStoreSales');
var newStoreForm = document.getElementById('newStore');

function StoreSales(location, minCustomers, maxCustomers, avgCookiesPerCustomer) {
  this.location = location;
  this.minCustomers = parseFloat(minCustomers);
  this.maxCustomers = parseFloat(maxCustomers);
  this.avgCookiesPerCustomer = parseFloat(avgCookiesPerCustomer);
  this.customersPerHour = [];
  this.salesPerHour = [];
  this.totalDailyCookies = 0;
  allStores.push(this);
}

var allStores = [];

StoreSales.prototype.hourlyCookies = function () {
  for(var i in hours) {
    var cookieTime = Math.floor((Math.floor  (Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers)) * this.avgCookiesPerCustomer);
    this.salesPerHour.push(cookieTime);
    this.totalDailyCookies += this.salesPerHour[i];
    console.log(this.totalDailyCookies);
  }
};

StoreSales.prototype.render = function() {
  this.hourlyCookies();
 
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.location;
  trEl.appendChild(tdEl);

  for (var i in hours) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.salesPerHour[i];
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = this.totalDailyCookies;
  trEl.appendChild(tdEl);
  dailyStoreSales.appendChild(trEl);
  this.totalDailyCookies = 0;
};

function addNewStore(event) {
  event.preventDefault();
  console.log('New Store: ' + event.target.newStoreName.value + ' ' + event.target.newMin.value + ', ' + event.target.newMax.value + ', ' + event.target.newAvg.value);
  var newLocation = event.target.newStoreName.value;
  var newMin = event.target.newMin.value;
  var newMax = event.target.newMax.value;
  var newAvg = event.target.newAvg.value;

  new StoreSales(newLocation, newMin, newMax, newAvg);

  event.target.newStoreName.value = null;
  event.target.newMin.value = null;
  event.target.newMax.value = null;
  event.target.newAvg.value = null;


  dailyStoreSales.innerHTML = '';
  makeHeaderRow();
  renderAllStores();
  makeFooterRow();
}

function makeHeaderRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Location';
  trEl.appendChild(thEl);

  for (var i in hours) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Total';
  trEl.appendChild(thEl);

  dailyStoreSales.appendChild(trEl);
}

function makeFooterRow() {
  
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Total';
  trEl.appendChild(tdEl);

  var dailyTotal = 0;
  var hourlyTotal = 0;
  for (var i in hours) {

    hourlyTotal = 0;

    for(var j in allStores) {
      hourlyTotal += allStores[j].salesPerHour[i];
      dailyTotal += allStores[j].salesPerHour[i];
    }
    tdEl = document.createElement('td');
    tdEl.textContent = hourlyTotal;
    trEl.appendChild(tdEl);
  }

  tdEl = document.createElement('td');
  tdEl.textContent = dailyTotal;
  trEl.appendChild(tdEl);
  dailyStoreSales.appendChild(trEl);
}

function renderAllStores() {
  for (var i in allStores) {
    allStores[i].render();
  }
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