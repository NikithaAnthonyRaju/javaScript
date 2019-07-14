let myMeeting = {
    meetingsSchedule: 0,
    meetingsCompleted: 0
}

let scheduledMeeting = function(myMeeting, count = 0){
    myMeeting.meetingsSchedule = myMeeting.meetingsSchedule + count
    console.log(myMeeting.meetingsSchedule)
}

let completedMeeting = function(myMeeting, count = 0){
    myMeeting.meetingsCompleted = myMeeting.meetingsCompleted + count
    console.log(myMeeting.meetingsCompleted)
}

let meetingsLeftForDay = function(myMeeting){
    return `you are left with ${(myMeeting.meetingsSchedule - myMeeting.meetingsCompleted)} meetings`
}

scheduledMeeting(myMeeting, 5)

completedMeeting(myMeeting, 2)
    
console.log(myMeeting)

console.log(meetingsLeftForDay(myMeeting))