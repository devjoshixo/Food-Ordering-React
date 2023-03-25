import { Fragment, useContext, useEffect, useState } from 'react';
import classes from './CartModal.module.css';
import CartContext from '../../context/CartContext';
import CartItems from './CartItems';

const CartModal = () => {
  const [isClicked, setIsClicked] = useState(false);
  const a = useContext(CartContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsClicked((prevState) => !prevState);
    }, 300);

    return () => {
      setIsClicked((prevState) => !prevState);
      clearTimeout(timer);
    };
  }, [a.ModalTrigger]);

  const cartList = a.items.map((item) => {
    return (
      <CartItems
        key={item.name}
        name={item.name}
        price={item.price}
        amount={item.amount}
      />
    );
  });

  return (
    <Fragment>
      <div className={classes.backdrop} onClick={a.ModalTrigger}></div>
      <section
        className={`${classes.card} ${isClicked ? classes.popdown : ''}`}
      >
        {cartList.length < 1 ? (
          ''
        ) : (
          <div className={classes.cartList}>{cartList}</div>
        )}
        <div className={classes.totalAmount}>
          <h2>Total Amount</h2>
          <h2>${a.totalAmount.toFixed(2)}</h2>
        </div>
        <div className={classes.actionButton}>
          <button onClick={a.ModalTrigger}>Close</button>
          <button>Order</button>
        </div>
      </section>
    </Fragment>
  );
};

export default CartModal;
