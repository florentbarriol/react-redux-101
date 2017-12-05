import rootReducer from './rootReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { apiMiddleware } from 'redux-api-middleware';
import { routerMiddleware } from 'react-router-redux';

export const history = createHistory();

const initialState = {}

const rtrMiddleware = routerMiddleware(history)

const middlewares = [rtrMiddleware, thunk, apiMiddleware];

if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger);
}

export default createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
);
