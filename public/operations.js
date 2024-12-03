const employeeButton = document.getElementById('employee-button');
const departmentButton = document.getElementById('department-button');
const financesButton = document.getElementById('finances-button');
const inventoryButton = document.getElementById('inventory-button');
const addButton = document.getElementById('add-button');
const removeButton = document.getElementById('remove-button');
const employeeRemoveButton = document.getElementById('removeEmployee-button')

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

    items = document.getElementsByClassName('inventory-container');
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

    items = document.getElementsByClassName('inventory-container');
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

    items = document.getElementsByClassName('inventory-container');
    for(let item of items){
        item.style.display = 'none';
    }
});

inventoryButton.addEventListener('click', () => {
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

    items = document.getElementsByClassName('inventory-container');
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
    //console.log(employees);
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
async function fetchInventory() {
    const response = await fetch("http://localhost:3000/inventory");
    const inventories = await response.json();
    //console.log(inventories);
    const table = document.getElementById("InventoryTable");
    table.innerHTML = "";
    inventories.forEach((inventory) => {
      const row = `<tr>
                            <td>${inventory.item_id}</td>
                            <td>${inventory.item_name}</td>
                            <td>${inventory.item_amount}</td>
                            <td>${inventory.store_id}</td>
                            <td>${new Date(
                                inventory.last_restocked
                            ).toLocaleDateString()}</td>
                        </tr>`;
      table.innerHTML += row;
    });
}

employeeRemoveButton.addEventListener('click', () =>{
    const idValue = (document.getElementById('removeEmployeeId')).value;
    //console.log(idValue);
    removeEmployee(idValue);
});

async function removeEmployee(employeeId){
    try{
        const response = await fetch(`http://localhost:3000/employee/${employeeId}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
            //body: JSON.stringify({employeeId})
        });
        if(!response.ok){
            const errorData = await response.json();
            console.error('Error:', errorData.message);
            alert('Failed to remove employee: ' + errorData.message);
            return;
        }else{
            fetchEmployee();
        }
        alert('Employee removed successfully');
    }catch(error){
        console.error('Error: ', error);
        alert('An error has occurred');
    }
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

    items = document.getElementsByClassName('inventory-container');
    for(let item of items){
        item.style.display = 'none';
    }
    fetchEmployee();
    fetchInventory();
};