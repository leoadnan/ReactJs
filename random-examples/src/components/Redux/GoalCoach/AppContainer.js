import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import App from './App';
import SignIn from './Signin';
import SignUp from './SignUp';
import reducers from './reducers';

import {logUser} from './actions'

import {firebaseApp} from './firebase';



const store = createStore(reducers)
class AppContainer extends Component {
checkAuth() {
      firebaseApp.auth().onAuthStateChanged(user => {
      if (user) {
         console.log('user has signed in or up', user);
         const {email} = user;
         store.dispatch(logUser(email));
                  // browserHistory.push('/app');
      } else {
         console.log('user has signed out or still needs to sign in.');
         //<Redirect to="/redux/goalcoach/signin"/>
         // browserHistory.replace('/signin');
      }
   })
}
   render() {
      {this.checkAuth()}
      return (
         <Provider store={store}>
         <Router>
            <Switch>
               <Route path="/redux/goalcoach/signin" component={SignIn}/>
               <Route path="/redux/goalcoach/signup" component={SignUp}/>
               <Route path="/redux/goalcoach/app" component={App}/>
            </Switch>
         </Router>
         </Provider>
      );
   }
}

export default AppContainer;