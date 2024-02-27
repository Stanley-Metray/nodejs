

const expenseForm = document.getElementById('expense-form');

if (expenseForm) {
    expenseForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/add-expense', new FormData(e.target), {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.data;
            setTableData(data);
        } catch (error) {
            console.log(error);
        }
    });
}


document.addEventListener('DOMContentLoaded', async (e) => {
    try {
        const response = await axios.get('/get-expenses');
        const data = await response.data;
        setTableData(data);
    } catch (error) {
        console.log(error);
    }
});


async function deleteExpense(event) {
    try {
        const response = await axios.post('/delete-expense', { id: event.target.id }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.data;
        setTableData(data);
    } catch (error) {
        console.log(error);
    }
}

function setTableData(data) {
    let html = `<tr>
            <th>Sl No</th>
            <th>Item</th>
            <th>Price</th>
            <th>Description</th>
            <th>Actions</th>
            </tr>`;
        let totalExpense = 0;
        
    data.forEach((item, index) => {
            totalExpense += item.price;
        html += `<tr>
                    <td>${index + 1}</td>
                    <td>${item.item}</td>
                    <td>${item.price}</td>
                    <td>${item.description}</td>
                    <td><button onclick='deleteExpense(event)' class='btn btn-danger btn-sm' id=${item.id}>Delete</button></td>
                </tr>`;
    });

    document.getElementById('expense-table').innerHTML = html;
    document.getElementById('total').innerHTML = `<h5>Total Expenses: ${totalExpense}</h5>`;
}