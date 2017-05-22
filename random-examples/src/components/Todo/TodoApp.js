import React, {Component} from 'react';
//import Jumbotron from './components/Jumbotron';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class TodoApp extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
            isEdit: 0,
            todos: [
                {
                    id: 1,
                    text: 'Todo-1'
                }, 
                {
                    id: 2,
                    text: 'Todo-2'
                },
                {
                    id: 3,
                    text: 'Todo-3'
                }
            ]
        };
    }
    render() {
        return (
            <div>
                <TodoForm 
                    {...this.state}
                    addTodo={this.handleAddTodo.bind(this)} 
                    changeText={this.handleChangeText.bind(this)}
                    onTodoUpdate={this.handleOnTodoUpdate.bind(this)} />

                <TodoList 
                   {...this.state}
                    deleteTodo={this.handleDeleteTodo.bind(this)} 
                    editTodo={this.handleEditTodo.bind(this)} />
            </div>
        );
    }

    handleAddTodo(text) {
        var newTodo = {
            id: this.state.todos.length + 1,
            text: text
        }

        this.setState(
            {
                todos: this.state.todos.concat(newTodo)
            }
        )
    }
    handleDeleteTodo(todo) {
        var todos = this.state.todos;
        var index = todos.findIndex(t => t.id===todo.id)
        todos.splice(index,1);
        this.setState({todos:todos})
    } 
    handleEditTodo(todo) {
        this.setState({
            text: todo.text,
            isEdit: todo.id
        });
    }

    handleChangeText(value){
        this.setState({
            text: value
        })
    }

    handleOnTodoUpdate(todo){
        var todos = this.state.todos;
        var index = todos.findIndex(t => t.id===todo.id)
        todos.splice(index,1);
        todos.push(todo);
        this.setState({todos:todos})
    }
}

export default TodoApp;