import React, {Component} from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/chapter-02/Navbar';
// import PageLayout from './components/Layout/PageLayout';
import Jumbotron from './components/chapter-01/Jumbotron';
import TodoApp from './components/Todo/TodoApp'
import Sidebar from './components/chapter-02/Sidebar';
import LoginForm from './components/chapter-01/LoginForm';
import MyApp from './components/chapter-03/MyApp';
import Tickets from './components/chapter-03/Tickets';
import ReactBootstrapModalDialog from './components/chapter-03/ReactBootstrapModalDialog';

import AirCheapApp from './components/pro-react/AirCheapApp/App';
import FluxApp from './components/pro-react/flux/App'
import ContactsApp from './components/pro-react/ContactsApp/ContactsApp';
import ShoppingList from'./components/pro-react/ShoppingListApp/AnimatedShoppingList'; 
import SnackApp from './components/pro-react/SnackApp/SnackApp';

import Routingv4QuickStart from './components/react-router-v4/QuickStart';

import ReminderProApp from './components/Redux/ReminderPro/AppContainer';

import YouTubeSearchApp from './modern_react_with_redux/youtube_search/App';
import BookListApp from './modern_react_with_redux/book_list/app';
import WeatherApp from './modern_react_with_redux/weather/AppContainer';
import ReduxBankApp from './modern_react_with_redux/bank/BankAppContainer';

class App extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
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
                                    <Route path="/quickstart" component={Routingv4QuickStart} />
                                    <Route path="/redux/reminderpro" component={ReminderProApp} />
                                    <Route path="/youtubesearchapp" component={YouTubeSearchApp} />
                                    <Route path="/booklistapp" component={BookListApp} />
                                    <Route path="/weatherapp" component={WeatherApp} />
                                    <Route path="/reduxbankapp" component={ReduxBankApp} />
                                </div>
                            </div>
                        </div>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;