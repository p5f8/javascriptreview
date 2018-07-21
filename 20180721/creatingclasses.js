// Youtube session with Venkat Subramaniam, great man with Java and Javascript
// Great session by the way!
// Youtube link: https://www.youtube.com/watch?v=aIVKX5SeLoE

var Car = function(model, year) { // constructor function
    this.model = model;
    this.year = year;
};

// Car('xx', 1920); // don't do this.

var car1 = new Car('Evoke', 2017);
var car2 = new Car('Evoke II', 2018);

// 3 things happen when you use new
// 1. Memory is allocated for the instance, let's call that inst.
// 2. Car.call(inst, 'Evoke', 2017);
// 3. inst.__proto__ === Car.prototype

console.log(car1);
console.log(car2);
console.log(car2.__proto__ === Car.prototype);
console.log(car2.__proto__ === Car.__proto__);
console.log(car2.__proto__);
console.log(Car.prototype);
console.log(Car.__proto__);


Car.prototype.miles = 0;
Car.prototype.drive = function(dist) {
    this.miles += dist;
}


car1.drive(10);
car2.drive(20);

console.log(car1);
console.log(car2);


