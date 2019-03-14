import React, { Component } from 'react';
import styled from 'styled-components';
import ProductListItem from '../containers/ProductListItem';

const Wrapper = styled.div``;

class ProductList extends Component {
  componentDidMount() {
    this.props.fetchItems();
  }
  render() {
    const { items = [] } = this.props;
    return (
      <Wrapper>
        <h1>Products</h1>
        {items.map(item => (
          <ProductListItem key={item.id} item={item} />
        ))}
      </Wrapper>
    );
  }
}

export default ProductList;
