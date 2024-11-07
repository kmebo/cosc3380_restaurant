// Fetches our api call '/menu'
async function fetchMenu() {
    try{
        const response = await fetch('http://localhost:3000/menu');
        if(!response.ok){
            throw new Error('Network response was not ok'); 
        }
        const data = await response.json();
        //console.log(data);
        displayMenu(data);
    }catch(error){
        console.log('Error with fetching data: ', error);
    }
}

// Loops through our menu data to create and append the data to our html table for display
function displayMenu(menuData){
    const menuTable = document.getElementById('menuTable');

    menuData.forEach(item => {
        const row = document.createElement('tr');
        const nameElement = document.createElement('td');
        nameElement.textContent = item.name;
        row.appendChild(nameElement);

        const priceElement = document.createElement('td');
        priceElement.textContent = `$${item.price}`;
        row.appendChild(priceElement);

        const buttonElement = document.createElement('td')
        const buttonInput = document.createElement('input');
        const buttonSubmit = document.createElement('input');
        buttonSubmit.type = 'submit';
        buttonSubmit.value = 'Buy';
        buttonInput.type = 'number';
        buttonInput.id = 'orderButton';
        buttonInput.min = '0';
        buttonInput.max = '100';
        buttonInput.classList.add('order-button', 'input-button');
        buttonSubmit.classList.add('order-button', 'submit-button');
        buttonElement.appendChild(buttonInput);
        buttonElement.appendChild(buttonSubmit);
        row.appendChild(buttonElement);

        menuTable.appendChild(row);
    });
}


// CRUD operations for fetching Employee
async function fetchEmployee() {
    const response = await fetch('http://localhost:3000/employees');
    const employees = await response.json();
    const table = document.getElementById('employeeTable');
    table.innerHTML = '';
    employees.forEach(employee_ => {
        const row = `<tr>
                        <td>${employee_.employee_id}</td>
                        <td>${employee_.ssn}</td>
                        <td>${employee_.position}</td>
                        <td>${employee_.first_name}</td>
                        <td>${employee_.last_name}</td>
                        <td>${employee_.email}</td>
                        <td>${new Date(employee_.birth_date).toLocaleDateString()}</td>
                        <td>${employee_.department}</td>
                        <td>${new Date(employee_.hire_date).toLocaleDateString()}</td>
                    </tr>`;
        table.innerHTML += row;
    });
}

document.getElementById('resetButton').addEventListener('click', function(){
    const numberInputs = document.getElementsByClassName('input-button');
    const inputArr = Array.from(numberInputs);
    inputArr.forEach(input => input.value = 0);
    //console.log('test');
});

// Loads our menu on site loadup
// window.onload = fetchMenu;
window.onload = function() {
    fetchMenu();
    fetchEmployee();
};