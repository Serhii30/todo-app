import React from "react";
import {useDispatch} from "react-redux";
import {deleteTodo, toggleTodo} from "../../redux/action";
import Button from "../UI/Button/Button";
import s from './TodoItem.module.scss'

export const TodoItem = ({todo}) => {
    const dispatch = useDispatch()

    const handleChecked = () => dispatch(toggleTodo(todo.id));
    const deleteBtn = () => dispatch(deleteTodo(todo.id))

    return (
        <div className={s.container}>
            <label className={todo.completed && s.completed}>
                <input type='checkbox' checked={todo.completed} onChange={handleChecked}/>
                {todo.title}
                <Button btnClass='btnDelete' onClick={deleteBtn}> </Button>
            </label>
        </div>
    );
};
export default TodoItem;