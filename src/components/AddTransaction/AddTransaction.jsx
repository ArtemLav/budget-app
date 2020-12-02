import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../../store/store';

export const AddTransaction = () => {
  const dispatch = useDispatch();
  const [incomeTitle, setIncomeTitle] = useState('');
  const [incomeAmount, setIncomeAmount] = useState('');
  const [expenseTitle, setExpenseTitle] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');

  const addNewIncome = (event) => {
    event.preventDefault();

    if (!incomeTitle || !incomeAmount) {
      return;
    }

    dispatch(actions.newIncome(incomeTitle, +incomeAmount));
    setIncomeTitle('');
    setIncomeAmount('');
  };

  const addNewExpense = (event) => {
    event.preventDefault();

    if (!expenseTitle || !expenseAmount) {
      return;
    }

    dispatch(actions.newExpense(expenseTitle, +expenseAmount));
    setExpenseTitle('');
    setExpenseAmount('');
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={addNewIncome}>
        <div className="input-group income">
          <input
            type="text"
            value={incomeTitle}
            onChange={event => setIncomeTitle(event.target.value)}
            placeholder="Add Income..."
            autoComplete="off"
          />
          <input
            type="number"
            value={incomeAmount}
            onChange={event => setIncomeAmount(event.target.value)}
            placeholder="Amount"
            autoComplete="off"
          />
          <input
            type="submit"
            value="Add Income"
          />
        </div>
      </form>

      <form onSubmit={addNewExpense}>
        <div className="input-group expense">
          <input
            type="text"
            value={expenseTitle}
            onChange={event => setExpenseTitle(event.target.value)}
            placeholder="Add Expense..."
            autoComplete="off"
          />
          <input
            type="number"
            value={expenseAmount}
            onChange={event => setExpenseAmount(event.target.value)}
            placeholder="Amount"
            autoComplete="off"
          />
          <input
            type="submit"
            value="Add Expense"
          />
        </div>
      </form>
    </div>
  );
};
