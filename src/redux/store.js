import {combineReducers, createStore} from "redux";
import {todoReducer} from "./todoReducer";
import {visibilityReducer} from "./filterReducer";

const rootReducer = combineReducers({
    todos: todoReducer,
    filter: visibilityReducer
});

export const store = createStore
(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__());


