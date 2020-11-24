import React from 'react';

export const IncomeList = () => (
  <div className="transactions transactions-income">
    <h2>Transaction History</h2>
    <ul className="transaction-list">
      <li className="transaction">
        <span className="transaction-text">Salary</span>
        <span className="transaction-amount">$5000</span>
        <button type="button" className="delete-btn">
          <i className="fas fa-trash" />
        </button>
      </li>
    </ul>
  </div>
);
