import React from 'react'
import Button from '../UI/Button/Button'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { deleteTodo, toggleTodo } from '../../redux/action-creator'
import { Todo } from '../../types/todo'
import s from './TodoItem.module.scss'

interface TodoListTaskProps {
    todo: Todo
}

const TodoItem: React.FC<TodoListTaskProps> = ({ todo }) => {
    const dispatch = useAppDispatch()

    const handleChecked = () => dispatch(toggleTodo(todo.id))
    const deleteBtn = () => dispatch(deleteTodo(todo.id))

    return (
        <div className={s.container}>
            <label className={todo.completed && s.completed}>
                <input type='checkbox' checked={todo.completed} onChange={handleChecked} />
                {todo.title}
                <Button id='id' btnClass='btnDelete' onClick={deleteBtn}> </Button>
            </label>
        </div>
    )
}

export default TodoItem