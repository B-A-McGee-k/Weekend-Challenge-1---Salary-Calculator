//The second table of all the employee info should simply be an array of objects
//Each row on the table will be an object, with a button added to delete the row
console.log("Hi, how's it going world?")
employeeInfo = []
monthlySalaries = []
totalMonthly = 0

console.log(employeeInfo)

function submitEmployeeInfo (button) {
    //This function needs to add to the table what is in the input
    //check
    //this function needs to call the function responsible for updating the employee table
    console.log('Submit button clicked!');
    
    employeeInfo.unshift(employee = {
        firstName: document.querySelector('#firstNameInput').value,
        lastName: document.querySelector('#lastNameInput').value,
        identification: document.querySelector('#idInput').value,
        title: document.querySelector('#titleInput').value,
        annualSalary: document.querySelector('#annualSalaryInput').value,
    })

    var tableBody = document.getElementById("employeeTableBody");
    var bodyRow = tableBody.insertRow(0);
    var cell1 = bodyRow.insertCell(0);
    var cell2 = bodyRow.insertCell(1);
    var cell3 = bodyRow.insertCell(2);
    var cell4 = bodyRow.insertCell(3);
    var cell5 = bodyRow.insertCell(4);
    var cell6 = bodyRow.insertCell(5);
    cell1.innerHTML = document.querySelector('#firstNameInput').value
    cell2.innerHTML = document.querySelector('#lastNameInput').value
    cell3.innerHTML = document.querySelector('#idInput').value
    cell4.innerHTML = document.querySelector('#titleInput').value,
    cell5.innerHTML = document.querySelector('#annualSalaryInput').value,
    cell6.innerHTML = '<button type="button" onclick="deleteEmployee(event, 1)">Delete</button>'

    monthlySalaries.unshift(document.querySelector('#annualSalaryInput').value)
    console.log(monthlySalaries)

    document.querySelector('#firstNameInput').value = ''
    document.querySelector('#lastNameInput').value = ''
    document.querySelector('#idInput').value = ''
    document.querySelector('#titleInput').value = ''
    document.querySelector('#annualSalaryInput').value = ''    

    console.log(employeeInfo)
    console.log(totalMonthly)
    console.log(salaryDisplay())
};

function deleteEmployee (event, number) {
    console.log('Deleting...')
    //decides between all or a specific one
    if (number == 0) {
        //if input = 0, clear array, and remove tbody
        employeeInfo = []
        console.log(' employee info cleared!')
        const table = document.getElementById("employeeTableBody");
        const removeIt = table.rows.length;
        for (let i = 0; i < removeIt + 5; i + 1) {
        document.getElementById("employeeTableBody").deleteRow(i);
        };
        
        console.log(employeeInfo)
    } else {
        //employeeInfo needs to have the proper one removed
        console.log(' employee data deleted.')
        event.preventDefault();
        const parent = event.target.parentNode.parentNode;
        parent.parentNode.removeChild(parent);
        //the code that does that
        console.log(employeeInfo)
    };
};

function salaryDisplay () {

    /* Below would make my progam freeze?
    Any advice on why that is the case would be great
    for (let n = 0; n < monthlySalaries.length; n + 1) {
        totalMonthly += monthlySalaries[n];
    };*/
    /*Below when tried essentially did nothing other than a console log of "The total of salaries a month is 0"
    monthlySalaries.forEach( num => {
        totalMonthly + num
    })

    //What do I need to get a display to work
    //I need to select the display and tell it to add on an element    

};
