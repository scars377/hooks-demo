import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from '../constants/Cart';

export const addToCart = id => ({
  type: ADD_TO_CART,
  payload: id,
});

export const removeFromCart = id => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

export const emptyCart = id => ({
  type: EMPTY_CART,
});
