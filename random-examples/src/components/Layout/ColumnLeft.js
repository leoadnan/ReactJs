import React, {Component} from 'react';
import LeftSection from './LeftSection';

class ColumnLeft extends Component {
    render() {
        return (
            <div className="col-sm-3" id="sidebar">
                <div className="results">
                    <LeftSection/>
                </div>
            </div>
        );
    }
}

export default ColumnLeft;