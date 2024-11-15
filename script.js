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
// function displayMenu(menuData){
//     const menuTable = document.getElementById('menuTable');
//     // Loop for our menu data we fetched from server.js
//     menuData.forEach(item => {
//         const row = document.createElement('tr');
//         // Creates a new 'td' for our table and sets the appropriate category from our menu data
//         const categoryElement = document.createElement('td');
//         categoryElement.textContent = item.category;
//         row.appendChild(categoryElement);
//         // Creates a new 'td' for our table and sets the appropriate name from our menu data
//         const nameElement = document.createElement('td');
//         nameElement.textContent = item.item_name;
//         row.appendChild(nameElement);
//         // Creates a new 'td' for our table and sets the appropriate description from our menu data
//         const descriptionElement = document.createElement('td');
//         descriptionElement.textContent = item.description;
//         descriptionElement.setAttribute('class', 'description-cell')
//         row.appendChild(descriptionElement);
//         // Creates a new 'td' for our table and sets the appropriate price from our menu data
//         const priceElement = document.createElement('td');
//         priceElement.textContent = `$${item.price}`;
//         row.appendChild(priceElement);
        
//         // Two buttons created and added to our table used to select quantity and purchase for the menu
//         // *REMINDER* See if I can move some of this to index.html later for decluttering of function
//         const buttonElement = document.createElement('td')
//         const buttonInput = document.createElement('input');
//         const buttonSubmit = document.createElement('input');
//         buttonSubmit.type = 'submit';
//         buttonSubmit.value = 'Buy';
//         buttonInput.type = 'number';
//         buttonInput.min = '0';
//         buttonInput.max = '100';
//         buttonInput.classList.add('order-button', 'input-button');
//         buttonSubmit.classList.add('order-button', 'submit-button');
//         buttonElement.appendChild(buttonInput);
//         buttonElement.appendChild(buttonSubmit);
//         row.appendChild(buttonElement);
        
//         menuTable.appendChild(row);
//     });
// }

function displayMenu(menuData) {
    const menuTable = document.getElementById('menuTable');
    const orderTable = document.getElementById('orderBody');
    let orderData = [];
  
    menuData.forEach(item => {
      const row = document.createElement('tr');
  
      // Category
      const categoryElement = document.createElement('td');
      categoryElement.textContent = item.category;
      row.appendChild(categoryElement);
  
      // Item Name
      const nameElement = document.createElement('td');
      nameElement.textContent = item.item_name;
      row.appendChild(nameElement);
  
      // Description
      const descriptionElement = document.createElement('td');
      descriptionElement.textContent = item.description;
      row.appendChild(descriptionElement);
  
      // Price
      const priceElement = document.createElement('td');
      priceElement.textContent = `$${item.price}`;
      row.appendChild(priceElement);
  
      // Order Quantity and Buttons
      const buttonElement = document.createElement('td');
      const quantityInput = document.createElement('input');
      const buttonSubmit = document.createElement('input');
      quantityInput.type = 'number';
      quantityInput.min = '0';
      quantityInput.max = '100';
      quantityInput.classList.add('order-input');
      buttonSubmit.type = 'button';
      buttonSubmit.value = 'Add to Order';
      buttonSubmit.classList.add('order-submit');
      
      // Add event listener for adding item to order
      buttonSubmit.addEventListener('click', function() {
        const quantity = parseInt(quantityInput.value);
        if (quantity > 0) {
          // Add item to orderData array
          const orderItem = {
            item_id: item.id,
            item_name: item.item_name,
            quantity: quantity,
            price: item.price
          };
          orderData.push(orderItem);
  
          // Update order table
          const orderRow = document.createElement('tr');
          const itemCell = document.createElement('td');
          const quantityCell = document.createElement('td');
          const priceCell = document.createElement('td');
          
          itemCell.textContent = item.item_name;
          quantityCell.textContent = quantity;
          priceCell.textContent = `$${(item.price * quantity).toFixed(2)}`;
          
          orderRow.appendChild(itemCell);
          orderRow.appendChild(quantityCell);
          orderRow.appendChild(priceCell);
          orderTable.appendChild(orderRow);
  
          // Update total cost
          updateTotalCost();
        }
      });
  
      buttonElement.appendChild(quantityInput);
      buttonElement.appendChild(buttonSubmit);
      row.appendChild(buttonElement);
  
      menuTable.appendChild(row);
    });
  
    // Update total cost
    function updateTotalCost() {
      const totalCost = orderData.reduce((total, item) => total + (item.quantity * item.price), 0);
      document.getElementById('totalCost').textContent = `$${totalCost.toFixed(2)}`;
    }
  
    // Checkout button functionality
    document.getElementById('checkoutButton').addEventListener('click', function() {
      if (orderData.length > 0) {
        fetch('/submit-order', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(orderData),
        })
        .then(response => response.json())
        .then(data => {
          alert('Order submitted successfully!');
          // Optionally, clear the order after submission
          orderData = [];
          orderTable.innerHTML = '';  // Clear order table
          updateTotalCost();          // Reset total cost display
        })
        .catch(error => {
          console.error('Error submitting order:', error);
        });
      } else {
        alert('Please add items to your order before checking out.');
      }
    });
  
    // Reset button functionality
    document.getElementById('resetButton').addEventListener('click', function() {
      orderData = [];
      orderTable.innerHTML = '';  // Clear order table
      updateTotalCost();          // Reset total cost display
    });
  }
  


