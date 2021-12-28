import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from "./action";

const initialState = {
    todos: []
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            const {id, title} = action.payload;
            return {
                ...state,
                todos: [...state.todos, {id, title, completed: false}]
            };
        case REMOVE_TODO:
            return {
                todos: state.todos.filter(todo => todo.id !== action.id)
            }
        case TOGGLE_TODO:
            return {
                todos: state.todos.map(todo => todo.id === action.id
                    ? {...todo, completed: !todo.completed}
                    : todo)
            }
        default:
            return state;
    }
}

