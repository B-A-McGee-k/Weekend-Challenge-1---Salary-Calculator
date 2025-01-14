//The second table of all the employee info should simply be an array of objects
//Each row on the table will be an object, with a button added to delete the row
employeeInfo = [0]

function submitEmployeeInfo (button) {
    //This function needs to add to the table what is in the input
    //check
    //this function needs to call the function responsible for updating the employee table
    console.log('Submit button clicked!');

    employeeInfo.unshift(employee = {
        firstName: document.querySelector('#fName').value,
        lastName: document.querySelector('#lName').value,
        identification: document.querySelector('#ID').value,
        title: document.querySelector('#jobTitle').value,
        annualSalary: document.querySelector('#salary').value,
    })
    console.log(employeeInfo)
    console.log(employeeTable())

    console.log(employeeInfo[0].firstName)
};

function deleteEmployee (number) {
    console.log('Deleting...')
    //decides between all or a specific one
    if (number == 0) {
        //if input = 0, clear array, and log it
        employeeInfo = []
        console.log(' employee info cleared!')
        console.log(employeeInfo)
    } else {
        //for all others it does that value row and logs that removal
        console.log(' ', employeeInfo[number].firstName, ' was deleted.')
        console.log(employeeInfo)
    };

}

function employeeTable () {
    console.log('Table is about to update!')
}




