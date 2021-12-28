import {visibilityFilters} from "./action";

export const visibilityReducer = (state = visibilityFilters.SHOW_ALL, action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return {
                filter: action.filter
            };
        default:
            return state;
    }
}

