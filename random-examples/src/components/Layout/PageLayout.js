import React, {Component} from 'react';
import TwoColumnLayout from './TwoColumnLayout';
class PageLayout extends Component {
    render() {
        return (
            <div className="container">
                <h1>Welcome to EIS</h1>
                <hr/>
                <div className="row">
                    <div className="col-md-12 col-lg-12">
                        <TwoColumnLayout/>
                    </div>
                </div>
            </div>
        );
    }
}

export default PageLayout;