document.getElementById("add-expense").addEventListener("click", function () {
  const date = document.getElementById("expense-date").value;
  const name = document.getElementById("expense-name").value;
  const amount = document.getElementById("expense-amount").value;
  const category = document.getElementById("expense-category").value;
  const description = document.getElementById("expense-description").value;

  if (date && name && amount && category && description) {
    // Add the expense to the list
    const expenseList = document.getElementById("expense-list");
    const newRow = document.createElement("tr");

    // Adding row with delete button
    newRow.innerHTML = `
      <td class="px-4 py-2">${date}</td>
      <td class="px-4 py-2">${name}</td>
      <td class="px-4 py-2">$<span class="amount">${amount}</span></td>
      <td class="px-4 py-2">${category}</td>
      <td class="px-4 py-2">${description}</td>
      <td class="px-4 py-2">
        <button class="delete-expense bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">Delete</button>
      </td>
    `;

    expenseList.appendChild(newRow);

    // Update the subtotal
    updateSubtotal(Number(amount));

    // Clear input fields
    document.getElementById("expense-date").value = '';
    document.getElementById("expense-name").value = '';
    document.getElementById("expense-amount").value = '';
    document.getElementById("expense-category").value = 'Food';
    document.getElementById("expense-description").value = '';

    // Add delete functionality
    newRow.querySelector(".delete-expense").addEventListener("click", function () {
      const amountToRemove = Number(newRow.querySelector(".amount").innerText);
      removeExpense(newRow, amountToRemove);
    });

  } else {
    alert("Please fill in all fields.");
  }
});

let subtotal = 0;

function updateSubtotal(amount) {
  subtotal += amount;
  document.getElementById("subtotal").innerText = subtotal.toFixed(2);
}

function removeExpense(row, amount) {
  // Remove the row
  row.remove();
  
  // Update the subtotal
  subtotal -= amount;
  document.getElementById("subtotal").innerText = subtotal.toFixed(2);
}
