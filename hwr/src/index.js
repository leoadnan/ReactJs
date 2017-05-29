import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, useRouterHistory} from 'react-router';
import {createHashHistory} from 'history';

import Detail from './Detail';

ReactDOM.render(
    <Router>
        <Route path="/" component={Detail}/>
    </Router>
, document.getElementById('app'));