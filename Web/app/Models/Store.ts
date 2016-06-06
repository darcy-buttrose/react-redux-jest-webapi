/// <reference path="../../typings/index.d.ts" />
/// <reference path="../containers/DevToolsExtension.d.ts" />

import { createStore, applyMiddleware, compose, Middleware } from 'redux';
import thunk from 'redux-thunk';
import { persistState } from 'redux-devtools';
import reducer from "./Reducer";
import {ITask} from "./ITask";
import {IState} from "./IState";
import {Map,List} from "immutable";
import DevTools from "../containers/DevTools.react";

var initialState: IState = {
    nextId: 0,
    todos: List<ITask>()
};

const enhancer = compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument()
);

const store = createStore(reducer, enhancer);
export default store;