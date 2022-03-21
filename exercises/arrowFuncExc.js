// ES5 Map Callback

// function double(arr) {
//   return arr.map(function(val) {
//     return val * 2;
//   });
// }

// ES2015 Arrow Functions Shorthand
const double = arr => arr.map(val => val*2)


// let arr = [1,2,3,4,5,6,7,8,9,10];
// function squareAndFindEvens(numbers){
//   var squares = numbers.map(function(num){
//     return num ** 2;
//   });
//   var evens = squares.filter(function(square){
//     return square % 2 === 0;
//   });
//   return evens;
// }


// ES2015 Arrow Functions Shorthand
const squareAndFindEvens = numbers => numbers.map(num => num**2).filter(square => square % 2 === 0)


