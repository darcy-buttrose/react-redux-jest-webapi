/// <reference path="../../typings/index.d.ts" />
import * as React from 'react';
import {List} from "immutable";
import {ITask} from "../Models/ITask";
import Task from "../Models/Task";
import TodoItem from "./TodoItem.react";
import NewTodoItem from "./NewTodoItem.react";
import {IState} from "../Models/IState";
import {connect} from "react-redux";

interface ITodoAppProps { nextId:number; todos: List<ITask>; onCompleteChanged: Function; onDelete: Function; onSave:Function }
interface ITodoAppState { nextId:number; todos: List<ITask> }

export default class TodoApp extends React.Component<ITodoAppProps, ITodoAppState> {
    onSave: Function;
    onCompleteChanged: Function;
    onDelete: Function;

    constructor(props) {
        super(props);
        this.state = {
            nextId: 0,
            todos: List<Task>([
            ])
        };
        this.onSave = this.props.onSave;
        this.onCompleteChanged = this.props.onCompleteChanged;
        this.onDelete = this.props.onDelete;
    };

    _updateState(props : ITodoAppProps) {
        console.log('-- TodoApp::_updateState => ' + JSON.stringify(props));
        this.setState({
            nextId: props.nextId,
            todos: props.todos
        });
    }

    componentDidMount() {
        console.log('-- TodoApp::componentDidMount => ' + JSON.stringify(this.props));
        this._updateState(this.props);
    }

    componentWillReceiveProps(nextProps) {
        console.log('-- TodoApp::componentWillReceiveProps => ' + JSON.stringify(nextProps));
        if (this.state.todos !== nextProps.todos) {
            this._updateState(nextProps);
        }
    }
    render() {
        let todoList = this.state.todos.map((task: Task) => {
            return <TodoItem key={task.Id} task={task} onCompleteChanged={this.onCompleteChanged} onDelete={this.onDelete} />
        });
        return  (<section id="main">
                    <ul id="todo-list">{todoList}</ul>
                    <NewTodoItem nextId={this.state.nextId} onSave={this.onSave} />
                </section>);
    }
}
