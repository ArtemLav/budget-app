import React from 'react';

export const ExpenseList = () => (
  <div className="transactions transactions-expense">
    <h2>Transaction History</h2>
    <ul className="transaction-list">
      <li className="transaction">
        <span className="transaction-text">Rent</span>
        <span className="transaction-amount">$500</span>
        <button type="button" className="delete-btn">
          <i className="fas fa-trash" />
        </button>
      </li>
    </ul>
  </div>
);
