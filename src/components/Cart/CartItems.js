import { Fragment, useContext } from 'react';
import CartContext from '../../context/CartContext';
import classes from './CartItems.module.css';

const CartItems = (props) => {
  const cart = useContext(CartContext);
  const addHandler = () => {
    cart.singleItemAdder(props.name);
  };
  const removeHandler = () => {
    cart.singleItemRemover(props.name);
  };

  return (
    <Fragment>
      <div className={classes.mealitem}>
        <div className={classes.meal}>
          <h2 className={classes.name}>{props.name}</h2>
          <div className={classes.price}>
            <p>${props.price}</p>
            <p className={classes.amount}>x{props.amount}</p>
          </div>
        </div>

        <div className={classes.cartadder}>
          <button className={classes.removeItem} onClick={removeHandler}>
            -
          </button>
          <button className={classes.addItem} onClick={addHandler}>
            +
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default CartItems;
