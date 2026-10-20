document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const data = {
        name: document.getElementById('name').value,
        weakSubjects: document.getElementById('weak').value.split(',').map(s => s.trim()),
        studyHours: parseFloat(document.getElementById('study').value)
    };
    generateTimetable(data);
});
