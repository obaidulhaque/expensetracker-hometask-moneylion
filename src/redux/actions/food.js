import {ADD_FOOD, DELETE_FOOD} from './types';

export const addFood = (food, price) => (
    {
      type: ADD_FOOD,
      data: food,
      price: price
    }
  );
  
  export const deleteFood = (key) => (
    {
      type: DELETE_FOOD,
      key: key
    }
  );