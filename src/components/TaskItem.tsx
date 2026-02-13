
import type {Task} from '../types/Task'
import { useState } from 'react';

interface Props {
    task : Task;
    ids : number[];
    onCheckedChange: (id : number , checked : boolean) => void;
};

function TaskItem({task , onCheckedChange} : Props)
{
    const [isChecked, setIsChecked] = useState(task.selected);
    const checkedChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    };
    return (
        <li className={`task-item ${task.completed ? 'completed' : ''}`}>
            <div className="task-content">
                <span className="task-id">#{task.id}</span>
                <span className="task-title">{task.title}</span>
                <span className="task-status">{task.completed ? 'Ukończone' : 'Do zrobienia'}</span>
                <input type="checkbox" checked={task.selected} onChange={(e) => {checkedChange(e); onCheckedChange(task.id, e.target.checked);}} className="task-checkbox" />
            </div>
           
        </li>
    );

}

export default TaskItem;