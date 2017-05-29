import React, {Component} from 'react';
import {Router, Route} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import KanbanBoardContainer from './KanbanBoardContainer';
import KanbanBoard from './KanbanBoard';
import EditCard from './EditCard';
import NewCard from './NewCard';

class App extends Component {
  render() {
    return <Router history={createBrowserHistory()}>
      <Route component={KanbanBoardContainer}>
        <Route path="/" component={KanbanBoard}>
          <Route path="new" component={NewCard}/>
          <Route path="edit/:card_id" component={EditCard}/>
        </Route>
      </Route>
    </Router>
  }
}

export default App;