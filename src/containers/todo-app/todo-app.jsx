import { useState } from "react";
import { nanoid } from "nanoid";
import TaskForm from "../../components/task-form/task-form";

const TodoApp = () => {

    const [tasks, setTasks] = useState([]);

    const handleAddTask = (task) => {
        const newTask = {
            ...task,
            id: nanoid(),
            isFinish: false
        };

        setTasks(t => [...t, newTask]);
    }

    return (
        <div>
            <h1>Todo App</h1>
            <TaskForm onValided={handleAddTask}/>
        </div>
    )
}

export default TodoApp;