import React, {Component} from 'react';
import * as ReactBootstrap from 'react-bootstrap';

// import { Navbar, Jumbotron, Button } from 'react-bootstrap';
// import { Button } from 'react-bootstrap';
// import { ButtonGroup } from 'react-bootstrap';
// import { DropdownButton } from 'react-bootstrap';
// import { MenuItem } from 'react-bootstrap';

class Navbar extends Component {
    render() {
        /*var navbarHTML = <nav className="navbar navbar-inverse navbar-static-top" role="navigation">
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
                    <a className="navbar-brand" href="#">EIS</a>
                </div>
                <div className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#">Home</a></li>
                        <li><a href="#">Edit Profile</a></li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">Help Desk
                                <b className="caret"></b>
                            </a>
                            <ul className="dropdown-menu">
                                <li><a href="#">View Tickets</a></li>
                                <li><a href="#">New Ticket</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


        return (navbarHTML);*/

   var Nav= ReactBootstrap.Nav;
   var Navbar= ReactBootstrap.Navbar;
   var NavItem= ReactBootstrap.NavItem;
   var NavDropdown = ReactBootstrap.NavDropdown;
   var MenuItem= ReactBootstrap.MenuItem;
   var navbarReact =(
            <Navbar inverse>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a>EIS</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="/">Home</NavItem>
                        <NavItem eventKey={2} href="#">Edit Profile</NavItem>
                        <NavDropdown eventKey={3}  id="basic-nav-dropdown" title="dropdown">
                            <MenuItem eventKey={3.1}>View Tickets</MenuItem>
                            <MenuItem eventKey={3.2}>New Ticket</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar> 
        );
        return (navbarReact);
    }
}

export default Navbar;