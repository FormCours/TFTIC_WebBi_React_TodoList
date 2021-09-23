import { useState } from "react";
import { nanoid } from "nanoid";
import TaskForm from "../../components/task-form/task-form";
import TaskList from "../../components/task-list/task-list";

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

    const handleDeleteTask = (id) => {
        setTasks(t => t.filter(task => task.id !== id));
    }

    const handleFinishTask = (id) => {
        // setTasks(t => {
        //     const copy = [...t];
        //     for(let i = 0; i < copy.length; i++) {
        //         if(copy[i].id === id) {
        //             copy[i].isFinish = true;
        //         }
        //     }
        //     return copy;
        // });

        setTasks(t => t.map(task => task.id !== id ? task : {...task, isFinish: true}));
    }

    return (
        <div>
            <h1>Todo App</h1>
            <TaskForm onValided={handleAddTask}/>
            <TaskList tasks={tasks}
                        onTaskFinish={handleFinishTask}
                        onTaskDelete={handleDeleteTask} />
        </div>
    )
}

export default TodoApp;