import React, {Component} from 'react';
// import TodoApp from './components/Todo/TodoApp'; import LoginForm from
// './components/chapter-01/LoginForm';
import Navbar from './components/chapter-02/Navbar';
import Sidebar from './components/chapter-02/Sidebar';

class App extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div>
                <Navbar/>
                <div className="container">
                    <h1>Welcome to EIS</h1>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-3" id="sidebar"><Sidebar/></div>
                        <div className="col-sm-9 profile-desc" id="main"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;