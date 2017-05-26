import React, {Component} from 'react';
//import ReactDOM from 'react-dom';

class LoginForm extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        var loginFormHTML = 
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <form>
                            <h1>Login Form</h1>
                            <hr/>
                            <div className="form-group">
                                <label htmlFor="emailInput">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="emailInput"
                                    placeholder="Email"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="passwordInput">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="passwordInput"
                                    placeholder="Password"/>
                            </div>
                            <button type="submit" className="btn btn-default col-xs-offset-9 col-xs-3">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        return (
            loginFormHTML
        );
    }
}

export default LoginForm;