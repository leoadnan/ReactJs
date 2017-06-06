import React, { Component } from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import Reducers from './reducers';

import SearchBar from './containers/search_bar'

const store = createStore(Reducers,applyMiddleware());

class App extends Component {
   render() {
      return (
         <Provider store={store}>
            <SearchBar />
         </Provider>
      );
   }
}

export default App;