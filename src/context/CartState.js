import { useState } from 'react';
import CartContext from './CartContext';

const CartState = (props) => {
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const ModalTrigger = () => {
    setShowModal((prevState) => !prevState);
  };

  const singleItemAdder = (meal) => {
    setTotalItems((prevAmount) => prevAmount + 1);
    setItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.name == meal) {
          item.amount += 1;
          amountAdder(1, item.price);
          return item;
        }
        return item;
      });
    });
  };

  const singleItemRemover = (meal) => {
    setTotalItems((prevAmount) => prevAmount - 1);
    setItems((prevState) => {
      const newState = prevState.filter((item) => {
        if (item.name == meal) {
          if (item.amount > 1) {
            item.amount -= 1;
            amountRemover(1, item.price);
            return item;
          } else {
            amountRemover(1, item.price);
          }
        } else {
          return item;
        }
      });
      return newState;
    });
  };

  const amountAdder = (amount, price) => {
    setTotalAmount((prevAmount) => {
      return (prevAmount += parseFloat(amount) * parseFloat(price));
    });
  };
  const amountRemover = (amount, price) => {
    setTotalAmount((prevAmount) => {
      return (prevAmount -= parseFloat(amount) * parseFloat(price));
    });
  };

  const addItems = (meal) => {
    setItems((prevState) => {
      setTotalItems((prevstate) => prevstate + parseInt(meal.amount));
      let flag = 1;
      if (prevState.length > 0) {
        prevState.map((item) => {
          if (item.name === meal.name) {
            item.amount += parseFloat(meal.amount);
            amountAdder(meal.amount, meal.price);
            flag = 0;
          }
          return 0;
        });
        if (flag) {
          const newObj = {
            name: meal.name,
            price: meal.price,
            amount: parseFloat(meal.amount),
          };
          const newState = [...prevState, newObj];
          amountAdder(meal.amount, meal.price);
          return newState;
        }
        return prevState;
      } else {
        const newObj = {
          name: meal.name,
          price: meal.price,
          amount: parseFloat(meal.amount),
        };
        amountAdder(meal.amount, meal.price);
        return [newObj];
      }
    });
  };
  return (
    <CartContext.Provider
      value={{
        items,
        totalItems,
        addItems,
        totalAmount,
        ModalTrigger,
        showModal,
        singleItemRemover,
        singleItemAdder,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState;
