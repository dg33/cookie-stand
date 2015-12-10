//
// // An array of hours for your stores
// // var hours = [];
// var time = ['10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm'];
// // // Object Literal for each store
// // var pikePlace = {
// //   // All the properties of your object!!
// //
// var pike = {
//   min:17,
//   max:88,
//   avg:5.2,
//   hourly:[],
//   i:0,
//   total:0,
// //   randCustomer: function(min, max) {
// //     // Generate a random number based on min and max arguments passed in when this function is called
// //   },
//    randomHourlyCustomers: function() {
//         return Math.floor(Math.random()*(this.max - this.min + 1)) + this.min;
//       },
//       hourlySales: function() {
//         return Math.floor(this.avg) * (this.randomHourlyCustomers());
//       },
//       totals: function() {
//         for(i = 0; i < time.length; i++) {
//           var oneHour = this.hourlySales();
//           this.hourly.push(oneHour);
//           this.total += oneHour;
//         }
//       },
//       passData: function() {
//         for(i = 0; i < pike.hourly.length; i++) {
//           var node = document.createElement('li');
//           var textNode = document.createTextNode(time[i] + ': ' + this.hourly[i]);
//           node.appendChild(textNode);
//           document.getElementById('pike').appendChild(node);
//         }
//         var node = document.createElement('li');
//         var textNode = document.createTextNode('Total: ' + this.total);
//         node.appendChild(textNode);
//         document.getElementById('pike').appendChild(node);
//       }
//     };
//     pike.totals();
//     pike.passData();
// //SeaTac Airport
// var seatac = {
//   min:6,
//   max:44,
//   avg:1.2,
//   hourly:[],
//   i:0,
//   total:0,
//
//    randomHourlyCustomers: function() {
//         return Math.floor(Math.random()*(this.max - this.min + 1)) + this.min;
//       },
//       hourlySales: function() {
//         return Math.floor(this.avg) * (this.randomHourlyCustomers());
//       },
//       totals: function() {
//         for(i = 0; i < time.length; i++) {
//           var oneHour = this.hourlySales();
//           this.hourly.push(oneHour);
//           this.total += oneHour;
//         }
//       },
//       passData: function() {
//         for(i = 0; i < seatac.hourly.length; i++) {
//           var node = document.createElement('li');
//           var textNode = document.createTextNode(time[i] + ': ' + this.hourly[i]);
//           node.appendChild(textNode);
//           document.getElementById('seatac').appendChild(node);
//         }
//         var node = document.createElement('li');
//         var textNode = document.createTextNode('Total: ' + this.total);
//         node.appendChild(textNode);
//         document.getElementById('seatac').appendChild(node);
//       }
//     };
//     seatac.totals();
//     seatac.passData();
//   //Southcenter Mall
//   var southcenter = {
//     min:11,
//     max:38,
//     avg:1.9,
//     hourly:[],
//     i:0,
//     total:0,
//
//      randomHourlyCustomers: function() {
//           return Math.floor(Math.random()*(this.max - this.min + 1)) + this.min;
//         },
//         hourlySales: function() {
//           return Math.floor(this.avg) * (this.randomHourlyCustomers());
//         },
//         totals: function() {
//           for(i = 0; i < time.length; i++) {
//             var oneHour = this.hourlySales();
//             this.hourly.push(oneHour);
//             this.total += oneHour;
//           }
//         },
//         passData: function() {
//           for(i = 0; i < southcenter.hourly.length; i++) {
//             var node = document.createElement('li');
//             var textNode = document.createTextNode(time[i] + ': ' + this.hourly[i]);
//             node.appendChild(textNode);
//             document.getElementById('southcenter').appendChild(node);
//           }
//           var node = document.createElement('li');
//           var textNode = document.createTextNode('Total: ' + this.total);
//           node.appendChild(textNode);
//           document.getElementById('southcenter').appendChild(node);
//         }
//       };
//       southcenter.totals();
//       southcenter.passData();
// //Bellevue Square
//       var bellevue = {
//         min:20,
//         max:48,
//         avg:3.3,
//         hourly:[],
//         i:0,
//         total:0,
//
//          randomHourlyCustomers: function() {
//               return Math.floor(Math.random()*(this.max - this.min + 1)) + this.min;
//             },
//             hourlySales: function() {
//               return Math.floor(this.avg) * (this.randomHourlyCustomers());
//             },
//             totals: function() {
//               for(i = 0; i < time.length; i++) {
//                 var oneHour = this.hourlySales();
//                 this.hourly.push(oneHour);
//                 this.total += oneHour;
//               }
//             },
//             passData: function() {
//               for(i = 0; i < bellevue.hourly.length; i++) {
//                 var node = document.createElement('li');
//                 var textNode = document.createTextNode(time[i] + ': ' + this.hourly[i]);
//                 node.appendChild(textNode);
//                 document.getElementById('bellevue').appendChild(node);
//               }
//               var node = document.createElement('li');
//               var textNode = document.createTextNode('Total: ' + this.total);
//               node.appendChild(textNode);
//               document.getElementById('bellevue').appendChild(node);
//             }
//           };
//           bellevue.totals();
//           bellevue.passData();
// //Alki
//           var alki = {
//             min:3,
//             max:24,
//             avg:2.6,
//             hourly:[],
//             i:0,
//             total:0,
//
//              randomHourlyCustomers: function() {
//                   return Math.floor(Math.random()*(this.max - this.min + 1)) + this.min;
//                 },
//                 hourlySales: function() {
//                   return Math.floor(this.avg) * (this.randomHourlyCustomers());
//                 },
//                 totals: function() {
//                   for(i = 0; i < time.length; i++) {
//                     var oneHour = this.hourlySales();
//                     this.hourly.push(oneHour);
//                     this.total += oneHour;
//                   }
//                 },
//                 passData: function() {
//                   for(i = 0; i < alki.hourly.length; i++) {
//                     var node = document.createElement('li');
//                     var textNode = document.createTextNode(time[i] + ': ' + this.hourly[i]);
//                     node.appendChild(textNode);
//                     document.getElementById('alki').appendChild(node);
//                   }
//                   var node = document.createElement('li');
//                   var textNode = document.createTextNode('Total: ' + this.total);
//                   node.appendChild(textNode);
//                   document.getElementById('alki').appendChild(node);
//                 }
//               };
//               alki.totals();
//               alki.passData();

        // var store = new Object().
        //  store.name = ''
        //  store.min =
        //  store.max =
        //  store.avg =
