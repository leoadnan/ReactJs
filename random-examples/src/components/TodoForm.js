import React, {Component} from 'react';

class TodoForm extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit.bind(this)}>
                    <div className="form-group">
                        <label>Todo Text:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="todoText"
                            name="todoText"
                            ref="todoText"
                            value={this.props.text}
                            onChange={this.handleOnChange.bind(this)}/>
                    </div>
                </form>
            </div>
        );
    }

    handleOnChange(e){
        this.props.changeText(e.target.value);
    }
    handleOnSubmit(e){
        e.preventDefault();
        var text = this.refs.todoText.value;
        if(!text){
            alert("Please enter some text");
            return;
        }
        if(this.props.isEdit){
            var updatedTodo = {
                id: this.props.isEdit,
                text: text
            }
            this.props.onTodoUpdate(updatedTodo)
        }
        else {
            this.props.addTodo(text);
        }
        this.refs.todoText.value='';
    }
}

export default TodoForm;