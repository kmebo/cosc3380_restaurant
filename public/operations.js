const employeeButton = document.getElementById('employee-button');
const departmentButton = document.getElementById('department-button');
const financesButton = document.getElementById('finances-button');
const inventoryButton = document.getElementById('inventory-button');
const addButton = document.getElementById('add-button');
const removeButton = document.getElementById('remove-button');
const editButton = document.getElementById('edit-button');
const employeeRemoveButton = document.getElementById('removeEmployee-button')
const employeeAddButton = document.getElementById('addEmployee-button');
const employeeEditButton = document.getElementById('editEmployee-button');
const orderInventoryButton = document.getElementById('orderInventory-button');
const restaurantButton = document.getElementById('restaurant-button');

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
    items = document.getElementsByClassName('restaurant-container');
    for (let item of items) {
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
    items = document.getElementsByClassName('restaurant-container');
    for (let item of items) {
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
    items = document.getElementsByClassName('restaurant-container');
    for (let item of items) {
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
    items = document.getElementsByClassName('restaurant-container');
    for (let item of items) {
        item.style.display = 'none';
    }
});

restaurantButton.addEventListener('click', () => {
    let items = document.getElementsByClassName('employee-container');
    for (let item of items) {
        item.style.display = 'none';
    }
    items = document.getElementsByClassName('department-container');
    for (let item of items) {
        item.style.display = 'none';
    }
    items = document.getElementsByClassName('finances-container');
    for (let item of items) {
        item.style.display = 'none';
    }
    items = document.getElementsByClassName('inventory-container');
    for (let item of items) {
        item.style.display = 'none';
    }

    items = document.getElementsByClassName('restaurant-container');
    for (let item of items) {
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
    items = document.getElementsByClassName('edit-container');
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
    items = document.getElementsByClassName('edit-container');
    for(let item of items){
        item.style.display = 'none';
    }
});

editButton.addEventListener('click', () => {
    let items = document.getElementsByClassName('remove-container');
    for(let item of items){
        item.style.display = 'none';
    }
    items = document.getElementsByClassName('add-container');
    for(let item of items){
        item.style.display = 'none';
    }
    items = document.getElementsByClassName('edit-container');
    for(let item of items){
        item.style.display = 'block';
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
    const menu = document.getElementById('inventoryMenu');
    menu.innerHTML = '';
    inventories.forEach((items) => {
        const item = `<option value = '${items.item_name}'> ${items.item_name} </option>`;
        menu.innerHTML += item;
    });
}

// Both functions for removing an employee
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

// Both Functions for adding an employee
employeeAddButton.addEventListener('click', () =>{
    const formData = {
        ssn: document.getElementById('addSsn').value,
        position: document.getElementById('addPosition').value,
        firstName: document.getElementById('addFirstName').value,
        lastName: document.getElementById('addLastName').value,
        email: document.getElementById('addEmail').value,
        birthDate: document.getElementById('addBirthDate').value,
        hireDate: document.getElementById('addHireDate').value,
        storeId: document.getElementById('addStoreId').value
    };
    addEmployee(formData);
});

async function addEmployee(formData){
    try{
        const response = await fetch('http://localhost:3000/employee/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        if(!response.ok){
            const errorData = await response.json();
            console.error('Error:', errorData.message);
            alert('Failed to add employee: ' + errorData.message);
            return;
        }else{
            fetchEmployee();
        }
        alert('Employee added successfully');
    }catch(error){
        console.error('Error: ', error);
        alert('An error has occurred');
    }
}

// Both functions for editing an employee
employeeEditButton.addEventListener('click', () =>{
    const idValue = (document.getElementById('editEmployeeId')).value;
    const formData = {
        position: document.getElementById('editPosition').value,
        email: document.getElementById('editEmail').value,
        storeId: document.getElementById('editStoreId').value
    };
    editEmployee(idValue, formData);
});

async function editEmployee(employeeId, formData){
    try{
        const response = await fetch(`http://localhost:3000/employee/${employeeId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        if(!response.ok){
            const errorData = await response.json();
            console.error('Error:', errorData.message);
            alert('Failed to edit employee: ' + errorData.message);
            return;
        }else{
            fetchEmployee();
        }
        alert('Employee edited successfully');
    }catch(error){
        console.error('Error: ', error);
        alert('An error has occurred');
    }
}

// Functions for ordering more inventory
orderInventoryButton.addEventListener('click', () => {
    const orderValue = parseInt((document.getElementById('orderInventory')).value, 10);
    const orderName = (document.getElementById('inventoryMenu')).value;
    orderInventory(orderValue, orderName);
});

async function orderInventory(item_amount, item_name){
    try{
        const response = await fetch(`http://localhost:3000/inventory/${item_name}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({item_amount})
        });
        if(!response.ok){
            const errorData = await response.json();
            console.error('Error:', errorData.message);
            alert('Failed to order inventory: ' + errorData.message);
            return;
        }else{
            fetchInventory();
        }
        alert('Inventory ordered successfully');
    }catch(error){
        console.error('Error: ', error);
        alert('An error has occurred');
    }
}

document.getElementById("add-restaurant-form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const location = document.getElementById("location").value;
    const openDate = document.getElementById("open-date").value;
    const sales = parseFloat(document.getElementById("sales").value);
    const totalCustomers = parseFloat(document.getElementById("total-customers").value);
    const owner = document.getElementById("owner").value;
    const manager = document.getElementById("manager").value;

    try {
        const response = await fetch("http://localhost:3000/restaurants", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                location: location,
                open_date: openDate,
                sales: sales,
                total_customers: totalCustomers,
                owner: owner,
                manager: manager,
            }),
        });
});

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

        items = document.getElementsByClassName('restaurant-container');
    for (let item of items) {
        item.style.display = 'none';
    }
    fetchEmployee();
    fetchInventory();
};
