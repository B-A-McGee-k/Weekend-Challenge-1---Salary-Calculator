//The second table of all the employee info should simply be an array
employeeInfo = []

function submitEmployeeInfo (fName, lName, ID, jobTitle, salary) {
    employeeInfo.unshift(fName, lName, ID, jobTitle, salary)
}