import React, {Component} from 'react';
import List from './List';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class KanbanBoard extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div className="app">
                <List id="todo" 
                        title="To Do" 
                        taskCallbacks={this.props.taskCallbacks} 
                        cardCallbacks={this.props.cardCallbacks}
                        cards={this.props.cards.filter(c => c.status === 'todo')} />
                <List id="in-progress" 
                        title="In Progress" 
                        taskCallbacks={this.props.taskCallbacks} 
                        cardCallbacks={this.props.cardCallbacks}
                        cards={this.props.cards.filter(c => c.status === 'in-progress')} />
                <List id='done' 
                        title='Done' 
                        taskCallbacks={this.props.taskCallbacks} 
                        cardCallbacks={this.props.cardCallbacks}
                        cards={ this.props.cards.filter(c => c.status === "done") } />
            </div>
        );
    }
}

KanbanBoard.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
  taskCallbacks: PropTypes.object,
  cardCallbacks: PropTypes.object
};

export default DragDropContext(HTML5Backend)(KanbanBoard);