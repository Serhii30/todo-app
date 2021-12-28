import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addTodo} from "../../redux/action";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import s from './AddTodo.module.scss'

const AddTaskForm = () => {
    const [newTodo, setNewTodo] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setNewTodo(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(newTodo));
        setNewTodo('');
    };

    return (
        <div className={s.container}>
            <Input value={newTodo} type='title' placeholder="Додати завдання" onChange={handleChange}/>
            <Button btnClass='btnAdd' onClick={handleSubmit}>Додати</Button>
        </div>
    )
}

export default AddTaskForm;