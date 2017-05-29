import React from 'react';
import ReactDOM from 'react-dom';
// import { Route } from 'react-router'
// import { Switch, BrowserRouter } from 'react-router-dom'
// import Navbar from './components/chapter-02/Navbar';

// import PageLayout from './components/Layout/PageLayout';

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

// ReactDOM.render( <Navbar /> , document.getElementById('nav'));
// ReactDOM.render( <Jumbotron /> , document.getElementById('jumbotron'));
// ReactDOM.render( <TodoApp /> , document.getElementById('todos'));
// ReactDOM.render( <Sidebar />, document.getElementById('sidebar'));
// ReactDOM.render( <HomePage />, document.getElementById('main'));
// ReactDOM.render( <LoginForm />, document.getElementById('loginForm'));
// ReactDOM.render( <MyApp />, document.getElementById('toggle-example'));
// ReactDOM.render( <Tickets />, document.getElementById('tickets'));
// ReactDOM.render(<ReactBootstrapModalDialog />,document.getElementById('modal'));

// ReactDOM.render((
//        <BrowserRouter>
//             <Route path="/" component={PageLayout}/>
//        </BrowserRouter>
//    ), document.getElementById('reactapp'));



import App from './components/pro-react/App'
import ContactsApp from './components/pro-react/ContactsApp/ContactsApp';
import ShoppingList from './components/pro-react/ShoppingListApp/AnimatedShoppingList';
import SnackApp from './components/pro-react/SnackApp/SnackApp';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import RoutingApp from './components/pro-react/Routing/RoutingApp'
import About from './components/pro-react/Routing/About'; 
import Repos from './components/pro-react/Routing/Repos'; 
import Home from './components/pro-react/Routing/Home';
import RepoDetails from './components/pro-react/Routing/RepoDetails'

//Start Pro React 
ReactDOM.render( 
    
    <Router history={ browserHistory }>
        <Route path="/" component={App} />
        <Route path="/contacts" component={ContactsApp} />
        <Route path="/shoppinglist" component={ShoppingList} />
        <Route path="/snackapp" component={SnackApp} />
        <Route path="/routing" component={RoutingApp}>
            <IndexRoute component={Home}/>
            <Route path="about" component={About}/> 
            <Route path="repos" component={Repos}>
                {/* Add the route, nested where we want the UI to nest */}
                <Route path="details/:repo_name" component={RepoDetails} />
            </Route>
        </Route>
    </Router>
,document.getElementById('kanbanboard'));
//End Pro React 
registerServiceWorker();