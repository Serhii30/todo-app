import React from 'react'
import TodoItem from '../TodoItem/TodoItem'
import {useTypedSelector} from '../hooks/useTypedSelector'
import s from './TodoList.module.scss'
import {Todo, visibilityFilters} from '../../types/todo'

const TodoList: React.FC = () => {
    const todos = useTypedSelector(state => state.todos.todos)
    const filter = useTypedSelector(state => state.filter.filter)

    const filterTasks = (todos: Todo[], filter: string) => {
        switch (filter) {
            case visibilityFilters.SHOW_COMPLETED:
                return todos.filter((todo) => todo.completed)
            case visibilityFilters.SHOW_ACTIVE:
                return todos.filter((todo) => !todo.completed)
            default:
                return todos
        }
    }

    const visibleTodos = filterTasks(todos, filter)

    if (todos.length === 0) {
        return <p className={s.noTask}>завдань не має!</p>
    }
    
    return (
        <ul>
            {visibleTodos.map((todo: Todo) => <TodoItem key={todo.id} todo={todo}/>)}
        </ul>
    )
}

export default TodoList;