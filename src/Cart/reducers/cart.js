import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from '../constants/Cart';

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { payload: id } = action;
      return {
        ...state,
        [id]: (state[id] || 0) + 1,
      };
    }
    case REMOVE_FROM_CART: {
      const { payload: id } = action;
      return {
        ...state,
        [id]: (state[id] || 1) - 1,
      };
    }
    case EMPTY_CART:
      return {};
    default:
      return state;
  }
};
