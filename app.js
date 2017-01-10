'use strict';
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firstAndPike = {

  minCustomer: 23,
  maxCustomer: 65,
  aveCookie: 6.3,
  hourlyArray: [],
  hourleySales:[],

//function for random amount of people per-day
  randomCust: function(minCustomer, maxCustomer){
    return Math.floor( Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer;
    console.log(randomCust());
  },
//function for putting random
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
      listItem.textContent = hours[i] + ' Sales - ' + firstAndPike.hourlyArray[i];
      listHours.appendChild(listItem);
    };
    var total = document.getElementById('cookie-sales');
    var listItem = document.createElement('li');
    listItem.textContent = 'Total - ' + firstAndPike.cookiesTotal(total);
    total.appendChild(listItem);
  }
};

firstAndPike.randomCust();
firstAndPike.cookieProducer();
firstAndPike.cookiesTotal();
firstAndPike.cookieSales();
console.log(firstAndPike.cookiestotal);

var seaTacAir = {
  minCustomer: 3,
  maxCustomer: 24,
  aveCookie: 1.2,
  hourlyArray: [],
  hourleySales:[],
  randomCust: function(minCustomer, maxCustomer){
    return Math.floor( Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer;
    console.log(randomCust());
  },
//function for putting random
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
    for (var i = 0; i < seaTacAir.hourlyArray.length; i++){
      var listItem = document.createElement('li');
      listItem.textContent = hours[i] + ' Sales - ' + seaTacAir.hourlyArray[i];
      listHours.appendChild(listItem);
    };
    var total = document.getElementById('cookie-sales');
    var listItem = document.createElement('li');
    listItem.textContent = 'Total - ' + seaTacAir.cookiesTotal(total);
    total.appendChild(listItem);
  }
};

seaTacAir.randomCust();
seaTacAir.cookieProducer();
seaTacAir.cookiesTotal();
seaTacAir.cookieSales();
console.log(seaTacAir.cookiestotal);

var seattleCeter = {
  minCustomer: 3,
  maxCustomer: 24,
  aveCookie: 1.2,
  hourlyArray: [],
  hourleySales:[],
  randomCust: function(minCustomer, maxCustomer){
    return Math.floor( Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer;
    console.log(randomCust());
  },
//function for putting random
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
    for (var i = 0; i < seattleCeter.hourlyArray.length; i++){
      var listItem = document.createElement('li');
      listItem.textContent = hours[i] + ' Sales - ' + seattleCeter.hourlyArray[i];
      listHours.appendChild(listItem);
    };
    var total = document.getElementById('cookie-sales');
    var listItem = document.createElement('li');
    listItem.textContent = 'Total - ' + seattleCeter.cookiesTotal(total);
    total.appendChild(listItem);
  }
};

seattleCeter.randomCust();
seattleCeter.cookieProducer();
seattleCeter.cookiesTotal();
seattleCeter.cookieSales();
console.log(seattleCeter.cookiestotal);

var capitolHill = {
  minCustomer: 3,
  maxCustomer: 24,
  aveCookie: 1.2,
  hourlyArray: [],
  hourleySales:[],
  randomCust: function(minCustomer, maxCustomer){
    return Math.floor( Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer;
    console.log(randomCust());
  },
//function for putting random
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
    for (var i = 0; i < capitolHill.hourlyArray.length; i++){
      var listItem = document.createElement('li');
      listItem.textContent = hours[i] + ' Sales - ' + capitolHill.hourlyArray[i];
      listHours.appendChild(listItem);
    };
    var total = document.getElementById('cookie-sales');
    var listItem = document.createElement('li');
    listItem.textContent = 'Total - ' + capitolHill.cookiesTotal(total);
    total.appendChild(listItem);
  }
};

capitolHill.randomCust();
capitolHill.cookieProducer();
capitolHill.cookiesTotal();
capitolHill.cookieSales();
console.log(capitolHill.cookiestotal);

var alki = {
  minCustomer: 3,
  maxCustomer: 24,
  aveCookie: 1.2,
  hourlyArray: [],
  hourleySales:[],
  randomCust: function(minCustomer, maxCustomer){
    return Math.floor( Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer;
    console.log(randomCust());
  },
//function for putting random
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
    for (var i = 0; i < alki.hourlyArray.length; i++){
      var listItem = document.createElement('li');
      listItem.textContent = hours[i] + ' Sales - ' + alki.hourlyArray[i];
      listHours.appendChild(listItem);
    };
    var total = document.getElementById('cookie-sales');
    var listItem = document.createElement('li');
    listItem.textContent = 'Total - ' + alki.cookiesTotal(total);
    total.appendChild(listItem);
  }
};

alki.randomCust();
alki.cookieProducer();
alki.cookiesTotal();
alki.cookieSales();
console.log(alki.cookiestotal);
