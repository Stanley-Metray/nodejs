const path = require('path');
const Expense = require('../models/expense');

const expense = new Expense();
expense.connect();
module.exports.getHome = (req, res) => {
    res.sendFile(path.join(__dirname, "../views", "index.html"));
}

module.exports.postAddExpense = async (req, res) => {
    try {
        await expense.addExpense(req.body);
        const result = await expense.getExpenses();
        res.send(result);
    } catch (error) {
        console.log(error);
    }
}

module.exports.getExpenses = async (req, res) => {
    try {
        const result = await expense.getExpenses();
        res.send(result);
    } catch (error) {
        console.log(error);
    }
}

module.exports.postDeleteExpense = async(req,res)=>{
    try {
           await expense.deleteExpense(req.body.id);
           const result = await expense.getExpenses();
           res.send(result);       
    } catch (error) {
        console.log(error);
    }
}