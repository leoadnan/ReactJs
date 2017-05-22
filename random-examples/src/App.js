import React, {Component} from 'react';
import TodoApp from './components/Todo/TodoApp';

class App extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (            
            <TodoApp />
        );
    }
}

export default App;