var hours = ['10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm'];

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
  var hoursElem = document.getElementById("hours");
  var tblElem = document.createElement("table");
  var tdElem = document.createElement("td");
  var trElem = document.createElement('tr');
  tdElem.appendChild(document.createTextNode(this.locName));
  console.log("in render function");
  // tdElem.textContent = this.locName;
  trElem.appendChild(tdElem);
  tblElem.appendChild(trElem);

  tdElem.className = "firstRow";

  var totElem = document.createElement("td");
  totElem.textContent = Math.round(this.dailyCookies);
  trElem.appendChild(totElem);
  tblElem.appendChild(trElem);
  hoursElem.appendChild(tblElem);

  for (var i = 0; i < this.hourlyCookies.length; i++) {
    var tdElem = document.createElement("td");
    tdElem.textContent = Math.round(this.hourlyCookies [i]);
    trElem.appendChild(tdElem);
    tblElem.appendChild(trElem);
    hoursElem.appendChild(tblElem);
  }
}
var pike = new CookieStand ("pike", 17, 88, 5.2);
var seatac = new CookieStand ("seatac", 6, 44, 1.2);
var southcenter = new CookieStand ("southcenter", 11, 38, 1.9);
var bellevue = new CookieStand ("bellevue", 20, 48, 3.3);
var alki = new CookieStand ("alki", 3, 24, 2.6);



function firstLine(){
  var hoursElem = document.getElementById("hours");
  var tblElem = document.createElement("table");
  var thElem = document.createElement("th");
  var trElem = document.createElement("tr");
  thElem.textContent = "Locations";
  trElem.appendChild(thElem);
  tblElem.appendChild(trElem);

  thElem.className = "firstRow"

  for(var i = 0; i < hours.length; i++){
    var thElem = document.createElement("th");
    thElem.textContent= hours[i];
    trElem.appendChild(thElem);
    tblElem.appendChild(trElem);
    hoursElem.appendChild(tblElem);

  }
}
firstLine();
pike.render();
seatac.render();
southcenter.render();
bellevue.render();
alki.render();
