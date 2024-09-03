
// MAHAM

let expenses = [];


const addExpenseBtn = document.getElementById('add-expense-btn');
const expenseTableBody = document.querySelector('#expense-table tbody');



function addExpense() {
    
    const date = document.getElementById('date').value;
    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;
    const amount = document.getElementById('amount').value;

    
    if (!date || !description || !amount) {
        alert("Please fill in all fields.");
        return;
    }

    
    const expense = {
        date: date,
        description: description,
        category: category,
        amount: parseFloat(amount).toFixed(2) // Format amount to 2 decimal places
    };


    expenses.push(expense);

    
    updateTable();

    
    document.getElementById('date').value = '';
    document.getElementById('description').value = '';
    document.getElementById('amount').value = '';
}


function updateTable() {
    
    expenseTableBody.innerHTML = '';

    
    expenses.forEach((expense, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${expense.date}</td>
            <td>${expense.description}</td>
            <td>${expense.category}</td>
            <td>$${expense.amount}</td>
            <td><button class="delete-btn" onclick="deleteExpense(${index})">Delete</button></td>
        `;

        
        expenseTableBody.appendChild(row);
    });
}


function deleteExpense(index) {

    expenses.splice(index, 1);

    
    updateTable();
}


addExpenseBtn.addEventListener('click', addExpense);
