
let cartHash = {}

async function checkoutItems() {

    const response = await fetch("http://localhost:3000/inventory")
    const data = await response.json()
    console.log(data)

    for (const cartItem in cartHash) {
        let itemName = cartItem;
        for (itemName in cartHash) {
            const item = cartHash[itemName];
            let ingredientsNeeded = []
            let amountNeeded = item.quantity
            switch (itemName) {
                case "Pizza":
                    ingredientsNeeded.push("Cheese");
                    ingredientsNeeded.push("Sauce");
                    ingredientsNeeded.push("Dough");
                    for (const index in ingredientsNeeded) {
                        const ingredientName = ingredientsNeeded[index]
                        const response = await fetch("http://localhost:3000/ingredientsAvailable", {
                           method: 'POST',
                            headers: {'Content-Type': "application/json"},
                            body: JSON.stringify({ingredient: ingredientName, amount: amountNeeded})
                        });
                        const jsonResponse = await response.json();
                        if (jsonResponse < 1) {
                            errorOrderingPopup(itemName);
                            return
                        }
                    }
                    break;
                case "Lasagna":
                    ingredientsNeeded.push("Cheese");
                    ingredientsNeeded.push("Sauce");
                    ingredientsNeeded.push("Beef");
                    for (const index in ingredientsNeeded) {
                        const ingredientName = ingredientsNeeded[index]
                        const response = await fetch("http://localhost:3000/ingredientsAvailable", {
                            method: 'POST',
                            headers: {'Content-Type': "application/json"},
                            body: JSON.stringify({ingredient: ingredientName, amount: amountNeeded})
                        });
                        const jsonResponse = await response.json();
                        if (jsonResponse < 1) {
                            errorOrderingPopup(itemName);
                            return
                        }
                    }
                    break;
                case "Alfredo":
                    ingredientsNeeded.push("Cheese");
                    ingredientsNeeded.push("Chicken");
                    for (const index in ingredientsNeeded) {
                        const ingredientName = ingredientsNeeded[index]
                        const response = await fetch("http://localhost:3000/ingredientsAvailable", {
                            method: 'POST',
                            headers: {'Content-Type': "application/json"},
                            body: JSON.stringify({ingredient: ingredientName, amount: amountNeeded})
                        });
                        const jsonResponse = await response.json();
                        if (jsonResponse < 1) {
                            errorOrderingPopup(itemName);
                            return
                        }
                    }
                    break;
                case "Sandwich":
                    ingredientsNeeded.push("Tomato");
                    ingredientsNeeded.push("Chicken");
                    ingredientsNeeded.push("Bread");
                    ingredientsNeeded.push("Cheese");
                    ingredientsNeeded.push("Lettuce");
                    for (const index in ingredientsNeeded) {
                        const ingredientName = ingredientsNeeded[index]
                        const response = await fetch("http://localhost:3000/ingredientsAvailable", {
                            method: 'POST',
                            headers: {'Content-Type': "application/json"},
                            body: JSON.stringify({ingredient: ingredientName, amount: amountNeeded})
                        });
                        const jsonResponse = await response.json();
                        if (jsonResponse < 1) {
                            errorOrderingPopup(itemName);
                            return
                        }
                    }
                    break;
                case "Spaghetti":
                    ingredientsNeeded.push("Sauce");
                    ingredientsNeeded.push("Pasta");
                    for (const index in ingredientsNeeded) {
                        const ingredientName = ingredientsNeeded[index]
                        const response = await fetch("http://localhost:3000/ingredientsAvailable", {
                            method: 'POST',
                            headers: {'Content-Type': "application/json"},
                            body: JSON.stringify({ingredient: ingredientName, amount: amountNeeded})
                        });
                        const jsonResponse = await response.json();
                        if (jsonResponse < 1) {
                            errorOrderingPopup(itemName);
                            return
                        }
                    }
                    break;
                case "Breadsticks":
                    ingredientsNeeded.push("Bread");
                    ingredientsNeeded.push("Butter");
                    for (const index in ingredientsNeeded) {
                        const ingredientName = ingredientsNeeded[index]
                        const response = await fetch("http://localhost:3000/ingredientsAvailable", {
                            method: 'POST',
                            headers: {'Content-Type': "application/json"},
                            body: JSON.stringify({ingredient: ingredientName, amount: amountNeeded})
                        });
                        const jsonResponse = await response.json();
                        if (jsonResponse < 1) {
                            errorOrderingPopup(itemName);
                            return
                        }
                    }
                    break;
                case "Prosciutto":
                    ingredientsNeeded.push("Prosciutto");
                    for (const index in ingredientsNeeded) {
                        const ingredientName = ingredientsNeeded[index]
                        const response = await fetch("http://localhost:3000/ingredientsAvailable", {
                            method: 'POST',
                            headers: {'Content-Type': "application/json"},
                            body: JSON.stringify({ingredient: ingredientName, amount: amountNeeded})
                        });
                        const jsonResponse = await response.json();
                        if (jsonResponse < 1) {
                            errorOrderingPopup(itemName);
                            return
                        }
                    }
                    break;
                case "Mozzarella":
                    ingredientsNeeded.push("Cheese");
                    ingredientsNeeded.push("Sauce");
                    for (const index in ingredientsNeeded) {
                        const ingredientName = ingredientsNeeded[index]
                        const response = await fetch("http://localhost:3000/ingredientsAvailable", {
                            method: 'POST',
                            headers: {'Content-Type': "application/json"},
                            body: JSON.stringify({ingredient: ingredientName, amount: amountNeeded})
                        });
                        const jsonResponse = await response.json();
                        if (jsonResponse < 1) {
                            errorOrderingPopup(itemName);
                            return
                        }
                    }
                    break;
                case "Cheesecake":
                    ingredientsNeeded.push("Cheesecake");
                    for (const index in ingredientsNeeded) {
                        const ingredientName = ingredientsNeeded[index]
                        const response = await fetch("http://localhost:3000/ingredientsAvailable", {
                            method: 'POST',
                            headers: {'Content-Type': "application/json"},
                            body: JSON.stringify({ingredient: ingredientName, amount: amountNeeded})
                        });
                        const jsonResponse = await response.json();
                        if (jsonResponse < 1) {
                            errorOrderingPopup(itemName);
                            return
                        }
                    }
                    break;
                case "Cannoli":
                    ingredientsNeeded.push("Cannoli");
                    for (const index in ingredientsNeeded) {
                        const ingredientName = ingredientsNeeded[index]
                        const response = await fetch("http://localhost:3000/ingredientsAvailable", {
                            method: 'POST',
                            headers: {'Content-Type': "application/json"},
                            body: JSON.stringify({ingredient: ingredientName, amount: amountNeeded})
                        });
                        const jsonResponse = await response.json();
                        if (jsonResponse < 1) {
                            errorOrderingPopup(itemName);
                            return
                        }
                    }
                    break;
            }
        }
    }
    placeOrder()
}

