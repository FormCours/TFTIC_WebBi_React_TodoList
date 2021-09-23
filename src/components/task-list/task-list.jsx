import PropTypes from 'prop-types';
import TaskListItem from './task-list-item';

const TaskList = (props) => {
    const {onTaskFinish, onTaskDelete} = props;

    const tasksJSX = props.tasks.map(
        t => <TaskListItem key={t.id} {...t}
                            onFinish={onTaskFinish}
                            onDelete={onTaskDelete} />
    )

    return (<>
        <h2>Liste des taches</h2>
        <section>
            {tasksJSX}
        </section>
    </>)
}

TaskList.defaultProps = {
    tasks: [],
    onTaskFinish: () => {},
    onTaskDelete: () => {}
}

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    })),
    onTaskFinish: PropTypes.func,
    onTaskDelete: PropTypes.func
}

export default TaskList;