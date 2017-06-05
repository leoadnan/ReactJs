import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render( <App/>, document.getElementById('app'));

// import Kanbanboard from './components/pro-react/App'
// import RoutingApp from './components/pro-react/Routing/RoutingApp'
// import RoutingAbout from './components/pro-react/Routing/About'; 
// import RoutingRepos from './components/pro-react/Routing/Repos'; 
// import RoutingHome from './components/pro-react/Routing/Home';
// import RepoDetails from './components/pro-react/Routing/RepoDetails'
// import ServerError from './components/pro-react/Routing/ServerError'

// // //Start Pro React 
// ReactDOM.render( 
//     <Router>
//         <switch>
//             <Route path="/kanbanboard" component={Kanbanboard} />
//             <Route path="/routing" component={RoutingApp} >
//                 <Route component={RoutingHome}/>
//                 <Route path="about" component={RoutingAbout} title="About Us"/> 
//                 <Route path="repos" component={RoutingRepos}>
//                     {/* Add the route, nested where we want the UI to nest */}
//                     <Route path="/repo/:repo_name" component={RepoDetails} />
//                 </Route>
//                 <Route path = "error" component = {ServerError} />
//             </Route>
//         </switch>
//     </Router>
// ,document.getElementById('kanbanboard'));
//End Pro React 
registerServiceWorker();

