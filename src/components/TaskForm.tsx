import React from 'react'
import type {Task} from '../types/Task'

interface Props 
{
     onAdd : (task : Task) => void;
     onClose : (ids : number[]) => void;
     onDelete : (ids : number[]) => void;
};

function TaskForm({ onAdd , onClose , onDelete }: Props){

    const [title , setTitle] = React.useState("");
   
    
    const onAddClick = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const tsk = {id:0, title, completed:false , selected:false};
        onAdd(tsk);
         //onAdd(new Task(0,title,false));
      
        setTitle("");
    }
const onCloseTaskClick= (e : React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClose();
    console.log("Zakończ zaznaczone zadania");
}

const onDeleteTaskClick = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onDelete();
    console.log("Usuń zaznaczone zadania");
}

    return(
        <form className="task-form" >
            <textarea 
                className="task-input" 
                rows={3} 
                placeholder="Wpisz treść zadania..." 
                value={title} 
                onChange={e=>setTitle((e.target as HTMLTextAreaElement).value)}
            />
            <div className="button-group">
                <button className="task-button" onClick={onAddClick} type="submit">
                    <span>✨</span> Dodaj
                </button>
                <button className='task-button' type='button' onClick={onCloseTaskClick}>Zakończ zaznaczone</button>
                <button className='task-button' type='button' onClick={onDeleteTaskClick}>Usuń zaznaczone</button>
            </div>
        </form>
    )
}

export default TaskForm;