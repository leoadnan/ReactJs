import React, {Component} from 'react';
import KanbanBoard from './KanbanBoard';
import update from 'react-addons-update';
import 'whatwg-fetch';
import 'babel-polyfill'
import {throttle} from './utils';

const API_URL = 'http://kanbanapi.pro-react.com';
const API_HEADERS = {
    'Content-Type': 'application/json',
    Authorization: '12345678901' // The Authorization is not needed for local server

};

class KanbanBoardContainer extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            cards: []
        };
        // Only call updateCardStatus when arguments change
        this.updateCardStatus = throttle(this.updateCardStatus.bind(this));
        // Call updateCardPosition at max every 500ms (or when arguments change)
        this.updateCardPosition = throttle(this.updateCardPosition.bind(this),500);
    }
    addTask(cardId, taskName) {
        // Keep a reference to the original state prior to the mutations 
        // in case you need to revert the optimistic changes in the UI 
        let prevState = this.state;

        // Find the index of the card
        let cardIndex = this.state.cards.findIndex((card)=>card.id === cardId);

        // Create a new task with the given name and a temporary ID 
        let newTask = {id:Date.now(), name:taskName, done:false};

        // Create a new object and push the new task to the array of tasks 
        let nextState = update(this.state.cards, {
                            [cardIndex]: {
                                tasks: {
                                    $push: [newTask]
                                }
                            }
                        });

        // set the component state to the mutated object 
        this.setState({cards:nextState});

        // Call the API to add the task on the server
        fetch(`${API_URL}/cards/${cardId}/tasks`, {
            method: 'post',
            headers: API_HEADERS,
            body: JSON.stringify(newTask)
        })
        .then((response) => {
            if(response.ok){
                return response.json()
            } 
            else {
                // Throw an error if server response wasn't 'ok' 
                // so you can revert back the optimistic changes 
                // made to the UI.
                throw new Error("Server response wasn't OK")
            }
        })
        .then((responseData) => {
            // When the server returns the definitive ID
            // used for the new Task on the server, update it on React 
            newTask.id=responseData.id 
            this.setState({cards:nextState});
        })
        .catch((error) => {
            this.setState(prevState); 
        });
    }
    deleteTask(cardId, taskId, taskIndex) {
        // Find the index of the card
        let cardIndex = this.state.cards.findIndex(c=>c.id===cardId);

        // Keep a reference to the original state prior to the mutations 
        // in case you need to revert the optimistic changes in the UI 
        let prevState = this.state;

        // Create a new object without the task
        let nextState = update(this.state.cards, {
                                [cardIndex]: {
                                    tasks: {$splice: [[taskIndex,1]] }
                                }
        });

        // set the component state to the mutated object 
        this.setState({cards:nextState});

        // Call the API to remove the task on the server
        fetch(`${API_URL}/cards/${cardId}/tasks/${taskId}`, {
            method: 'delete',
            headers: API_HEADERS
        })
        .then((response) => {
            if (!response.ok) {
                // Throw an error if server response wasn't 'ok' // so you can revert back the
                // optimistic changes // made to the UI.
                throw new Error("Server response wasn't OK")
            }
        }).catch((error) => {
            console.error("Fetch error:", error)
            this.setState(prevState);
        });
    }
    toggleTask(cardId, taskId, taskIndex) {
        // Keep a reference to the original state prior to the mutations in case you
        // need to revert the optimistic changes in the UI
        let prevState = this.state;
        // Find the index of the card
        let cardIndex = this.state.cards.findIndex((card) => card.id === cardId);
        // Save a reference to the task's 'done' value
        let newDoneValue;
        // Using the $apply command, you will change the done value to its opposite
        let nextState = update(this.state.cards, {
                            [cardIndex]: {
                                tasks: {
                                    [taskIndex]: {
                                        done: {
                                            $apply: (done) => {
                                                newDoneValue = !done
                                                return newDoneValue;
                                            }
                                        }
                                    }
                                }
                            }
                        });
        // set the component state to the mutated object
        this.setState({cards: nextState});
        // Call the API to toggle the task on the server
        fetch(`${API_URL}/cards/${cardId}/tasks/${taskId}`, {
            method: 'put',
            headers: API_HEADERS,
            body: JSON.stringify({done: newDoneValue})
        }).then((response) => {
            if (!response.ok) {
                // Throw an error if server response wasn't 'ok' // so you can revert back the
                // optimistic changes // made to the UI.
                throw new Error("Server response wasn't OK")
            }
        }).catch((error) => {
            console.error("Fetch error:", error)
            this.setState(prevState);
        });
    }

    updateCardStatus(cardId, listId) {
        // Find the index of the card
        let cardIndex = this.state.cards.findIndex((card) => card.id === cardId);
        // Get the current card
        let card = this.state.cards[cardIndex]
        // Only proceed if hovering over a different list
        if (card.status !== listId) {
            // set the component state to the mutated object
            this.setState(update(this.state, {
                cards: {
                    [cardIndex]: {
                        status: {
                            $set: listId
                        }
                    }
                }
            }));
        }
    }
    updateCardPosition(cardId, afterId) {
        // Only proceed if hovering over a different card
        if (cardId !== afterId) {
            // Find the index of the card
            let cardIndex = this.state.cards.findIndex((card) => card.id === cardId);
            // Get the current card
            let card = this.state.cards[cardIndex]
            // Find the index of the card the user is hovering over
            let afterIndex = this.state.cards.findIndex((card) => card.id === afterId);
            // Use splice to remove the card and reinsert it a the new index
            this.setState(update(this.state, {
                cards: {
                    $splice: [
                        [cardIndex, 1],
                        [afterIndex, 0, card]
                    ]
                }
            }));
        }
    }

    persistCardDrag(cardId, status) {
        // Find the index of the card
        let cardIndex = this.state.cards.findIndex((card) => card.id == cardId);
        // Get the current card
        let card = this.state.cards[cardIndex]
        fetch(`${API_URL}/cards/${cardId}`, {
            method: 'put',
            headers: API_HEADERS,
            body: JSON.stringify({status: card.status, row_order_position: cardIndex})
        }).then((response) => {
            if (!response.ok) {
                // Throw an error if server response wasn't 'ok' // so you can revert back the
                // optimistic changes // made to the UI.
                throw new Error("Server response wasn't OK")
            }
        }).catch((error) => {
            console.error("Fetch error:", error);
            this.setState(update(this.state, {
                cards: {
                    [cardIndex]: {
                        status: {
                            $set: status
                        }
                    }
                }
            }));
        });
    }

    componentDidMount() {
        fetch(API_URL + '/cards', {headers: API_HEADERS})
        .then((response) => response.json())
        .then((responseData) => {
            this.setState({cards: responseData});
            window.state = this.state;
        }).catch((error) => {
            console.log('Error fetching and parsing data', error);
        });
    }
    render() {
        return <KanbanBoard cards={this.state.cards} taskCallbacks={{
                                                        toggle: this.toggleTask.bind(this),
                                                        delete: this.deleteTask.bind(this),
                                                        add: this.addTask.bind(this) }} 
                                                    cardCallbacks={{
                                                        updateStatus: this.updateCardStatus,
                                                        updatePosition: this.updateCardPosition,
                                                        persistCardDrag: this.persistCardDrag.bind(this)
                                                    }}/>
    }
}
export default KanbanBoardContainer;