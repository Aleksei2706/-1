import {createStore} from "redux";
import {cashReducer} from "./cashReducer";
import { combineReducers } from "redux";
import {customersReducer} from "./customerReduxer"

const rootReducer = combineReducers ({
    cash: cashReducer,
    customersReducer,
})

export const store = createStore (rootReducer)