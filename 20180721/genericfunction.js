// Youtube session with Venkat Subramaniam, great man with Java and Javascript
// Great session by the way!
// Youtube link: https://www.youtube.com/watch?v=aIVKX5SeLoE

var max = function() {
    console.log(arguments);

    var large = arguments[0];

    for(var i = 0; i < arguments.length; i++){
        if(large < arguments[i]) {
            large = arguments[i];
        }
    }

    return large;
}


console.log(max(10,20,30));