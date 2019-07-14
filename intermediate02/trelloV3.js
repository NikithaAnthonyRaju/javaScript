//This keyword is used to get rid of scope

let myMeeting = {
    meetingsSchedule: 0,
    meetingsCompleted: 0,
    scheduledMeeting: function (scheduledMeetingCount) {
        this.meetingsSchedule = this.meetingsSchedule + scheduledMeetingCount
    },
    completedMeeting: function (completedMeetingCount) {
        this.meetingsCompleted = this.meetingsCompleted + completedMeetingCount
    },
    meetingsLeftForDay: function () {
        return `you are left with ${(this.meetingsSchedule - this.meetingsCompleted)} meetings`
    }, 
    resetCount: function () {
        this.meetingsSchedule = 0
        this.meetingsCompleted = 0
    }
}

myMeeting.scheduledMeeting(8)
myMeeting.completedMeeting(6)
console.log("Meetings count " + myMeeting.meetingsLeftForDay())
myMeeting.resetCount()
console.log("After Reseting the count : "+ myMeeting.meetingsLeftForDay())