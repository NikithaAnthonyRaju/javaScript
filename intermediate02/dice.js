//Math library

result = 22 / 7

console.log("Result without fixed length - " + result)
console.log("Result with fixed length - " + result.toFixed(3))

//Floor is lowest value
console.log("Lowest value of given result - " + Math.floor(result))

//Ceil is upper value
console.log("Highest value of given result - " + Math.ceil(result))

//Random number generation. This play between 0 and 1
console.log("Random No between 0 & 1 - " + Math.random())

//Random number generation to play between 0 and 5
console.log("Random No with decimal values  - " + Math.random() * 6)
console.log("Random No without decimal values  - " + Math.floor(Math.random() * 6))

// Setting up lower and higher value
let upperValue = 10
let lowerValue = 3
let randomResult = Math.floor(Math.random() * (upperValue - lowerValue + 1)) + lowerValue
console.log("Random No between " + upperValue + " & " + lowerValue + " -  " + randomResult)