import { createStore } from 'redux';

const NEW_INCOME = 'NEW_INCOME';
const NEW_EXPENSE = 'NEW_EXPENSE';
const DELETE_INCOME = 'DELETE_INCOME';
const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const actions = {
  newIncome: (title, value) => ({
    type: NEW_INCOME,
    title,
    value,
  }),
  newExpense: (title, value) => ({
    type: NEW_EXPENSE,
    title,
    value,
  }),
  deleteIncome: id => ({
    type: DELETE_INCOME,
    id,
  }),
  deleteExpense: id => ({
    type: DELETE_EXPENSE,
    id,
  }),
};

const initialState = {
  totalBudget: 0,
  totalIncome: 0,
  totalExpense: 0,
  incomeHistory: [],
  expenseHistory: [],
};

const budgetReducer = (state, action) => {
  switch (action.type) {
    case NEW_INCOME: {
      return {
        ...state,
        totalBudget: state.totalBudget + action.value,
        totalIncome: state.totalIncome + action.value,
        incomeHistory: [...state.incomeHistory, {
          id: +new Date(),
          title: action.title,
          amount: action.value,
        }],
      };
    }

    case NEW_EXPENSE: {
      return {
        ...state,
        totalBudget: state.totalBudget - action.value,
        totalExpense: state.totalExpense + action.value,
        expenseHistory: [...state.expenseHistory, {
          id: +new Date(),
          title: action.title,
          amount: action.value,
        }],
      };
    }

    case DELETE_INCOME: {
      return {
        ...state,
        totalBudget: state.totalBudget - state.incomeHistory
          .find(income => income.id === action.id).amount,
        totalIncome: state.totalIncome - state.incomeHistory
          .find(income => income.id === action.id).amount,
        incomeHistory: state.incomeHistory
          .filter(income => income.id !== action.id),
      };
    }

    case DELETE_EXPENSE: {
      return {
        ...state,
        totalBudget: state.totalBudget + state.expenseHistory
          .find(expense => expense.id === action.id).amount,
        totalExpense: state.totalExpense - state.expenseHistory
          .find(expense => expense.id === action.id).amount,
        expenseHistory: state.expenseHistory
          .filter(expense => expense.id !== action.id),
      };
    }

    default: {
      return state;
    }
  }
};

export const store = createStore(budgetReducer, initialState);
