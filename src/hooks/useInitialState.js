import { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    const newProduct = {
      key: state.cart.length,
      ...payload,
    };
    setState({
      ...state,
      cart: [...state.cart, newProduct],
    });
  };
  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((item) => item.key !== payload.key),
    });
  };

  return {
    addToCart,
    removeFromCart,
    state,
  };
};

export default useInitialState;
