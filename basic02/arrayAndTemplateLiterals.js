//Working on arrays
let arrayList = ['One', 'Two', 'Threee'];

console.log('arrayList Length --> ' + arrayList.length);
console.log("Read arrayList --> " + arrayList)

// Directely to access dinamic value instead of concatinating sentence - Template Literals
console.log(`ArrayList size is ${arrayList.length}`)

//Shift is used to remove first element of an array
let num = ['One', 'Two', 'Threee', 'Four', 'Five', 'Six'];
num.shift();
console.log(`list after using - SHIFT --> ${num}`)

//Unshift is used to add first element to an array
num = ['One', 'Two', 'Threee', 'Four', 'Five', 'Six'];
num.unshift('Zero');
console.log(`list after using - UNSHIFT --> ${num}`)

//Pop is used to remove first element of an array
num = ['One', 'Two', 'Threee', 'Four', 'Five', 'Six'];
num.pop();
console.log(`list after using - POP --> ${num}`)

//Push is used to add last element to an array
num = ['One', 'Two', 'Threee', 'Four', 'Five', 'Six'];
num.push('Seven');
console.log(`list after using - POP --> ${num}`)

//Slice is used to change element in an array
num = ['One', 'Two', 'Threee', 'Four', 'Five', 'Six'];
num.splice(2,3)
console.log(`list after using - SLICE --> ${num}`)

//Slice and replace list of data in for of array
num = ['One', 'Two', 'Threee', 'Four', 'Five', 'Six'];
num.splice(2,3, ['1', '2', '3'])
console.log(`list after using - SLICE --> ${num}`)