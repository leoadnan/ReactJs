import React, {Component} from 'react';

class Content extends Component {
    render() {
        return <div className='well'> {this.props.children} </div>;
    }
}

export default Content;
