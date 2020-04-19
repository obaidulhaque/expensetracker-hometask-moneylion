import {ADD_FOOD, DELETE_FOOD} from '../actions/types';


const initialState = {
    foodList: [],
    totalAmt: 0
  }
  
  const foodReducer = (state = initialState, action) => {
    
    switch (action.type) {
      case ADD_FOOD:
        return {
          ...state,
          foodList: state.foodList.concat({
            key: Math.random(),
            name: action.data,
            price: action.price
          }),
          totalAmt: Number((state.totalAmt + Number(action.price)).toFixed(2))
        };
      case DELETE_FOOD:
        //console.log("Delete Food..........");
        const tmp = state.foodList.filter((item) => item.key == action.key)
        const val = Number(tmp.map((data) => data.price))
        //console.log(val)

        return {
          ...state,
          foodList: state.foodList.filter((item) =>
            item.key !== action.key),
            totalAmt: Number((state.totalAmt - val).toFixed(2))
        };
      default:
        return state;
    }
  }
  
  export default foodReducer;