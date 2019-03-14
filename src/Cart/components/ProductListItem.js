import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  width: 200px;
  height: 3em;
  line-height: 3em;
  border: 1px solid #ddd;
  user-select: none;
  cursor: pointer;
  padding: 1em;
  display: inline-block;
  margin: 1em;
`;
const Name = styled.span`
  font-size: 2em;
`;
const Price = styled.span`
  font-size: 1em;
  float: right;
  &:before {
    content: '$';
  }
`;

const ProductListItem = ({ item, addToCart }) => (
  <Item onClick={() => addToCart(item.id)}>
    <Name>{item.name}</Name>
    <Price>{item.price}</Price>
  </Item>
);

export default ProductListItem;
