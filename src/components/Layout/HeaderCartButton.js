import { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../context/CartContext.js';
import classes from './HeaderCartButton.module.css';
const HeaderCartButton = () => {
  const cart = useContext(CartContext);
  return (
    <div onClick={cart.ModalTrigger} className={classes['cart-card']}>
      <div className={classes.cart}>
        <CartIcon />
      </div>
      <h3>Your Cart</h3>
      <p className={classes.totalItems}>{cart.totalItems}</p>
    </div>
  );
};

export default HeaderCartButton;
