/**
 * Created by Darcy on 15/06/2016.
 */
import * as React from "react";
import {Provider} from 'react-redux';
import store from '../Models/Store';
import TodoApp from '../containers/ConnectedTodoApp.redux';

export default class Root extends React.Component<{},{}>{
    constructor(props){
        super(props);
        this.state = {};
    }
    
    render() {
        return (
            <Provider store={store} >
                <TodoApp/>
            </Provider>
        );
    }
}