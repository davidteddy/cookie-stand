'use strict';
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firstAndPike = {

  minCustomer: 23,
  maxCustomer: 65,
  aveCookie: 6.3,
  hourlyArray: [],
  hourleySales:[],

  randomCust: function(minCustomer, maxCustomer){
    return Math.floor( Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer;
  },
  cookieProducer: function(){
    for (var i = 0; i < hours.length; i++){
      var cookiesPer = Math.floor(this.aveCookie * this.randomCust());
      this.hourlyArray.push(cookiesPer);
    }
    console.log(this.hourlyArray);
    return this.hourlyArray;
  },
  cookiesTotal: function (){
    var total = 0;
    for (var index = 0; index < this.hourlyArray.length; index++){
      total += this.hourlyArray[index];
    }
    console.log(total);
    return total;
  },
  cookieSales:function(){
    var listHours = document.getElementById('cookie-sales');
    for (var i = 0; i < firstAndPike.hourlyArray.length; i++){
      var listItem = document.createElement('li');
      listItem.textContent = hours[i] + ' Sales -' + firstAndPike.hourleySales[i];
      listHours.appendChild(listItem);
    };
    var total = document.createElement('ul');
    total.textContent = 'Total - ' + this.firstAndPike.total;
    listHours.appendChild(total);
  }
};
firstAndPike.cookieProducer();
firstAndPike.cookiesTotal();
firstAndPike.cookieSales(),
console.log(this.cookiestotal);
var seaTacAir = {
  minCustomer: 3,
  maxCustomer: 24,
  aveCookie: 1.2,
  randomCust: function(minCustomer, maxCustomer){
    return Math.floor( Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer;
  },
  cookieProducer: function(){
    for (var i = 0; i < hours.length; i++){
      var cookiesPer = Math.floor(this.aveCookie * this.randomCust());
      this.hourlyArray.push(cookiesPer);
    }
    console.log(this.hourlyArray);
    return this.hourlyArray;
  },
  cookiesTotal: function (){
    var total = 0;
    for (var index = 0; index < this.hourlyArray.length; index++){
      total += this.hourlyArray[index];
    }
    console.log(total);
    return total;
  },
  cookieSales:function(){
    var listHours = document.getElementById('cookie-sales');
    for (var i = 0; i < this.seaTacAir.hourlyArray.length; i++){
      var listItem = document.createElement('li');
      listItem.textContent = hours[i] + ' Sales -' + seaTacAir.hourleySales[i];
      listHours.appendChild(listItem);
    };
    var total = document.createElement('ul');
    total.textContent = 'Total - ' + seaTacAir.total;
    listHours.appendChild(total);
  }
};
seaTacAir.cookieProducer();
seaTacAir.cookiesTotal();
seaTacAir.cookieSales(),
console.log(this.cookiestotal);
seaTacAir.randomCust();
// console.log(seaTacAir.randomCust());

var seattleCenter = {
  minCustomer: 11,
  maxCustomer:38,
  aveCookie:3.7,
  randomCust: function(minCustomer, maxCustomer){
    return Math.floor( Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer;
  },
  cookieProducer: function(){
    for (var i = 0; i < hours.length; i++){
      var cookiesPer = Math.floor(this.aveCookie * this.randomCust());
      this.hourlyArray.push(cookiesPer);
    }
    console.log(this.hourlyArray);
    return this.hourlyArray;
  },
  cookiesTotal: function (){
    var total = 0;
    for (var index = 0; index < this.hourlyArray.length; index++){
      total += this.hourlyArray[index];
    }
    console.log(total);
    return total;
  },
  cookieSales:function(){
    var listHours = document.getElementById('cookie-sales');
    for (var i = 0; i < this.seattleCenter.hourlyArray.length; i++){
      var listItem = document.createElement('li');
      listItem.textContent = hours[i] + ' Sales -' + seattleCenter.hourleySales[i];
      listHours.appendChild(listItem);
    };
    var total = document.createElement('ul');
    total.textContent = 'Total - ' + seattleCenter.total;
    listHours.appendChild(total);
  }
};
seattleCenter.randomCust();
seattleCenter.cookieProducer();
seattleCenter.cookiesTotal();
seattleCenter.cookieSales(),
console.log(this.cookiestotal);

var capitolHill = {
  minCustomer:20,
  maxCustomer:38,
  aveCookie:2.3,
  randomCust: function(minCustomer, maxCustomer){
    return Math.floor( Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer;
  },
  cookieProducer: function(){
    for (var i = 0; i < hours.length; i++){
      var cookiesPer = Math.floor(this.aveCookie * this.randomCust());
      this.hourlyArray.push(cookiesPer);
    }
    console.log(this.hourlyArray);
    return this.hourlyArray;
  },
  cookiesTotal: function (){
    var total = 0;
    for (var index = 0; index < this.hourlyArray.length; index++){
      total += this.hourlyArray[index];
    }
    console.log(total);
    return total;
  },
  cookieSales:function(){
    var listHours = document.getElementById('cookie-sales');
    for (var i = 0; i < this.capitolHill.hourlyArray.length; i++){
      var listItem = document.createElement('li');
      listItem.textContent = hours[i] + ' Sales -' + capitolHill.hourleySales[i];
      listHours.appendChild(listItem);
    };
    var total = document.createElement('ul');
    total.textContent = 'Total - ' + capitolHill.total;
    listHours.appendChild(total);
  }
};
capitolHill.cookieProducer();
capitolHill.cookiesTotal();
capitolHill.cookieSales(),
console.log(this.cookiestotal);
capitolHill.randomCust();
// console.log(capitolHill.randomCust());

var alki = {
  minCustomer:2,
  maxCustomer:16,
  aveCookie:4.6,
  randomCust: function(minCustomer, maxCustomer){
    return Math.floor( Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer;
  },
  cookieProducer: function(){
    for (var i = 0; i < hours.length; i++){
      var cookiesPer = Math.floor(this.aveCookie * this.randomCust());
      this.hourlyArray.push(cookiesPer);
    }
    console.log(this.hourlyArray);
    return this.hourlyArray;
  },
  cookiesTotal: function (){
    var total = 0;
    for (var index = 0; index < this.hourlyArray.length; index++){
      total += this.hourlyArray[index];
    }
    console.log(total);
    return total;
  },
  cookieSales:function(){
    var listHours = document.getElementById('cookie-sales');
    for (var i = 0; i < this.alki.hourlyArray.length; i++){
      var listItem = document.createElement('li');
      listItem.textContent = hours[i] + ' Sales -' + alki.hourleySales[i];
      listHours.appendChild(listItem);
    };
    var total = document.createElement('ul');
    total.textContent = 'Total - ' + alki.total;
    listHours.appendChild(total);
  }
};
alki.cookieProducer();
alki.cookiesTotal();
alki.cookieSales(),
console.log(this.cookiestotal);
alki.randomCust();
// console.log(alki.randomCust());
