import React, { useState } from 'react'
import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { addTodo } from '../../redux/action-creator'
import s from './AddTodo.module.scss'

const AddTaskForm: React.FC = () => {
    const [newTodo, setNewTodo] = useState('')
    const dispatch = useAppDispatch()

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setNewTodo(e.target.value)
    }

    const handleSubmit = (e: React.MouseEvent<HTMLElement>): void => {
        e.preventDefault()
        dispatch(addTodo(newTodo))
        setNewTodo('')
    }

    return (
        <div className={s.container}>
            <Input inputClass='inputClass' value={newTodo} type='title' placeholder='Додати завдання'
                onChange={changeHandler} />
            <Button btnClass='btnAdd' onClick={handleSubmit}>Додати</Button>
        </div>
    )
}

export default AddTaskForm