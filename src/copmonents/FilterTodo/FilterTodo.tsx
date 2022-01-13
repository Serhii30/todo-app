import React from 'react'
import Button from '../UI/Button/Button'
import Title from '../UI/Title/Title'
import {useAppDispatch} from '../hooks/useAppDispatch'
import {setFilter} from '../../redux/action-creator'
import {visibilityFilters} from '../../types/todo'

const FilterTasks: React.FC = () => {
    const dispatch = useAppDispatch()
    const currentFilter = (filter: string) => dispatch(setFilter(filter))

    return (
        <>
            <Title title='Список завдань'/>
            <Button onClick={() => currentFilter(visibilityFilters.SHOW_ALL)}>Всі завдання</Button>
            <Button onClick={() => currentFilter(visibilityFilters.SHOW_COMPLETED)}>Виконані</Button>
            <Button onClick={() => currentFilter(visibilityFilters.SHOW_ACTIVE)}>Активні</Button>
        </>
    )
}

export default FilterTasks