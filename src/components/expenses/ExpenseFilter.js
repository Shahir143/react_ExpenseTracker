import React from 'react';
import './ExpenseFilter.css'
const ExpensesFilter=(props)=>{
    const onDropHandler=(e)=>{
        props.onChangeFilter(e.target.value);
    }
    return (<div className="expenses-filter">
        <div className="expenses-filter__control">
            <label>Filter By Year</label>
            <select value={props.selected} onChange={onDropHandler}>
                <option value='2024'>2024</option>
                <option value='2023'>2023</option>
                <option value='2022'>2022</option>
                <option value='2021'>2021</option>
                <option value='2020'>2020</option>
                <option value='2019'>2019</option>
            </select>
        </div>
    </div>
    );
}

export default  ExpensesFilter;