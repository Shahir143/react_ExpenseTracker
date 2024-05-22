import './expensesItem.css'
import './expenseDate'
import ExpenseDate from './expenseDate';
import Card from '../UI/card'

function ExpenseItem(props){
    return (<Card className="expense-item">
    <ExpenseDate data={props.date}></ExpenseDate>
    <div className="expense-item__description">
      <h2>{props.title}</h2>
      <div className="expense-item__price">
        {props.amount}
      </div>
    </div>
  </Card>
  )
}

export default ExpenseItem;