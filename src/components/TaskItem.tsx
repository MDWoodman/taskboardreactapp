
import type {Task} from '../types/Task'

interface Props {
    task : Task
};

function TaskItem({task} : Props)
{


    return (
        <li className={`task-item ${task.completed ? 'completed' : ''}`}>
            <div className="task-content">
                <span className="task-id">#{task.id}</span>
                <span className="task-title">{task.title}</span>
            </div>
            {task.completed && <span className="task-badge">✓ Ukończone</span>}
        </li>
    );

}

export default TaskItem;