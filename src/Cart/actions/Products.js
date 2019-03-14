import * as api from '../api';

import { SET_PRODUCTS } from '../constants/Products';

export const fetchProducts = () => async dispatch => {
  const products = await api.fetchProducts();
  dispatch({
    type: SET_PRODUCTS,
    payload: products,
  });
};
