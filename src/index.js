import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { usersReducer } from './Reducers/reducer';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { watchLoadData } from './Saga/saga';
import * as serviceWorker from './serviceWorker';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(combineReducers({
    users: usersReducer
}), applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchLoadData);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