async function placeOrder() {

    for (const cartItem in cartHash) {
        let itemName = cartItem;
        for (itemName in cartHash) {
            const item = cartHash[itemName];
            let ingredientsNeeded = []
            let amountNeeded = item.quantity
            switch (itemName) {
                case "Pizza":
                    ingredientsNeeded.push("Cheese");
                    ingredientsNeeded.push("Sauce");
                    ingredientsNeeded.push("Dough");
                    for (const index in ingredientsNeeded) {
                        const ingredientName = ingredientsNeeded[index]
                        const response = await fetch("http://localhost:3000/removeIngredient", {
                            method: 'POST',
                            headers: {'Content-Type': "application/json"},
                            body: JSON.stringify({ingredient: ingredientName, amount: amountNeeded})
                        });
                    }
                    break;
                case "Lasagna":
                    ingredientsNeeded.push("Cheese");
                    ingredientsNeeded.push("Sauce");
                    ingredientsNeeded.push("Beef");
                    for (const index in ingredientsNeeded) {
                        const ingredientName = ingredientsNeeded[index]
                        const response = await fetch("http://localhost:3000/removeIngredient", {
                            method: 'POST',
                            headers: {'Content-Type': "application/json"},
                            body: JSON.stringify({ingredient: ingredientName, amount: amountNeeded})
                        });
                    }
                    break;
                case "Alfredo":
                    ingredientsNeeded.push("Cheese");
                    ingredientsNeeded.push("Chicken");
                    for (const index in ingredientsNeeded) {
                        const ingredientName = ingredientsNeeded[index]
                        const response = await fetch("http://localhost:3000/removeIngredient", {
                            method: 'POST',
                            headers: {'Content-Type': "application/json"},
                            body: JSON.stringify({ingredient: ingredientName, amount: amountNeeded})
                        });
                    }
                    break;
                case "Sandwich":
                    ingredientsNeeded.push("Tomato");
                    ingredientsNeeded.push("Chicken");
                    ingredientsNeeded.push("Bread");
                    ingredientsNeeded.push("Cheese");
                    ingredientsNeeded.push("Lettuce");
                    for (const index in ingredientsNeeded) {
                        const ingredientName = ingredientsNeeded[index]
                        const response = await fetch("http://localhost:3000/removeIngredient", {
                            method: 'POST',
                            headers: {'Content-Type': "application/json"},
                            body: JSON.stringify({ingredient: ingredientName, amount: amountNeeded})
                        });
                    }
                    break;
                case "Spaghetti":
                    ingredientsNeeded.push("Sauce");
                    ingredientsNeeded.push("Pasta");
                    for (const index in ingredientsNeeded) {
                        const ingredientName = ingredientsNeeded[index]
                        const response = await fetch("http://localhost:3000/removeIngredient", {
                            method: 'POST',
                            headers: {'Content-Type': "application/json"},
                            body: JSON.stringify({ingredient: ingredientName, amount: amountNeeded})
                        });
                    }
                    break;
                case "Breadsticks":
                    ingredientsNeeded.push("Bread");
                    ingredientsNeeded.push("Butter");
                    for (const index in ingredientsNeeded) {
                        const ingredientName = ingredientsNeeded[index]
                        const response = await fetch("http://localhost:3000/removeIngredient", {
                            method: 'POST',
                            headers: {'Content-Type': "application/json"},
                            body: JSON.stringify({ingredient: ingredientName, amount: amountNeeded})
                        });
                    }
                    break;
                case "Prosciutto":
                    ingredientsNeeded.push("Prosciutto");
                    for (const index in ingredientsNeeded) {
                        const ingredientName = ingredientsNeeded[index]
                        const response = await fetch("http://localhost:3000/removeIngredient", {
                            method: 'POST',
                            headers: {'Content-Type': "application/json"},
                            body: JSON.stringify({ingredient: ingredientName, amount: amountNeeded})
                        });
                    }
                    break;
                case "Mozzarella":
                    ingredientsNeeded.push("Cheese");
                    ingredientsNeeded.push("Sauce");
                    for (const index in ingredientsNeeded) {
                        const ingredientName = ingredientsNeeded[index]
                        const response = await fetch("http://localhost:3000/removeIngredient", {
                            method: 'POST',
                            headers: {'Content-Type': "application/json"},
                            body: JSON.stringify({ingredient: ingredientName, amount: amountNeeded})
                        });
                    }
                    break;
                case "Cheesecake":
                    ingredientsNeeded.push("Cheesecake");
                    for (const index in ingredientsNeeded) {
                        const ingredientName = ingredientsNeeded[index]
                        const response = await fetch("http://localhost:3000/removeIngredient", {
                            method: 'POST',
                            headers: {'Content-Type': "application/json"},
                            body: JSON.stringify({ingredient: ingredientName, amount: amountNeeded})
                        });
                    }
                    break;
                case "Cannoli":
                    ingredientsNeeded.push("Cannoli");
                    for (const index in ingredientsNeeded) {
                        const ingredientName = ingredientsNeeded[index]
                        const response = await fetch("http://localhost:3000/removeIngredient", {
                            method: 'POST',
                            headers: {'Content-Type': "application/json"},
                            body: JSON.stringify({ingredient: ingredientName, amount: amountNeeded})
                        });
                    }
                    break;
            }
        }
    }

}

