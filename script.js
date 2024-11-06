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

        menuTable.appendChild(row);
    });
}

window.onload = fetchMenu;