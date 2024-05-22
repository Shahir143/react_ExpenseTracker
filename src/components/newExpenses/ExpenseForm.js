import React,{ useState} from 'react';
import './ExpenseForm.css'

const ExpenseForm =(props)=>{
    const [enteredTitle,setTitle]=useState('');
    const [enteredAmount,setAmount]=useState('');
    const [enteredDate,setDate]=useState('');

    const ChangeTitleHandler=(e)=>{
        setTitle(e.target.value);
    }

    const ChangeDateHandler=(e)=>{
        setDate(e.target.value);
    }
    
    const ChangeAmountHandler=(e)=>{
        setAmount(e.target.value);
    }

    const submitHandler =(e)=>{
        e.preventDefault();

        const ExpenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        }
        props.onSaveExpenseData(ExpenseData);
        setTitle('');
        setAmount("");
        setDate("");
    }
    return (<form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={ChangeTitleHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min="0.01" step="0.01" value={enteredAmount} onChange={ChangeAmountHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min="20-01-01" max={2023-12-30} value={enteredDate} onChange={ChangeDateHandler}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type="submit">Add Expense</button>
        </div>
    </form>)
}

export default ExpenseForm;