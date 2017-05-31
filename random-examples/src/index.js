import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/chapter-02/Navbar';
// import PageLayout from './components/Layout/PageLayout';
import Jumbotron from './components/chapter-01/Jumbotron';
import TodoApp from './components/Todo/TodoApp'
import Sidebar from './components/chapter-02/Sidebar';
import LoginForm from './components/chapter-01/LoginForm';
import MyApp from './components/chapter-03/MyApp';
import Tickets from './components/chapter-03/Tickets';
import ReactBootstrapModalDialog from './components/chapter-03/ReactBootstrapModalDialog';

// import App from './components/mastering-react/app';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

import AirCheapApp from './components/pro-react/AirCheapApp/App';
import FluxApp from './components/pro-react/flux/App'
import ContactsApp from './components/pro-react/ContactsApp/ContactsApp';
import ShoppingList from'./components/pro-react/ShoppingListApp/AnimatedShoppingList'; 
import SnackApp from './components/pro-react/SnackApp/SnackApp';

ReactDOM.render( 
    <Router>
        <div>
            <div className="container-fluid" style={{paddingLeft:0, paddingRight:0}}><Route path="/" component={Navbar}/></div>
            <Switch>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Route path="/jumbotron" component={Jumbotron}/>
                            <Route path="/todoapp" component={TodoApp}/>
                            <Route path="/ticketsapp" component={Tickets}/>
                            <Route path="/loginform" component={LoginForm}/>
                            <Route path="/myapp" component={MyApp}/>
                            <Route path="/modal" component={ReactBootstrapModalDialog}/>
                            <Route path="/sidebar" component={Sidebar}/>
                            <Route path="/aircheapapp" component={AirCheapApp} />
                            <Route path="/fluxapp" component={FluxApp} />
                            <Route path="/contacts" component={ContactsApp} />
                            <Route path="/shoppinglist" component={ShoppingList} />
                            <Route path="/snackapp" component={SnackApp} />
                        </div>
                    </div>
                </div>
            </Switch>
        </div>
    </Router>
, document.getElementById('app'));


// import Kanbanboard from './components/pro-react/App'
// import RoutingApp from './components/pro-react/Routing/RoutingApp'
// import RoutingAbout from './components/pro-react/Routing/About'; 
// import RoutingRepos from './components/pro-react/Routing/Repos'; 
// import RoutingHome from './components/pro-react/Routing/Home';
// import RepoDetails from './components/pro-react/Routing/RepoDetails'
// import ServerError from './components/pro-react/Routing/ServerError'

// // //Start Pro React 
// ReactDOM.render( 
//     <Router>
//         <switch>
//             <Route path="/kanbanboard" component={Kanbanboard} />
//             <Route path="/routing" component={RoutingApp} >
//                 <Route component={RoutingHome}/>
//                 <Route path="about" component={RoutingAbout} title="About Us"/> 
//                 <Route path="repos" component={RoutingRepos}>
//                     {/* Add the route, nested where we want the UI to nest */}
//                     <Route path="/repo/:repo_name" component={RepoDetails} />
//                 </Route>
//                 <Route path = "error" component = {ServerError} />
//             </Route>
//         </switch>
//     </Router>
// ,document.getElementById('kanbanboard'));
//End Pro React 
registerServiceWorker();