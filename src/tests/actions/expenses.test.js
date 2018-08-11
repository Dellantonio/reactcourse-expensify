import {addExpense, editExpense, removeExpense } from '../../actions/expenses';


test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc',
    })
});

test('edit expense test', () => {
    const action = editExpense('XLZ', { note: 'New note value' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'XLZ',
        updates: { 
            note: 'New note value' 
        }
    })
})

test('add expense test', () => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was last month rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData, 
            id: expect.any(String)
        }
    });
});

test('add expense with no data', () => {
    const expenseData = {
            description: '' , 
            note: '' , 
            amount: 0, 
            createdAt: 0 
        };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })    
})