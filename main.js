import { renderStudents } from './render-student.js'
import { students } from './studentList.js'
import { filterStudents } from './filter_students.js'

renderStudents(students)

const input = document.querySelector('#search-input');

input.addEventListener('input', () => {
	renderStudents(filterStudents(students, input.value))
})