function errorOrderingPopup(orderItem) {

    const popup = document.createElement('div');

    popup.className = 'popup visible'; // Add initial classes
    popup.textContent = `ERROR ordering ${orderItem}`;

    // Append it to the body
    document.body.appendChild(popup);

    // Hide the popup after 3 seconds
    setTimeout(() => {
        popup.classList.remove('visible');
        popup.classList.add('hidden');
    }, 3000);

}

function hideAllMenuItems() {
    let items = document.querySelectorAll('.main-menu-item');
    items.forEach((item) => {
        item.style.display = "none";
    })
    items = document.querySelectorAll('.appetizer-menu-item');
    items.forEach((item) => {
        item.style.display = "none";
    })
    items = document.querySelectorAll('.dessert-menu-item');
    items.forEach((item) => {
        item.style.display = "none";
    })
    clearCart()
}

function clearCart() {
    const cartContainer = document.getElementById('cartContainer');

    // Clear the container first
    cartContainer.innerHTML = '';
}


function capitalizeFirstLetter(str) {
    if (str.length === 0) return str; // Check if the string is empty
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function addCartItem(itemName,price) {

    const cartContainer = document.getElementById('cartContainer');

    // Clear the container first
    cartContainer.innerHTML = '';

    itemName = capitalizeFirstLetter(itemName)

    const popup = document.createElement('div');
    popup.className = 'popup visible'; // Add initial classes
    popup.textContent = `Added ${itemName} to cart! x1`;

    // Append it to the body
    document.body.appendChild(popup);

    // Hide the popup after 3 seconds
    setTimeout(() => {
        popup.classList.remove('visible');
        popup.classList.add('hidden');
    }, 3000);

    if (itemName in cartHash) {  // Use 'in' to check if item exists
        cartHash[itemName].quantity += 1;
    } else {
        cartHash[itemName] = { price, quantity: 1 };
    }
    window.console.log(cartHash)
    updateTotal();
}

function incrementQuantity(itemName) {
    if (cartHash[itemName]) {
        cartHash[itemName].quantity += 1; // Increase quantity by 1
        displayCart(); // Update displayed cart
    }
}

function decrementQuantity(itemName) {
    if (cartHash[itemName] && cartHash[itemName].quantity > 1) {
        cartHash[itemName].quantity -= 1; // Decrease quantity by 1 (if greater than 1)
        displayCart(); // Update displayed cart
    }
}

function updateTotal() {
    let total = 0;

    // Loop through each item in the cart and sum the total
    for (const itemName in cartHash) {
        const item = cartHash[itemName];
        total += item.price * item.quantity;
    }

    // Update the total in the submenu
    document.getElementById('totalAmount').innerText = `Total: $${total.toFixed(2)}`;
}


function displayCart() {
    // Get the cart from localStorage (or use the global cart object)
    // Get the container where we want to display the cart
    const cartContainer = document.getElementById('cartContainer');

    // Clear the container first
    cartContainer.innerHTML = '';

    // Check if the cart is empty
    if (Object.keys(cartHash).length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    // Loop through the cart and create an HTML element for each item
    for (let itemName in cartHash) {
        itemName = capitalizeFirstLetter(itemName)
        const item = cartHash[itemName];

        // Create a new div to hold the item details
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        // Add item name, price, and quantity
        cartItem.innerHTML = `
            <strong>${itemName}</strong><br>
            Price: $${item.price}<br>
            Quantity: ${item.quantity}<br>
            <button class="decrement" data-item="${itemName}">-</button>
            ${item.quantity}
            <button class="increment" data-item="${itemName}">+</button><br>
            Total: $${(item.price * item.quantity).toFixed(2)}
        `;

        // Attach event listeners to the buttons after the cartItem is created
        const decrementButton = cartItem.querySelector('.decrement');
        const incrementButton = cartItem.querySelector('.increment');

        // Increment button click handler
        decrementButton.addEventListener('click', function() {
            decrementQuantity(itemName);
        });

        // Decrement button click handler
        incrementButton.addEventListener('click', function() {
            incrementQuantity(itemName);
        });

        // Append the item to the cart container
        cartContainer.appendChild(cartItem);
    }
    updateTotal()
}

const appetizerButton = document.getElementById("appetizer-button");
const mainCourseButton = document.getElementById("main-course-button");
const dessertButton = document.getElementById("dessert-button");

appetizerButton.addEventListener("click", () => {
    let items = document.querySelectorAll('.main-menu-item');
    items.forEach((item) => {
        item.style.display = "none";
    })
    items = document.querySelectorAll('.appetizer-menu-item');
    items.forEach((item) => {
        item.style.display = "block";
    })
    items = document.querySelectorAll('.dessert-menu-item');
    items.forEach((item) => {
        item.style.display = "none";
    })
    clearCart();
});

mainCourseButton.addEventListener("click", () => {
    //displayMenuItems(result,"Main Course")
    let items = document.querySelectorAll('.main-menu-item');
    items.forEach((item) => {
        item.style.display = "block";
    })
    items = document.querySelectorAll('.appetizer-menu-item');
    items.forEach((item) => {
        item.style.display = "none";
    })
    items = document.querySelectorAll('.dessert-menu-item');
    items.forEach((item) => {
        item.style.display = "none";
    })
    clearCart();
});

dessertButton.addEventListener("click", () => {
    let items = document.querySelectorAll('.main-menu-item');
    items.forEach((item) => {
        item.style.display = "none";
    })
    items = document.querySelectorAll('.dessert-menu-item');
    items.forEach((item) => {
        item.style.display = "block";
    })
    items = document.querySelectorAll('.appetizer-menu-item');
    items.forEach((item) => {
        item.style.display = "none";
    })
    clearCart();
});


let pizzaButton = null;
if (document.getElementById('pizza-button')) {
    pizzaButton = document.getElementById('pizza-button');
    pizzaButton.addEventListener('click', () => {
        addCartItem("pizza",13);
    })
}

let lasagnaButton = null;
if (document.getElementById('lasagna-button')) {
    lasagnaButton = document.getElementById('lasagna-button');
    lasagnaButton.addEventListener('click', () => {
        addCartItem("lasagna",14);
    })
}

let alfredoButton = null;
if (document.getElementById('alfredo-button')) {
    alfredoButton = document.getElementById('alfredo-button');
    alfredoButton.addEventListener('click', () => {
        addCartItem("alfredo",15);
    })
}

let sandwichButton = null;
if (document.getElementById('sandwich-button')) {
    sandwichButton = document.getElementById('sandwich-button');
    sandwichButton.addEventListener('click', () => {
        addCartItem("sandwich",8);
    })
}

let spaghettiButton = null;
if (document.getElementById('spaghetti-button')) {
    spaghettiButton = document.getElementById('spaghetti-button');
    spaghettiButton.addEventListener('click', () => {
        addCartItem("spaghetti",12);
    })
}

let breadsticksButton = null;
if (document.getElementById('breadsticks-button')) {
    breadsticksButton = document.getElementById('breadsticks-button');
    breadsticksButton.addEventListener('click', () => {
        addCartItem("breadsticks",4);
    })
}

let meatballsButton = null;
if (document.getElementById('meatballs-button')) {
    meatballsButton = document.getElementById('meatballs-button');
    meatballsButton.addEventListener('click', () => {
        addCartItem("meatballs",5);
    })
}

let prosciuttoButton = null;
if (document.getElementById('prosciutto-button')) {
    prosciuttoButton = document.getElementById('prosciutto-button');
    prosciuttoButton.addEventListener('click', () => {
        addCartItem("prosciutto",5);
    })
}

let mozzarellaButton = null;
if (document.getElementById('mozzarella-button')) {
    mozzarellaButton = document.getElementById('mozzarella-button');
    mozzarellaButton.addEventListener('click', () => {
        addCartItem("mozzarella",4);
    })
}

let cheesecakeButton = null;
if (document.getElementById('cheesecake-button')) {
    cheesecakeButton = document.getElementById('cheesecake-button');
    cheesecakeButton.addEventListener('click', () => {
        addCartItem("cheesecake",7);
    })
}

let cannoliButton = null;
if (document.getElementById('cannoli-button')) {
    cannoliButton = document.getElementById('cannoli-button');
    cannoliButton.addEventListener('click', () => {
        addCartItem("cannoli",6);
    })
}

let macaronButton = null;
if (document.getElementById('macaron-button')) {
    macaronButton = document.getElementById('macaron-button');
    macaronButton.addEventListener('click', () => {
        addCartItem("macaron",7);
    })
}

let cartButton = null;
if (document.getElementById('cart-button')) {
    cartButton = document.getElementById('cart-button');
    cartButton.addEventListener('click', () => {
        hideAllMenuItems()
        displayCart()
        console.log(cartHash)
    })
}

let checkoutButton = null;
if (document.getElementById('checkout-button')) {
    cartButton = document.getElementById('checkout-button');
    cartButton.addEventListener('click', () => {
        checkoutItems();
    })
}




window.onload = function() {
    hideAllMenuItems()
};
