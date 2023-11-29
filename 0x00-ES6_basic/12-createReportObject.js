export default function createReportObject(employeesList) {
  const newObj = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(employeesList) {
      const len = Object.keys(employeesList).length;
      return len;
    },
  };

  return newObj;
}
