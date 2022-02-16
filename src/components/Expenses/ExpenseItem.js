import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div>
        <h2 className="expense-item__description">
          {props.title}
          <div className="expense-item__price">${props.amount}</div>
        </h2>
      </div>
    </Card>
  );
}

export default ExpenseItem;
