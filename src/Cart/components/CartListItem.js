import React from 'react';
import styled from 'styled-components';

const Item = styled.li`
  user-select: none;
  cursor: pointer;
`;
const Name = styled.span`
  font-size: 1em;
`;
const Num = styled.span`
  font-size: 0.8em;
  margin-left: 2em;
  &:before {
    content: 'x';
  }
`;

const CartListItem = ({ item, removeFromCart }) => (
  <Item onClick={() => removeFromCart(item.id)}>
    <Name>{item.name}</Name>
    <Num>{item.num}</Num>
  </Item>
);

export default CartListItem;
