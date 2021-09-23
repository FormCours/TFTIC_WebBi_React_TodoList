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
        // - Solution avec de l'algorithmie
        // setTasks(t => {
        //     const copy = [...t];
        //     for(let i = 0; i < copy.length; i++) {
        //         if(copy[i].id === id) {
        //             copy[i].isFinish = true;
        //         }
        //     }
        //     return copy;
        // });

        // - Solution avec l'utilisation de la fonction 'map'
        setTasks(t => t.map(task => task.id !== id ? task : {...task, isFinish: true}));

        // - Avec l'ecriture 'function'
        // setTasks(function(t) {
        //     return t.map(function(task) {
        //         if(task.id !== id) {
        //             return task;
        //         }
        //         return {
        //             ...task, 
        //             isFinish: true
        //         };
        //     })
        // })
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