function renderData(students) {
    for (let student of students) {
        if (student.photo === null) {
            student.photo = "https://oldough.com/static/images/avatar.png";
        }
        if (student.bio === null) {
            student.bio = "This is my bio...";
        }
    }
}

// sto2html = student object to html
function renderStudent(student = {}) {
	return `<div class="student">
    <h4>${student.name}</h4>
    <div class="photo"><img src='${student.photo}'>
        </div>
    <div class="bio">${student.bio}</div>
    <a href="${student.cvLink}">link to CV</a>
    </div>`;
}

export function renderStudents(students = []) {
    renderData(students);
	document.querySelector('.students').innerHTML = students.map(renderStudent).join("")
}
