const getStudentIdsSum = (students) => students.reduce((Val, cur) => Val + cur.id, 0);

export default getStudentIdsSum;
