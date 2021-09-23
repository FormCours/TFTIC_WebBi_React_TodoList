import PropTypes from 'prop-types';
import PriorityTask from '../../enums/priotity-task';

const TaskListItem = (props) => {
    const {id, name, desc, priority, isFinish} = props;
    const {onFinish, onDelete} = props;
    const isHigh = priority === PriorityTask.HIGH;

    return (
        <div>
            <div>
                <p>{name} {isHigh && '(Urgent)'}</p>
                <p>{isFinish ? 'Terminer' : 'En cours'}</p>
                <p>{desc}</p>
            </div>
            <div>
                <button onClick={() => onFinish(id)} >Terminer</button>
                <button onClick={() => onDelete(id)} >Supprimer</button>
            </div>
        </div>
    )
}

TaskListItem.defaultProps = {
    desc: '',
    onFinish: () => {},
    onDelete: () => {}
}

TaskListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    desc: PropTypes.string,
    priority: PropTypes.string.isRequired,
    isFinish: PropTypes.bool.isRequired,
    onFinish: PropTypes.func,
    onDelete: PropTypes.func
}

export default TaskListItem;