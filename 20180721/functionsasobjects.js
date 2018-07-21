// Youtube session with Venkat Subramaniam, great man with Java and Javascript
// Great session by the way!
// Youtube link: https://www.youtube.com/watch?v=aIVKX5SeLoE

var worker = {
    work: function() {
        console.log("working...");
    }
}

var sam = {
    firstName: 'Sam',
    lastName: 'Walker',
    age: 2
};
    
//console.log(sam);
//worker.work();

var use = function(inst) {
    try {
        inst.work();   
    } catch (ex) {
        console.log(ex);
    }
}

// use(sam);

sam.__proto__ = worker;
use (sam);