// CRUD operation for fetching Restaurant data
async function fetchRestaurant() {
    const response = await fetch('http://localhost:3000/restaurants');
    const restaurants = await response.json();
    const table = document.getElementById('restaurantTable');
    table.innerHTML = '';
    restaurants.forEach(restaurant => {
        const row = `<tr>
                        <td>${restaurant.store_id}</td>
                        <td>${restaurant.location}</td>
                        <td>${new Date(restaurant.open_date).toLocaleDateString()}</td>
                        <td>${restaurant.sales}</td>
                        <td>${restaurant.total_customers}</td>
                        <td>${restaurant.owner}</td>
                        <td>${restaurant.manager}</td>
                    </tr>`;
        table.innerHTML += row;
    });
}


// CRUD operation for fetching Inventory data
async function fetchInventory() {
    const response = await fetch('http://localhost:3000/inventory');
    const inventoryItems = await response.json();
    const table = document.getElementById('inventoryTable');
    table.innerHTML = '';
    inventoryItems.forEach(item => {
        const row = `<tr>
                        <td>${item.item_id}</td>
                        <td>${item.item_name}</td>
                        <td>${item.item_amount}</td>
                        <td>${item.location}</td>
                        <td>${new Date(item.last_restocked).toLocaleDateString()}</td>
                    </tr>`;
        table.innerHTML += row;
    });
}


// CRUD operation for fetching Customer data
async function fetchCustomer() {
    const response = await fetch('http://localhost:3000/customers');
    const customers = await response.json();
    const table = document.getElementById('customerTable');
    table.innerHTML = '';
    customers.forEach(customer => {
        const row = `<tr>
                        <td>${customer.customer_id}</td>
                        <td>${customer.first_name}</td>
                        <td>${customer.last_name}</td>
                        <td>${customer.email}</td>
                        <td>${customer.phone}</td>
                    </tr>`;
        table.innerHTML += row;
    });
}


// CRUD operation for fetching Orders data
async function fetchOrders() {
    const response = await fetch('http://localhost:3000/orders');
    const orders = await response.json();
    const table = document.getElementById('ordersTable');
    table.innerHTML = '';
    orders.forEach(order => {
        const row = `<tr>
                        <td>${order.order_id}</td>
                        <td>${order.customer_id}</td>
                        <td>${order.item_id}</td>
                        <td>${order.time_ordered}</td>
                        <td>${order.server_id}</td>
                        <td>${order.total_cost}</td>
                        <td>${order.location}</td>
                    </tr>`;
        table.innerHTML += row;
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

// document.getElementById('resetButton').addEventListener('click', function(){
//     const numberInputs = document.getElementsByClassName('input-button');
//     const inputArr = Array.from(numberInputs);
//     inputArr.forEach(input => input.value = 0);
//     //console.log('test');
// });

// Loads our menu on site loadup
// window.onload = fetchMenu;
window.onload = function() {
    fetchMenu();
    fetchEmployee();
    fetchRestaurant()
    fetchInventory()
    fetchCustomer()
    fetchOrders()
};
