import React from "react";
import {useSelector} from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import {visibilityFilters} from "../../redux/action";
import s from './TodoList.module.scss'

const TodoList = () => {
    const todos = useSelector((state) => state.todos.todos)
    const filter = useSelector(state => state.filter.filter)

    const filterTasks = (todos, filter) => {
        switch (filter) {
            case visibilityFilters.SHOW_COMPLETED:
                return todos.filter(todo => todo.completed);
            case visibilityFilters.SHOW_ACTIVE:
                return todos.filter(todo => !todo.completed);
            default:
                return todos;
        }
    }

    const visibleTodos = filterTasks(todos, filter)

    if (todos.length === 0) {
        return <p className={s.noTask}>завдань не має!</p>
    }
    return (
        <ul>
            {visibleTodos.map(todo => <TodoItem key={todo.id} todo={todo}/>)}
        </ul>
    )
}

export default TodoList;