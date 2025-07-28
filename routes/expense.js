// require express and it's router component
const express = require('express');
const { create, expenseByDate, expenseById, read, update } = require('../controllers')
const router = express.Router();

// require the middlewares and callback functions from the controller directory

// Create POST route to create an expense
router.post('/expense/create', create);

// Create GET route to read an expense
router.get('/expense/:id', expenseById, read);
// Create PUT route to update an expense
router.put('/expense/update/:id', expenseById, update)
// Create DELETE route to remove an expense
router.delete('/expense/remove/:id', remove);
// Create GET route to read a list of expenses
router.get('/expense/:date', expenseByDate, read);

module.exports = router;
