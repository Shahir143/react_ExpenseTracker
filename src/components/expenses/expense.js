import React,{ useState } from 'react';
import ExpensesFilter  from './ExpenseFilter.js'
import ExpenseList from './expenseList';

import Card from '../UI/card.js';
import './expense.css';

const Expense=(props)=>{
    const [filteredYear,setYear]=useState('2023');

    const filterChangeHandler=(selectedYear)=>{
        setYear(selectedYear);
    }

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
      });
    
      
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter 
                selected={filteredYear} 
                onChangeFilter={filterChangeHandler}/>
                <ExpenseList items={ filteredExpenses }></ExpenseList>
    </Card>
        </div>
    )
}

export default Expense;