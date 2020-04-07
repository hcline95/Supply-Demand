import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './containers/home'
import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import Random from './containers/random'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router>
      <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/simulation" component={App} />
            <Route exact path="/randomizer" component={Random} />
          </Switch>
      </Router>
    </Provider>,
  document.getElementById('root')
);

