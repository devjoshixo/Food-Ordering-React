import { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../context/CartContext.js';
import classes from './HeaderCartButton.module.css';
const HeaderCartButton = () => {
  const [isClicked, setIsClicked] = useState(false);
  const cart = useContext(CartContext);

  useEffect(() => {
    if (cart.totalItems == 0) {
      return;
    }
    const timer = setTimeout(() => {
      setIsClicked((prevState) => !prevState);
    }, 300);

    return () => {
      clearTimeout(timer);
      setIsClicked((prevState) => !prevState);
    };
  }, [cart.totalItems]);
  return (
    <div
      onClick={cart.ModalTrigger}
      className={`${classes['cart-card']} ${isClicked ? classes.popup : ''}`}
    >
      <div className={classes.cart}>
        <CartIcon />
      </div>
      <h3>Your Cart</h3>
      <p className={classes.totalItems}>{cart.totalItems}</p>
    </div>
  );
};

export default HeaderCartButton;
