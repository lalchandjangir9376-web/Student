function generateTimetable(data) {
    console.log("Generating timetable for: ", data.name);
    // टाइमटेबल जनरेट करने का एल्गोरिदम यहाँ आएगा
}
const timetable = {};
data.weakSubjects.forEach(subject => {
    timetable[subject] = data.studyHours / data.weakSubjects.length;
});
console.log("आपका टाइमटेबल:", timetable);
const timetable = {};
