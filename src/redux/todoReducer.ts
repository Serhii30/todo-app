import { ITodoState, TodoAction, TodoActionTypes } from '../types/todo'

const initialState: ITodoState = {
    todos: []
}

export const todoReducer = (state = initialState, action: TodoAction): ITodoState => {
    switch (action.type) {
        case TodoActionTypes.ADD_TODO:
            const { id, title } = action.payload;
            return {
                ...state,
                todos: [...state.todos, { id, title, completed: false }]
            }
        case TodoActionTypes.REMOVE_TODO:
            return {
                todos: state.todos.filter(todo => todo.id !== action.payload.id)
            }
        case TodoActionTypes.TOGGLE_TODO:
            return {
                todos: state.todos.map(todo => todo.id === action.payload.id
                    ? { ...todo, completed: !todo.completed }
                    : todo)
            }
        default:
            return state
    }
}

