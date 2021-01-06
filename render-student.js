// sto2html = student object to html
function renderStudent(student = {}) {

    let student_html = "";

    student_html += `<div class="student">
    <h4>${student_list.name}</h4>
    <div class="photo"><img src='${student_list.photo}'>
        </div>
    <a href="${student_list.cvLink}">link to CV</a>
    </div>`

    return student_html;
}