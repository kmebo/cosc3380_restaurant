// Fetches our api call '/menu'
async function fetchMenu() {
    try{
        const response = await fetch('http://localhost:3000/menu');

        if(!response.ok){
            throw new Error('Network response was not ok'); 
        }

        const data = await response.json();
        console.log(data);
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
        buttonInput.classList.add('order-button');
        buttonSubmit.classList.add('order-button', 'submit-button');
        buttonElement.appendChild(buttonInput);
        buttonElement.appendChild(buttonSubmit);
        row.appendChild(buttonElement);

        menuTable.appendChild(row);
    });
}

// Loads our menu on site loadup
window.onload = fetchMenu;