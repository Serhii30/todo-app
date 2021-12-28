export const ADD_TODO = 'ADD-TODO';
export const REMOVE_TODO = 'REMOVE-TODO';
export const TOGGLE_TODO = 'TOGGLE-TODO';
export const visibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SHOW_COMPLETED: 'SHOW_COMPLETED'
}

export const setFilter = filter => ({type: 'SET_VISIBILITY_FILTER', filter});
export const addTodo = title => ({type: ADD_TODO, payload: {id: Date.now(), title}});
export const deleteTodo = id => ({type: REMOVE_TODO, id});
export const toggleTodo = id => ({type: TOGGLE_TODO, id});