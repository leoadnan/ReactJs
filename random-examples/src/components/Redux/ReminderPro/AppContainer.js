import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './App';
import Reducers from './reducers'

const store = createStore(Reducers);

class AppContainer extends Component {
   render() {
      return (
         <Provider store={store}>
            <App/>
         </Provider>
      );
   }
}

export default AppContainer;