import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store/store';

export const IncomeList = () => {
  const incomeHistory = useSelector(state => state.incomeHistory);
  const dispatch = useDispatch();

  return (
    <div className="transactions transactions-income">
      <h2>Transaction History:</h2>
      {incomeHistory.length ? (
        <ul className="transaction-list">
          {incomeHistory.map(income => (
            <li className="transaction" key={income.id}>
              <span className="transaction-text">{income.title}</span>
              <span className="transaction-amount">{`$${income.amount}`}</span>
              <button
                type="button"
                onClick={() => dispatch(actions.deleteIncome(income.id))}
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
