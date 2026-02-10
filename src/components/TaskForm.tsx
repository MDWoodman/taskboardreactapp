import React from 'react'
import type {Task} from '../types/Task'

interface Props 
{
     onAdd : (task : Task) => void;
};

function TaskForm({ onAdd }: Props){

    const [title , setTitle] = React.useState("");
    
    const onAddClick = (e: React.FormEvent) => {
        e.preventDefault();
        const tsk = {id:0, title, completed:false};
        onAdd(tsk);
         //onAdd(new Task(0,title,false));
      
        setTitle("");
    }
    return(
        <form className="task-form" onSubmit={onAddClick}>
            <textarea 
                className="task-input" 
                rows={3} 
                placeholder="Wpisz treść zadania..." 
                value={title} 
                onChange={e=>setTitle((e.target as HTMLTextAreaElement).value)}
            />
            <button className="task-button" type="submit">
                <span>✨</span> Dodaj
            </button>
        </form>
    )
}

export default TaskForm;