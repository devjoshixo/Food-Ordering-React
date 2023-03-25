import { Fragment, useContext, useState } from 'react';
import Header from './components/Layout/Header';
import Menu from './components/Meals/Menu';
import CartState from './context/CartState';
import CartModal from './components/Cart/CartModal';
import CartContext from './context/CartContext';

function App() {
  const items = useContext(CartContext);
  return (
    <Fragment>
      {items.showModal ? <CartModal /> : ''}
      <Header />
      <main>
        <Menu />
      </main>
    </Fragment>
  );
}

export default App;
