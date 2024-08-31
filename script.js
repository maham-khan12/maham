// script.js

// Array to store expenses
let expenses = [];

// Select necessary DOM elements
const addExpenseBtn = document.getElementById('add-expense-btn');
const expenseTableBody = document.querySelector('#expense-table tbody');

// Function to add a new expense
function addExpense() {
    // Get input values
    const date = document.getElementById('date').value;
    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;
    const amount = document.getElementById('amount').value;

    // Validate inputs
    if (!date || !description || !amount) {
        alert("Please fill in all fields.");
        return;
    }

    // Create a new expense object
    const expense = {
        date: date,
        description: description,
        category: category,
        amount: parseFloat(amount).toFixed(2) // Format amount to 2 decimal places
    };

    // Add expense to the list
    expenses.push(expense);

    // Update the expense table
    updateTable();

    // Clear input fields
    document.getElementById('date').value = '';
    document.getElementById('description').value = '';
    document.getElementById('amount').value = '';
}

// Function to update the table with the latest expenses
function updateTable() {
    // Clear existing rows
    expenseTableBody.innerHTML = '';

    // Loop through expenses and create a row for each
    expenses.forEach((expense, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${expense.date}</td>
            <td>${expense.description}</td>
            <td>${expense.category}</td>
            <td>$${expense.amount}</td>
            <td><button class="delete-btn" onclick="deleteExpense(${index})">Delete</button></td>
        `;

        // Append the row to the table body
        expenseTableBody.appendChild(row);
    });
}

// Function to delete an expense by index
function deleteExpense(index) {
    // Remove the expense from the array
    expenses.splice(index, 1);

    // Update the table to reflect the changes
    updateTable();
}

// Add event listener to the add expense button
addExpenseBtn.addEventListener('click', addExpense);
