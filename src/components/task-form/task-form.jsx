import { useState } from "react";
import PropTypes from 'prop-types';

import PriorityTask from "../../enums/priotity-task";
import style from './task-form.module.css';

const TaskForm = (props) => {

    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [priority, setPriority] = useState(PriorityTask.NORMAL);

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onValided({
            name: name,
            desc: desc,
            priority: priority
        });

        setName('');
        setDesc('');
        setPriority(PriorityTask.NORMAL);
    }

    return (<>
        <h2>Formulaire</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nom :</label>
                <input type="text" id="name"
                        value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="desc">Description :</label>
                <textarea id="desc"
                        value={desc} onChange={(e) => setDesc(e.target.value)} />
            </div>
            <div>
                <label htmlFor="priority">Priorité :</label>
                <select id="priority"
                        value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value={PriorityTask.LOW}>Basse</option>
                    <option value={PriorityTask.NORMAL}>Normal</option>
                    <option value={PriorityTask.HIGH}>Haute</option>
                </select>
            </div>
            <div>
                <button type="submit">Ajouter</button>
            </div>
        </form>
    </>)
}

TaskForm.defaultProps = {
    onValided: () => {}
}

TaskForm.propTypes = {
    onValided: PropTypes.func
}

export default TaskForm;