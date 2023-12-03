//spread
var mountains = ["Everest","Fuji","AnnaPura"]
var mountainsfromKarnataka = ["Savandurga"]

console.log(...mountains, ...mountainsfromKarnataka)

//rest

var [first, ...rest] = mountains;

console.log(first)
    
console.log(rest)