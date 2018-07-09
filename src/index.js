import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './redux/modules/reducer';


import App from './containers/App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk),
  ),
);

ReactDOM.render(
  <Provider store={store} key="forecast">
    <App />
  </Provider>,
  document.getElementById("app")
);
