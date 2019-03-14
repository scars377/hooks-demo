import { SET_PRODUCTS } from '../constants/Products';

export default (state = [], action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
};
