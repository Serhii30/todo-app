import React from 'react';
import {useDispatch} from "react-redux";
import {setFilter, visibilityFilters} from "../../redux/action"
import Button from "../UI/Button/Button";
import Title from "../UI/Title/Title";

const FilterTasks = () => {
    const dispatch = useDispatch();
    const currentFilter = filter => dispatch(setFilter(filter));

    return (
        <>
            <Title title='Список завдань'/>
            <Button onClick={() => currentFilter()}>Всі завдання</Button>
            <Button onClick={() => currentFilter(visibilityFilters.SHOW_COMPLETED)}>Виконані</Button>
            <Button onClick={() => currentFilter(visibilityFilters.SHOW_ACTIVE)}>Активні</Button>
        </>
    )
};

export default FilterTasks;