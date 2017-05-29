import React, {Component} from 'react';
import { Link } from 'react-router';

class RoutingApp extends Component {

    render(){        
        return(
        <div>
            <header>App</header> 
            <menu>
                <ul>
                    <li><Link to="/routing/about" activeClassName="active">About</Link></li> 
                    <li><Link to="/routing/repos" activeClassName="active">Repos</Link></li>
                </ul> 
            </menu>
            {this.props.children}
        </div>);
    }
}

export default RoutingApp;

