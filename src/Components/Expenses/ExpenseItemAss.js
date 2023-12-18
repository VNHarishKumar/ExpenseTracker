import Card from "../UI/Card";
import './ExpenseItemAss.css';
import ExpenseFilter from "./ExpenseFilter";
import React,{ useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";


const ExpenseItemAss = (props) =>
{
  const [filteredYear,setFilteredYear] = useState('2020');
  const yearBarHandler = (valYearBar) =>
  {
    setFilteredYear(valYearBar);
  };

  const filteredExpense = props.expenses.filter(expense => {return expense.date.getFullYear().toString() === filteredYear});

  

    return(
      <li>
      <Card className="expenses">
      <ExpenseFilter selected={filteredYear} yearBar={yearBarHandler} />
      <ExpenseChart expenses={filteredExpense} /> 
      <ExpenseList expenses={filteredExpense} /> 
      </Card>
      </li>
      

    );
}

export default ExpenseItemAss;