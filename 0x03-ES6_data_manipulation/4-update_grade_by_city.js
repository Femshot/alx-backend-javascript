export default function updateStudentGradeByCity(aList, aCity, newGrades) {
  const sameCity = aList.filter((student) => student.location === aCity);
  return sameCity.map((student) => {
    const onlyGrade = newGrades.filter((grades) => grades.studentId === student.id);
    const temp = student;
    if ((onlyGrade.length > 0) && (onlyGrade[0].grade)) {
      temp.grade = onlyGrade[0].grade;
    } else {
      temp.grade = 'N/A';
    }
    return temp;
  });
}
