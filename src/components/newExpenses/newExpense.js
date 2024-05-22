import ExpenseForm from './ExpenseForm';
import './newExpense.css';

const NewExpense = (props) => {
    const SaveExpenseDataHandler=(enteredData)=>{
        const ExpenseData={
            ...enteredData,
            id:Math.random().toString()
        }
        props.onAddExpense(ExpenseData);
    }

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler}/>
    </div>
  );
};

export default NewExpense;