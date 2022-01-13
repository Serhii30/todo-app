export interface Todo {
    title: string
    completed: boolean
    id: number
}

export interface Filter {
    filter: string
}

export interface ITodoState {
    todos: Todo[]
}

export enum TodoActionTypes {
    ADD_TODO = 'ADD-TODO',
    REMOVE_TODO = 'REMOVE-TODO',
    TOGGLE_TODO = 'TOGGLE-TODO',
    SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
}

export enum visibilityFilters {
    SHOW_ALL = 'SHOW_ALL',
    SHOW_ACTIVE = 'SHOW_ACTIVE',
    SHOW_COMPLETED = 'SHOW_COMPLETED'
}

interface IAddTodoAction {
    type: TodoActionTypes.ADD_TODO,
    payload: { id: number, title: string }
}

interface IRemoveTodoAction {
    type: TodoActionTypes.REMOVE_TODO
    payload: { id: number }
}

interface IToggleTodoAction {
    type: TodoActionTypes.TOGGLE_TODO
    payload: { id: number }
}

interface ISetVisibilityAction {
    type: TodoActionTypes.SET_VISIBILITY_FILTER
    payload: { filter: string }
}

export type TodoAction = IAddTodoAction | IRemoveTodoAction | IToggleTodoAction | ISetVisibilityAction
