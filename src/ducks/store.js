import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer, { initialState } from './reducer';

export default createStore(reducer, initialState, applyMiddleware(thunk));