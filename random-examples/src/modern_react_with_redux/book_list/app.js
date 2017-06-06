import React, { Component } from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import Reducers from './reducers';

import BookList from './containers/book_list';

const store = createStore(Reducers,applyMiddleware());

class App extends Component {
   render() {
      return (
         <Provider store={store}>
            <BookList />
         </Provider>
      );
   }
}

export default App;