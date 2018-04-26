import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store/configureStore';
// import registerServiceWorker from './registerServiceWorker';

const preloadedState = window.__PRELOADED_STATE__;

const store = configureStore( preloadedState || {});

window.addEventListener('DOMContentLoaded', () => {
    hydrate(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    )
});

// registerServiceWorker();