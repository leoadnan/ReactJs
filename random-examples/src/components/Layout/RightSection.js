import React, {Component} from 'react';
import PageTitle from './PageTitle';
import HomePage from './HomePage';

class RightSection extends Component {
    render() {
        return (
            <div className="col-sm-9 profile-desc" id="main">
                <div className="results">
                    <PageTitle/>
                    <HomePage/>
                </div>
            </div>
        );
    }
}

export default RightSection;