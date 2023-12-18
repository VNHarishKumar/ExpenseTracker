import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';

const ExpenseList = (props) =>{

    // let expenseContent = <p>No expense found</p>;

  if (props.expenses.length === 0)
  {
    return <h2 className='expense-list__fallback'>Found No expense</h2>
  }

  return (
    <ul className=''>
        { props.expenses.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)
  }
    </ul>
  )
};

export default ExpenseList;