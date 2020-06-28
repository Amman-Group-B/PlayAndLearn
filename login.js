function users()

}

function Shop(location, minHourlyCustomers, maxHourlyCustomers, avgCookiePerCustomer) {
  this.location = location;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.avgCookiePerCustomer = avgCookiePerCustomer;
  this.numCustomersPerHour = [];
  this.CookiesSoldPerHours = [];
}