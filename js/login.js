"use strict;"

userArray = [{

}]
function User(name, password) {
  this.name = name;
  this.password = password;


}

var options = { 
  size: ["S", "M", "L", "XL", "XXL"],
  color: ["Red", "Blue", "Green", "White", "Black"]
};


console.log(Object.keys(options));
for (var key in options) {
  console.log(options[key].length);
}
function Shop(location, minHourlyCustomers, maxHourlyCustomers, avgCookiePerCustomer) {
  this.location = location;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.avgCookiePerCustomer = avgCookiePerCustomer;
  this.numCustomersPerHour = [];
  this.CookiesSoldPerHours = [];
}