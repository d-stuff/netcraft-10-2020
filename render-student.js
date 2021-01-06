// sto2html = student object to html
function renderStudent(student = {}) {
	return `<div class="student">
    <h4>${student.name}</h4>
    <div class="photo"><img src='${student.photo}'>
        </div>
    <a href="${student.cvLink}">link to CV</a>
    </div>`;

}

export function renderStudents(students = []) {
	document.querySelector('.students').innerHTML = students.map(renderStudent).join("")
}
