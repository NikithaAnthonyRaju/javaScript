
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

//For each loop
//forEach uses callback method, function which is not assigned to variable is called callback function.
// first paremeter returns array itself & second parameter address the index of tat array
months.forEach(function(month, index){
    console.log(`Value at the index ${index} is ${month}`)
})

//For loop
console.log("************** For Loop *************")
for (let index = 0; index < months.length; index++) {
    console.log(months[index])
}

console.log("************** For Loop - reverse *************")
for (let index = months.length-1; index >=0; index--) {
    console.log(months[index])
}