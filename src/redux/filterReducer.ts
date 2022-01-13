import {Filter, TodoAction, TodoActionTypes, visibilityFilters} from '../types/todo'

const initialState: Filter = {
    filter: visibilityFilters.SHOW_ALL
}

export const filterReducer = (state = initialState, action: TodoAction): Filter => {
    switch (action.type) {
        case TodoActionTypes.SET_VISIBILITY_FILTER:
            return {
              filter: action.payload.filter
            }
        default:
            return state
    }
}