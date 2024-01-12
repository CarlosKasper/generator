import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from "./reportWebVitals";

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { thunk } from 'redux-thunk';

import { fetchMemes } from './actions';

const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => console.log('store', store.getState()));
store.dispatch(fetchMemes());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();