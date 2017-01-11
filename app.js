
'use strict';

var hours = ['', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function Shops (storeName, minCustomer, maxCustomer, aveCookie){
  this.storeName = storeName;
  this.min = minCustomer;
  this.max = maxCustomer;
  this.average = aveCookie;
  this.cookiesArray = [];
}

Shops.prototype.randomCust = function(minCustomer, maxCustomer){
  return Math.floor(Math.random() * (this.max - this.min)) + this.min;
  console.log(randomCust());
};

Shops.prototype.cookieProducer = function(){
  for (var i = 0; i < hours.length; i++){
    var cookiesPer = Math.floor(this.average * this.randomCust());
    this.cookiesArray.push(cookiesPer);
  }
  console.log(this.cookiesArray);
  return this.cookiesArray;
};

Shops.prototype.cookiesTotal = function (){
  var total = 0;
  this.cookieProducer();
  for (var index = 0; index < this.cookiesArray.length; index++){
    total += this.cookiesArray[index];
  }
  console.log(total);
  return total;
};

Shops.prototype.showOnPage = function() {

  // for (var index = 0; index < 5; index++){
  var trEl = document.createElement('tr');
  // trEl.textContent = stores[index];
  var storeNameEl = document.createElement('th');
  storeNameEl.textContent = this.storeName;
  trEl.appendChild(storeNameEl);
  for (var j = 0; j < 15; j++){
    var tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesArray[j];
    trEl.appendChild(tdEl);
  }
  tableEl.appendChild(trEl);
  // }
};

var tableEl = document.getElementById('cookie-table');
var trEl = document.createElement('tr');
for (var i = 0; i < hours.length; i++){
  var rowData = hours[i];
  var thEl = document.createElement('th');
  thEl.textContent = hours[i];
  trEl.appendChild(thEl);
};
tableEl.appendChild(trEl);

var firstAndPike = new Shops('1st and Pike ',23,65,6.3);
console.log(firstAndPike);
firstAndPike.randomCust();
firstAndPike.cookieProducer();
firstAndPike.showOnPage();

var seaTacAir = new Shops('Sea Tac Airport', 3,24,1.2);
console.log(seaTacAir);
seaTacAir.randomCust();
seaTacAir.cookieProducer();
seaTacAir.showOnPage();
var seattleCeter = new Shops('Seattle Center', 11,38,3.7);
console.log(seattleCeter);
seattleCeter.randomCust();
seattleCeter.cookieProducer();
seattleCeter.showOnPage();

var capitolHill = new Shops('Capitol Hill', 20,38,2.3);
console.log(capitolHill);
capitolHill.randomCust();
capitolHill.cookieProducer();
capitolHill.showOnPage();

var alki = new Shops('Alki',2,16,4.6);
console.log(alki);
alki.randomCust();
alki.cookieProducer();
alki.showOnPage();
