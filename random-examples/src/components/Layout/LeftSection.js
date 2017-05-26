import React, {Component} from 'react';

class LeftSection extends Component {
    render() {
        var sideBar = <ul className="list-group">
                        <li className="list-group-item text-muted">Profile</li>
                        <li className="list-group-item">
                            <a className="center-block text-center">Image</a>
                        </li>
                        <li className="list-group-item text-right">
                            2.13.2014
                            <span className="pull-left"><strong>Joining Date</strong></span>
                            <div className="clearfix"></div>
                        </li>
                    </ul>
        return (sideBar);
    }
}

export default LeftSection;