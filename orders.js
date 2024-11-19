
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


window.onload = function() {
    fetchOrders()
};
