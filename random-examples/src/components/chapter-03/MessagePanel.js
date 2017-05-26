import React, {Component} from 'react';

class MessagePanel extends Component {
    render() {
        return <div className='collapse in'>{this.props.children}</div>;
    }
}

export default MessagePanel;
