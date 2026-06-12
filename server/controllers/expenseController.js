const Expense = require("../models/Expense");

// Add Expense

const addExpense = async (req, res) => {
  try {
    const { title, amount, category } =
      req.body;

    const expense =
      await Expense.create({
        title,
        amount,
        category,
      });

    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Expenses

const getExpenses = async (
  req,
  res
) => {
  try {
    const expenses =
      await Expense.find().sort({
        createdAt: -1,
      });

    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Expense

const deleteExpense = async (
  req,
  res
) => {
  try {
    await Expense.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      message:
        "Expense Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addExpense,
  getExpenses,
  deleteExpense,
};