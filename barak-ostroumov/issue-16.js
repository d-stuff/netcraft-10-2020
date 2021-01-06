// sto2html = student object to html
function sto2html(student_list = []) {
    let students_html = "";

    for (let i = 0; i < student_list.length; i++) {
        students_html += `<div class="student">
        <h4>${student_list[i].name}</h4>
        <div class="photo"><img src='${student_list[i].image}'>
        </div>
        <a href="${student_list[i].link}">link to CV</a>
    </div>`
    }

    return students_html;
}