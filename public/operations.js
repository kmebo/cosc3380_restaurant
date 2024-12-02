const employeeButton = document.getElementById('employee-button');
const departmentButton = document.getElementById('department-button');
const financesButton = document.getElementById('finances-button');
const addButton = document.getElementById('add-button');
const removeButton = document.getElementById('remove-button');

employeeButton.addEventListener('click', () => {
    let items = document.getElementsByClassName('employee-container');
    for(let item of items){
        item.style.display = 'block';
    }
    
    items = document.getElementsByClassName('department-container');
    for(let item of items){
        item.style.display = 'none';
    }

    items = document.getElementsByClassName('finances-container');
    for(let item of items){
        item.style.display = 'none';
    }
});

departmentButton.addEventListener('click', () => {
    let items = document.getElementsByClassName('employee-container');
    for(let item of items){
        item.style.display = 'none';
    }
    
    items = document.getElementsByClassName('department-container');
    for(let item of items){
        item.style.display = 'block';
    }

    items = document.getElementsByClassName('finances-container');
    for(let item of items){
        item.style.display = 'none';
    }
});

financesButton.addEventListener('click', () => {
    let items = document.getElementsByClassName('employee-container');
    for(let item of items){
        item.style.display = 'none';
    }
    
    items = document.getElementsByClassName('department-container');
    for(let item of items){
        item.style.display = 'none';
    }

    items = document.getElementsByClassName('finances-container');
    for(let item of items){
        item.style.display = 'block';
    }
});

addButton.addEventListener('click', () => {
    let items = document.getElementsByClassName('add-container');
    for(let item of items){
        item.style.display = 'block';
    }

    items = document.getElementsByClassName('remove-container');
    for(let item of items){
        item.style.display = 'none';
    }
});

removeButton.addEventListener('click', () => {
    let items = document.getElementsByClassName('remove-container');
    for(let item of items){
        item.style.display = 'block';
    }

    items = document.getElementsByClassName('add-container');
    for(let item of items){
        item.style.display = 'none';
    }
});

async function fetchEmployee() {
    const response = await fetch("http://localhost:3000/employee");
    const employees = await response.json();
    console.log(employees);
    const table = document.getElementById("employeeTable");
    table.innerHTML = "";
    employees.forEach((employee_) => {
      const row = `<tr>
                            <td>${employee_.employee_id}</td>
                            <td>${employee_.ssn}</td>
                            <td>${employee_.position}</td>
                            <td>${employee_.first_name}</td>
                            <td>${employee_.last_name}</td>
                            <td>${employee_.email}</td>
                            <td>${new Date(
                              employee_.birth_date
                            ).toLocaleDateString()}</td>
                            <td>${new Date(
                              employee_.hire_date
                            ).toLocaleDateString()}</td>
                            <td>${employee_.store_id}</td>
                        </tr>`;
      table.innerHTML += row;
    });
  }

  window.onload = function() {
    let items = document.getElementsByClassName('employee-container');
    for(let item of items){
        item.style.display = 'none';
    }

    items = document.getElementsByClassName('department-container');
    for(let item of items){
        item.style.display = 'none';
    }

    items = document.getElementsByClassName('finances-container');
    for(let item of items){
        item.style.display = 'none';
    }
    fetchEmployee();
};