import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// import * as ReactBootstrap from 'react-bootstrap';

// import { Navbar, Jumbotron, Button } from 'react-bootstrap';
// import { Button } from 'react-bootstrap';
// import { ButtonGroup } from 'react-bootstrap';
// import { DropdownButton } from 'react-bootstrap';
// import { MenuItem } from 'react-bootstrap';

class Navbar extends Component {
    render() {
        var navbarHTML = <nav className="navbar navbar-inverse navbar-static-top">
            <div className="container">
                <div className="navbar-header">
                    <button
                        type="button"
                        className="navbar-toggle"
                        data-toggle="collapse"
                        data-target=".navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link className="navbar-brand" to="/">React Demo Apps</Link>
                </div>
                <div className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li><Link to="/jumbotron">Jumbotron</Link></li>
                        <li><Link to="/todoapp">Todo App</Link></li>
                        <li><Link to="/ticketsapp">Tickets</Link></li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">More
                                <b className="caret"></b>
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link to="/myapp">My App</Link></li>
                                <li><Link to="/loginform">Login Page</Link></li>
                                <li><Link to="/modal">Modal</Link></li>
                                <li><Link to="/sidebar">Sidebar</Link></li>
                            </ul>
                        </li><li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">Mastering React
                                <b className="caret"></b>
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link to="/contacts">Contacts</Link></li>
                                <li><Link to="/shoppinglist">Shopping List</Link></li>
                                <li><Link to="/snackapp">Snack App</Link></li>
                                <li><Link to="/aircheapapp">Air cheap app</Link></li>
                                <li><Link to="/fluxapp">Flux App</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


        return (navbarHTML);

//    var Nav= ReactBootstrap.Nav;
//    var Navbar= ReactBootstrap.Navbar;
//    var NavItem= ReactBootstrap.NavItem;
//    var NavDropdown = ReactBootstrap.NavDropdown;
//    var MenuItem= ReactBootstrap.MenuItem;
//    var navbarReact =(
//             <Navbar inverse>
//                 <Navbar.Header>
//                     <Navbar.Brand>
//                         <a>EIS</a>
//                     </Navbar.Brand>
//                     <Navbar.Toggle />
//                 </Navbar.Header>
//                 <Navbar.Collapse>
//                     <Nav>
//                         <NavItem eventKey={1} href="/">Home</NavItem>
//                         <NavItem eventKey={2} href="#">Edit Profile</NavItem>
//                         <NavDropdown eventKey={3}  id="basic-nav-dropdown" title="dropdown">
//                             <MenuItem eventKey={3.1}>View Tickets</MenuItem>
//                             <MenuItem eventKey={3.2}>New Ticket</MenuItem>
//                         </NavDropdown>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Navbar> 
//         );
//         return (navbarReact);
    }
}

export default Navbar;