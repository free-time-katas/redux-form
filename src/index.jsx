import React from "react";
import ReactDOM from "react-dom";
import Root from "../build/components/root";
import {createStore, combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import {Provider} from "react-redux";

const reducers = {
    form: formReducer
};
const reducer = combineReducers(reducers);
const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.getElementById('app')
);