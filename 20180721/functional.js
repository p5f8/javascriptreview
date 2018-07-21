// Youtube session with Venkat Subramaniam, great man with Java and Javascript
// Great session by the way!
// Youtube link: https://www.youtube.com/watch?v=aIVKX5SeLoE

var list = [1, 2, 3, 4, 5, 6, 7];

//list.forEach(function(e) { console.log(e) });
//list.forEach(e => console.log(e));

// list.map(function(e) { return e * 2; })
//    .forEach(function(e) { console.log(e) });

//list.filter(function(e) { return e % 2 == 0; })
//    .map(function(e) { return e * 2; })
//    .forEach(function(e) { console.log(e) });

list.filter(e => e % 2 == 0 )
    .map(e => e * 2)
    .forEach(e => console.log(e));
