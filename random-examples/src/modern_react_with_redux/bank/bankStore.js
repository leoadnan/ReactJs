import {createStore, applyMiddleware} from 'redux';
import Reducers from './reducers/bankReducer';
import {logger} from 'redux-logger';

// const logger = (store) => (next) => (action) => {
//    console.log('dispatching:', action);
//    return next(action);
// }
const store = createStore(Reducers, applyMiddleware(logger));

export default store;
