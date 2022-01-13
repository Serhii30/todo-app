import {combineReducers, createStore} from 'redux'
import {todoReducer} from './todoReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import {filterReducer} from './filterReducer'


export const rootReducer = combineReducers({
     todos: todoReducer,
     filter: filterReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export const store = createStore(rootReducer, composeWithDevTools())

