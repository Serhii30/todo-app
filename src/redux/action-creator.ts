import { TodoAction, TodoActionTypes } from '../types/todo'

export const addTodo = (title: string): TodoAction => ({
    type: TodoActionTypes.ADD_TODO,
    payload: { id: Date.now(), title }
})
export const deleteTodo = (id: number): TodoAction => ({ type: TodoActionTypes.REMOVE_TODO, payload: { id } })
export const toggleTodo = (id: number): TodoAction => ({ type: TodoActionTypes.TOGGLE_TODO, payload: { id } })
export const setFilter = (filter: string): TodoAction => ({
    type: TodoActionTypes.SET_VISIBILITY_FILTER,
    payload: { filter }
})