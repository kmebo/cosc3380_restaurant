async function fetchPreorder() {
    const response = await fetch("http://localhost:3000/preorder");
    const preorders = await response.json();
    console.log(preorders);
    const table = document.getElementById("preorderTable");
    table.innerHTML = "";
    preorders.forEach((preorder) => {
      const row = `<tr>
                        <td>${preorder.obj_id}</td>
                        <td>${preorder.name}</td>
                        <td>${preorder.quantity}</td>
                    </tr>`;
      table.innerHTML += row;
    });
}
async function updateDishQuantity(){
    const obj_id = document.getElementById('dishIdUpdate').value;
    const quantity = document.getElementById('newQuantity').value;
    await fetch(`http://localhost:3000/preorder/${obj_id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quantity })
    });
    fetchPreorder();
}

window.onload = function() {
    fetchPreorder();
};
