
// Calculating Marks

let myGradeAndPercentage = function (currentMarks, totalMarks) {

    if (Number.isInteger(currentMarks) && Number.isInteger(totalMarks)) {

        let percentage = (currentMarks / totalMarks) * 100;
        let myGrade = ''

        if (percentage >= 90) {
            myGrade = 'A'
        } else if (percentage >= 80) {
            myGrade = 'B';
        } else if (percentage >= 70) {
            myGrade = 'C';
        } else if (percentage >= 60) {
            myGrade = 'D';
        } else if (percentage >= 50) {
            myGrade = 'E';
        } else {
            myGrade = 'F';
        }
        return `My grade is ${myGrade} and percentage is ${percentage}`;
    }
    else {

        console.log('Please pass integers')
    }

}

console.log('With Integers - ' + myGradeAndPercentage(5, 10))
console.log('Without Integers - ' + myGradeAndPercentage('5', 10))
console.log('Without Integers - ' + myGradeAndPercentage('5', '10'))