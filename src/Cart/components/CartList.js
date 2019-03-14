import React from 'react';
import styled from 'styled-components';
import CartListItem from '../containers/CartListItem';

const Wrapper = styled.div`
  background: #eee;
`;

const CartList = ({ cart, products, emptyCart }) => {
  const cartItems = products
    .map(item => ({
      ...item,
      num: cart[item.id],
    }))
    .filter(item => item.num > 0);
  const total = cartItems.reduce((acc, item) => acc + item.price * item.num, 0);
  return (
    <Wrapper>
      <h1>Cart</h1>
      <ul>
        {cartItems.map(item => (
          <CartListItem key={item.id} item={item} />
        ))}
      </ul>
      <h3>Total: ${total}</h3>
      <button onClick={emptyCart}>Empty Cart</button>
    </Wrapper>
  );
};

export default CartList;
