import React from "react";
import TodoList from "./copmonents/TodoList/TodoList";
import FilterTasks from "./copmonents/FilterTodo/FilterTodo";
import AddTaskForm from "./copmonents/AddTodo/AddTodo";

const App = () => {
    return (
        <>
            <FilterTasks/>
            <AddTaskForm/>
            <TodoList/>
        </>
    );
};

export default App;
