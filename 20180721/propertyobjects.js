// Youtube session with Venkat Subramaniam, great man with Java and Javascript
// Great session by the way!
// Youtube link: https://www.youtube.com/watch?v=aIVKX5SeLoE

var Car = function(model, year) { // constructor function
    this.model = model;
    this.year = year;
};

var checkProperties = function (inst) {
    for(var prop in inst) {
        console.log(prop + ' ' + car1.hasOwnProperty(prop));
    }
}

// Car('xx', 1920); // don't do this.

var car1 = new Car('Evoke', 2017);
var car2 = new Car('Evoke II', 2018);


Car.prototype.miles = 0;
Car.prototype.drive = function(dist) {
    this.miles += dist;
}

checkProperties(car1);
console.log("-------------------------");

car1.drive(10);
checkProperties(car1);

