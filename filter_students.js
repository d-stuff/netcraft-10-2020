function filter_students(students, word) {
    // console.log('filter');
    let arr = [];
    let filtered = students.filter(function(student){
        // return student.name.toUpperCase().includes(word) || student.bio.toUpperCase().includes(word);
        return student.name.includes(word) || student.bio.includes(word);
    });
    return filtered;
}