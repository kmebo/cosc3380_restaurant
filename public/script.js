let result

// Fetches our api call '/menu'
async function fetchTable(table) {
    try{
        const response = await fetch('http://localhost:3000/'+table); // This gets the specific table you want
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        result = await response.json();
    }catch(error){
        console.log('Error with fetching data: ', error);
    }
}


function displayMenuItems(result,type) {

    const table = document.getElementById('menuTable');

    table.innerHTML = ""

    result.forEach(item => {

        const row = document.createElement('tr');

        if (item.category === type) {
            // Category
            //const categoryElement = document.createElement('td');
            //categoryElement.textContent = item.category;
            //row.appendChild(categoryElement);

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

            table.appendChild(row);
        }
    });

    console.log(table);

}

function displayMenu(menuData) {
    const menuTable = document.getElementById('menuTable');
    const orderTable = document.getElementById('orderBody');
    let orderData = [];

    menuData.forEach(item => {

        console.log(item);

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


// document.getElementById('resetButton').addEventListener('click', function(){
//     const numberInputs = document.getElementsByClassName('input-button');
//     const inputArr = Array.from(numberInputs);
//     inputArr.forEach(input => input.value = 0);
//     //console.log('test');
// });

  document.getElementById("breadsticks-button").addEventListener("click", function() {
    // Get the quantity entered by the customer
    var quantity = document.getElementById("breadsticks-quantity").value;
  
    // Ensure the quantity is a valid number
    if (quantity >= 1 && quantity <= 100) {
      console.log("Adding " + quantity + " breadsticks to the cart.");
      Add_preorder("breadsticks", quantity)
    } else {
      alert("Please enter a valid quantity between 1 to 100.");
    }
  });

  async function Add_preorder(item_name, quantity){
      await fetch('http://localhost:3000/preorder', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: item_name, quantity: quantity })
      });
  }

let selectedStoreId;

async function populateDropdown() {
    const response = await fetch("http://localhost:3000/stores");
    const stores = await response.json();

    const dropdown = document.getElementById("store-dropdown");
    dropdown.innerHTML = '<option value="" disabled selected>Select a Store</option>';

    stores.forEach(store => {
        const option = document.createElement("option");
        option.value = store.store_id;
        option.textContent = store.location;
        dropdown.appendChild(option);
    });

    dropdown.addEventListener('change', (event) => {
        selectedStoreId = event.target.value;
    });
}

window.populateDropdown = populateDropdown;

document.addEventListener("DOMContentLoaded", () => {
    populateDropdown();
});


window.onload = function() {
    fetchTable("menu");
    populateDropdown();
    //fetchRestaurant()
    //fetchInventory()
    //fetchCustomer()
    //fetchOrders()
};
