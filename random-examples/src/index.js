import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/chapter-02/Navbar';

import PageLayout from './components/Layout/PageLayout';

// import Jumbotron from './components/chapter-01/Jumbotron';
// import TodoApp from './components/Todo/TodoApp'
// import Sidebar from './components/chapter-02/Sidebar';
// import HomePage from './components/routing/HomePage';
// import LoginForm from './components/chapter-01/LoginForm';
// import MyApp from './components/chapter-03/MyApp';
// import Tickets from './components/chapter-03/Tickets';
// import ReactBootstrapModalDialog from './components/chapter-03/ReactBootstrapModalDialog';

// import App from './components/mastering-react/app';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render( <Navbar /> , document.getElementById('nav'));
// ReactDOM.render( <Jumbotron /> , document.getElementById('jumbotron'));
// ReactDOM.render( <TodoApp /> , document.getElementById('todos'));
// ReactDOM.render( <Sidebar />, document.getElementById('sidebar'));
// ReactDOM.render( <HomePage />, document.getElementById('main'));
// ReactDOM.render( <LoginForm />, document.getElementById('loginForm'));
// ReactDOM.render( <MyApp />, document.getElementById('toggle-example'));
// ReactDOM.render( <Tickets />, document.getElementById('tickets'));
// ReactDOM.render(<ReactBootstrapModalDialog />,document.getElementById('modal'));
// ReactDOM.render(<App />, document.querySelector('#anchor'));

ReactDOM.render((
       <BrowserRouter>
            <Route path="/" component={PageLayout}/>
       </BrowserRouter>
   ), document.getElementById('reactapp'));

registerServiceWorker();