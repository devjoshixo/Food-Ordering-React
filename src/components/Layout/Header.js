import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import styles from './Header.module.css';
import meals from '../../assets/meals.jpg';

const Header = () => {
  return (
    <div>
      <div className={styles.header}>
        <h2>ReactMeals</h2>
        <HeaderCartButton className={styles.actions} />
      </div>
      <div className={styles['main-image']}>
        <img src={meals} />
      </div>
    </div>
  );
};

export default Header;
