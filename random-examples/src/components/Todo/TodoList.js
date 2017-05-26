import React, {Component} from 'react';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return (
            <ul className="list-group">
                {
                    this.props.todos.map(todo => {
                        return <li 
                        className="list-group-item" 
                        key={todo.id}> <span onClick={this.editTodo.bind(this,todo)}>{todo.text} </span>
                              <a onClick={this.handleOnClick.bind(this,todo)}>x</a>
                        </li>
                    })
                }
            </ul>
        );
    }
    handleOnClick(todo) {
        this.props.deleteTodo(todo);
    }
    editTodo(todo) {
        this.props.editTodo(todo);
    }
}

export default TodoList;