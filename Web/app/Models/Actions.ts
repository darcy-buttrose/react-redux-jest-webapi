/// <reference path="../../typings/index.d.ts" />

import {Keys} from "./Keys";
import {IAction} from "./IAction";

export function addTodo(payload: any): IAction {
    return {
        type: Keys.AddTodo,
        payload
    }
}

export function completeTodo(payload: any): IAction {
    return {
        type: Keys.CompleteTodo,
        payload
    }
}

export function removeTodo(payload: any): IAction {
    return {
        type: Keys.RemoveTodo,
        payload
    }
}