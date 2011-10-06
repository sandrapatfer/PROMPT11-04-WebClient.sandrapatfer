var utils = require ("./utils.js");

//console.log("testing");
//utils.a("inside");

//utils.foreach(console.log, [1,2,3]);
//console.log(utils.sum([1,2,3]));

//console.log(utils.countZeroes([1, 0, 2, 0]));
//console.log(utils.countZeroes([1, 0, 2, "a"]));

//console.log(utils.isEven(2));
//console.log(utils.isEven(5));

//console.log(utils.every(utils.isEven, [2,4]));
//console.log(utils.every(utils.isEven, [2,5]));
//console.log(utils.every(utils.isEven, [2, 5, 6]));

//console.log(utils.some(utils.isEven, [2,4]));
//console.log(utils.some(utils.isEven, [3,5]));
//console.log(utils.some(utils.isEven, [2, 5, 6]));

//console.log(utils.map(utils.isEven, [2,4]));
//console.log(utils.map(utils.power(2), [2,4]));

console.log(utils.filter(utils.isEven, [2, 5, 6, 10, 11, 20]));

//console.log(