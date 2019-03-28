import React, { useEffect } from 'react';
import styled from 'styled-components';
import ProductListItem from '../containers/ProductListItem';

const Wrapper = styled.div``;

const ProductList = ({ fetchItems, items = [] }) => {
  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <Wrapper>
      <h1>Products</h1>
      {items.map(item => (
        <ProductListItem key={item.id} item={item} />
      ))}
    </Wrapper>
  );
};

export default ProductList;
