var hours = ['10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm','6pm'];

function CookieStand (locName, min, max, avg){
  this.locName = locName;
  this.minCust = min;
  this.maxCust = max;
  this.avgCookies = avg;
  this.hourlyCookies = [];
  this.dailyCookies = 0;
  // this.checkAvailability = function (){
  //   return this.max - this.min + 1;
  // }
}

CookieStand.prototype.customerRand = function(min,max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

CookieStand.prototype.generateHourly = function(){
  for(var i = 1; i < hours.length; i++){
    var cookiesThisHour = this.customerRand(this.minCust, this.maxCust) * this.avgCookies;
    this.hourlyCookies.push(cookiesThisHour);
    this.dailyCookies += cookiesThisHour;
  }
}

CookieStand.prototype.render = function(){
  this.generateHourly();
  var hoursElem = document.getElementById('hours');
  var tdElem = document.createElement('td');
  var trElem = document.createElement('tr');
  tdElem.appendChild(document.createTextNode(this.locName));
  console.log("in render function");
  // tdElem.textContent = this.locName;
  trElem.appendChild(tdElem);

  tdElem.className = "firstRow";

  var totElem = document.createElement("td");
  totElem.textContent = Math.round(this.dailyCookies);
  trElem.appendChild(totElem);
  hoursElem.appendChild(trElem);

  for (var i = 0; i < this.hourlyCookies.length; i++) {
    var tdElem = document.createElement("td");
    tdElem.textContent = Math.round(this.hourlyCookies [i]);
    trElem.appendChild(tdElem);
    hoursElem.appendChild(trElem);
  }
}
var pike = new CookieStand ("pike", 17, 88, 5.2);
var seatac = new CookieStand ("seatac", 6, 44, 1.2);
var southcenter = new CookieStand ("southcenter", 11, 38, 1.9);
var bellevue = new CookieStand ("bellevue", 20, 48, 3.3);
var alki = new CookieStand ("alki", 3, 24, 2.6);



function firstLine(){
  var hoursElem = document.getElementById("hours");
  var thElem = document.createElement("th");
  var trElem = document.createElement("tr");
  thElem.textContent = "Locations";
  trElem.appendChild(thElem);

  thElem.className = "firstRow";

  for(var i = 0; i < hours.length; i++){
    var thElem = document.createElement("th");
    thElem.textContent= hours[i];
    trElem.appendChild(thElem);
    hoursElem.appendChild(trElem);

  }
}
document.getElementById('formData').addEventListener('submit',function(event){
event.preventDefault();
var locName= event.target.userLocation.value;
var min= parseInt(event.target.minCustomersPerHr.value);
var max=parseInt(event.target.maxCustomersPerHr.value);
var avg=parseFloat(event.target.avgCookiesPerCustomer.value);
console.log(locName,min,max,avg);

var  userLoc= new CookieStand(locName, min, max, avg);
userLoc.render()

});

firstLine();
pike.render();
seatac.render();
southcenter.render();
bellevue.render();
alki.render();
