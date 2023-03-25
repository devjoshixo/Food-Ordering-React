import { useState, useContext, useEffect } from 'react';
import CartContext from '../../../context/CartContext';
import classes from './MealItem.module.css';

const MealItem = (props) => {
  const [amount, setAmount] = useState(1);

  const amountHandler = (event) => {
    setAmount(event.target.value);
  };
  const a = useContext(CartContext);
  const addHandler = () => {
    const meal = {
      name: props.name,
      price: props.price,
      amount: amount,
    };
    a.addItems(meal);
  };

  useEffect(() => {}, [a.items, a.totalAmount]);

  return (
    <div>
      <div className={classes.mealitem}>
        <div className={classes.meal}>
          <h2>{props.name}</h2>
          <p className={classes.description}>{props.description}</p>
          <p className={classes.price}>${props.price}</p>
        </div>

        <div className={classes.cartadder}>
          <div>
            <label>Amount</label>
            <input
              value={amount}
              min="1"
              max="20"
              type="number"
              onChange={amountHandler}
            ></input>
          </div>
          <button onClick={addHandler}>+ Add</button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default MealItem;
