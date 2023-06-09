import MealItem from './MealItem';

import classes from './AvailableMeal.module.css';
import { useEffect } from 'react';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const AvailableMeal = () => {
  // const [firstTime,setFirstTime] = useState(false);

  // useEffect(() => {
  //   const timer =
  // },[])
  const mealList = DUMMY_MEALS.map((meal) => {
    return (
      <MealItem
        id={meal.id}
        key={meal.id + 1}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });

  return <div className={classes.card}>{mealList}</div>;
};

export default AvailableMeal;
