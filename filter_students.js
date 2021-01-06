export function filterStudents(students, word = '') {
	const lowerWord = word.toLowerCase();
	return students.filter(function ({ name, bio }) {
		return (
			(typeof name === 'string' && name.toLowerCase().includes(lowerWord)) ||
			(typeof bio === 'string' && bio.toLowerCase().includes(lowerWord))
		);
	});
}
