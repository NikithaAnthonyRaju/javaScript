//Writing a function
let helloUser = function(name){
    console.log(`Greeting message for ${name}`)
    console.log(`Hey ${name}`)
};

helloUser("Nikitha");

let fullName = function(firstName, lastName){
    console.log(`Greeting message for ${firstName} ${lastName}`)
    console.log(`Hey ${firstName} ${lastName}`)
}

fullName("Nikitha", 'Anthony Raju')

// Using return statements
let sum = function(num1, num2){
    let sumOf2No = num1 + num2;
    return sumOf2No;
}

let sumtotal = sum(10,12)
console.log(`sum of 2 values ${sumtotal}`)

let multiply = function(num1, num2){
    return num1 * num2;
}

let multotal = multiply(10,12)
console.log(`multiplication of 2 values ${multotal}`)

//Using defual Parameters.

let guestUser = function(name, courseCount){
    return `Name is ${name} and Course count is ${courseCount}`
}
//Calling the function without using paramenter - returns undefiened
console.log(guestUser())

let guestUser1 = function(name = 'noName', courseCount = 0){
    return `Name is ${name} and Course count is ${courseCount}`
}
//Calling the function without using paramenter - returns defualt parameter given in function
console.log(guestUser1())
//Calling the function with paramenter overrites defualt parameter
console.log(guestUser1('Nikitha'))
console.log(guestUser1('Nikitha', 4))
