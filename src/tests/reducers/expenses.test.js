import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


test('should set default state', () => {
    const state = expensesReducer( undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };

    const state = expensesReducer( expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: 4
    };

    const state = expensesReducer( expenses, action);
    expect(state).toEqual(expenses);
});

test('should add expense', () => {
    const expense = {
        id: '5', 
        description: 'Test',
        note: 'testing',
        amount: 5000,
        createdAt: 4000
    };
    
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };

    const state = expensesReducer( expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit expense', () => {
    const expense = {
        amount: 5000,
        createdAt: 4000
    };
    
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: expense
    };

    const state = expensesReducer( expenses, action);
    expect(state[1].amount).toBe(expense.amount);
});

test('should not edit expense', () => {
    const expense = {
        amount: 5000,
        createdAt: 4000
    };
    
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: expense
    };

    const state = expensesReducer( expenses, action);
    expect(state).toEqual(expenses);
});


