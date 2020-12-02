import React from 'react';
import { useSelector } from 'react-redux';

export const Balance = () => {
  const totalBudget = useSelector(state => state.totalBudget);
  const totalIncome = useSelector(state => state.totalIncome);
  const totalExpense = useSelector(state => state.totalExpense);

  return (
    <div className="balance">
      <h2>Your Balance</h2>
      <h3>{`$${totalBudget}`}</h3>
      <div className="income-expense">
        <div className="plus">
          <h3>Income</h3>
          <p>{`+$${totalIncome}`}</p>
        </div>
        <div className="minus">
          <h3>Expenses</h3>
          <p>{`-$${totalExpense}`}</p>
        </div>
      </div>
    </div>
  );
};
