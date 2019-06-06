import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import MasterReducer from '../redux/reducers/MasterReducer';
import App from '../App';


const store = createStore(MasterReducer);

export default class ReduxWrapper extends Component {

    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        );
    }
}