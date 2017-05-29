import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import enhance from './reducers';
import Game from './components/Game';

const store = createStore(enhance, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <Game/>
    </Provider>, 
    rootElement
);
