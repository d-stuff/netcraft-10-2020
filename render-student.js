// sto2html = student object to html
function renderStudent(student = {}) {
    let students_html = "";

    student_html += `<div class="student">
    <h4>${student_list[i].name}</h4>
    <div class="photo"><img src='${student_list[i].photo}'>
        </div>
    <a href="${student_list[i].cvLink}">link to CV</a>
    </div>`

    return student_html;
}