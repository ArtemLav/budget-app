import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store/store';

export const ExpenseList = () => {
  const expenseHistory = useSelector(state => state.expenseHistory);
  const dispatch = useDispatch();

  return (
    <div className="transactions transactions-expense">
      <h2>Transaction History:</h2>
      {expenseHistory.length ? (
        <ul className="transaction-list">
          {expenseHistory.map(expense => (
            <li className="transaction" key={expense.id}>
              <span className="transaction-text">{expense.title}</span>
              <span className="transaction-amount">{`$${expense.amount}`}</span>
              <button
                type="button"
                onClick={() => dispatch(actions.deleteExpense(expense.id))}
                className="delete-btn"
              >
                <i className="fas fa-trash" />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <h2><em>No history Yet</em></h2>
      )}
    </div>
  );
};
