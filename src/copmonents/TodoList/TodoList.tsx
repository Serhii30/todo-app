import React, { useMemo, useState } from 'react'
import TodoItem from '../TodoItem/TodoItem'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { Todo, visibilityFilters } from '../../types/todo'
import s from './TodoList.module.scss'
import Input from 'copmonents/UI/Input/Input'

const TodoList: React.FC = () => {
    const [searchValue, setSearchValue] = useState('')

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

    const sortedTask = useMemo(() => {
        return todos.filter(task => task.title.toLowerCase().includes(searchValue.toLowerCase()))
    }, [todos, searchValue])

    const visibleTodos = filterTasks(sortedTask, filter)

    if (!todos.length) {
        return <p className={s.noTask}>завдань не має!</p>
    }

    return (
        <div>
            <Input
                inputClass='searchInput'
                value={searchValue} 
                type='title'
                onChange={e => setSearchValue(e.target.value)}
                placeholder='Знайти завдання...'
            />
            <ul>
                {visibleTodos.map((todo: Todo) => <TodoItem key={todo.id} todo={todo} />)}
            </ul>
        </div>
    )
}

export default TodoList