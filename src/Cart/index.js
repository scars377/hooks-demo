import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import App from './components/App';

const store = createStore(reducers, applyMiddleware(thunk));

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
