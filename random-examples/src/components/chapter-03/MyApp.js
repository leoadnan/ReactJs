import React, {Component} from 'react';
import MessagePanel from './MessagePanel';
import Heading from './Heading';
import Content from './Content';

class MyApp extends Component {
    constructor() {
        super();
        this.state = {
            collapse: false
        }
    }
    handleToggle(evt) {
        var nextState = !this.state.collapse;
        this.setState({collapse: nextState});
    }
    render() {
        var showhideToggle = this.state.collapse
            ? (
                <MessagePanel>
                    <Heading text='Show/Hide'/>
                    <Content>
                        Phasellus sed velit venenatis, suscipit eros a, laoreet dui.
                    </Content>
                </MessagePanel>
            )
            : null;

        return (
            <div>
                <h1>Namespaced Components Demo</h1>
                <p>
                    <button onClick={this.handleToggle.bind(this)} className="btn btn-primary">Toggle</button>
                </p>
                {showhideToggle}
            </div>
        )
    }
}

export default MyApp;
