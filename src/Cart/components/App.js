import React from 'react';
import ProductList from '../containers/ProductList';
import CartList from '../containers/CartList';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, #root, #app {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  > * {
    flex: 1 1 100%;
  }
`;

const App = () => (
  <Wrapper id="app">
    <GlobalStyle />
    <ProductList />
    <CartList />
  </Wrapper>
);

export default App;
