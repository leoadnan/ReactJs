import React, { Component } from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import Reducers from './reducers';
import ReduxPromise from 'redux-promise'
import App from './app'
import './style.css';
  
//const store = createStore(Reducers,applyMiddleware(ReduxPromise));
const store = applyMiddleware(ReduxPromise)(createStore);

class AppContainer extends Component {
   render() {
      return (
         <Provider store={store(Reducers)}>
            <App />
         </Provider>
      );
   }
}

export default AppContainer;