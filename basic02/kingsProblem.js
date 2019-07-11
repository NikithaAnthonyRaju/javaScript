//Let used as global & within Loop

console.log("************* 1 Scenario ****************");

let king = 'John';

if (true) {
    let king = 'Sam'
    console.log("1 if loop - " + king);
    if (true) {
        let king = 'Yam'
        console.log("2 if loop - " + king);
    }
}
if (true) {
    console.log("2nd Child : " + king);
}

console.log("************* 2 Scenario *************");

let kings = 'John';

if (true) {
    let kings = 'Sam'
    console.log("1 if loop - " + kings);
    if (true) {
        console.log("2 if loop - " + kings);
    }
}
if (true) {
    console.log("2nd Child : " + kings);
}

console.log("************* 3 Scenario *************");

let king1 = 'John';

if (true) {
    console.log("1 if loop - " + king1);
    if (true) {
        console.log("2 if loop - " + king1);
    }
}
if (true) {
    console.log("2nd Child : " + king1);
}

console.log("************* 4 Scenario *************");

let king2 = 'John';

if (true) {
    console.log("1 if loop - " + king2);
    if (true) {
        // if we dont declare without using let, then its consider as VAR or global
        king2 = 'sam'
        console.log("2 if loop - " + king2);
    }
}
if (true) {
    console.log("2nd Child : " + king2);
}

console.log("************* 5 Scenario *************");

var king3 = 'John';

if (true) {
    console.log("1 if loop - " + king3);
    if (true) {
        // if we dont declare without using let, then its consider as VAR or global
        // Same declaration should be used, not Var & let together for same word.
        var king3 = 'sam'
        console.log("2 if loop - " + king3);
    }
}
if (true) {
    console.log("2nd Child : " + king3);
}