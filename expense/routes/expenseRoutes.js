const express = require('express');
const expenseController = require('../controllers/expenseController');

const router = express.Router();


router.get('/', expenseController.getHome);

router.post('/add-expense', expenseController.postAddExpense);

router.get('/get-expenses', expenseController.getExpenses);

router.post('/delete-expense', expenseController.postDeleteExpense);

module.exports = router;