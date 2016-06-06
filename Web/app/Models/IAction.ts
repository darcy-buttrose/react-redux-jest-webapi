/// <reference path="../../typings/index.d.ts" />
import {Keys} from "./Keys";
import {List} from "immutable";
import {ITask} from "../Models/ITask";

export interface IAction {
    type : Keys;
    payload: any;
}