import React, {Component} from 'react';
import ColumnLeft from './ColumnLeft';
import RightSection from './RightSection';

class TwoColumnLayout extends Component {
    render() {
        return (
            <div>
                <ColumnLeft/>
                <RightSection/>
            </div>
        );
    }
}

export default TwoColumnLayout;