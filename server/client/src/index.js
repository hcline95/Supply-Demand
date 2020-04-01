import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import IndexCSS from './index.css'
import ControlledCarousel from './containers/carousel';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <App />
    </Provider>,
  document.getElementById('root')
);

