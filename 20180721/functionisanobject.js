// Youtube session with Venkat Subramaniam, great man with Java and Javascript
// Great session by the way!
// Youtube link: https://www.youtube.com/watch?v=aIVKX5SeLoE

var greet = function(name) {
    console.log("hello " + name);
    
}

var greet2 = function(name) {
    console.log(this.toUpperCase() + ' ' + name);
    
}

greet("Pablo");
greet2.call('hello', 'Pablo');
greet2.call('howdy', 'Jane');


var greet3 = function(name1, name2) {
    console.log(this.toUpperCase() + ' ' + name1 + ' ' + name2);
    
}

var names = ['Tom', 'Jerry'];

greet3.call('hi', names[0], names[1]);
greet3.apply('hi', names);
