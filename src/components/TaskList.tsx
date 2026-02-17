import React from 'react'
import TaskItem from '../components/TaskItem'
import type {Task} from '../types/Task'

interface Props {
    tasks : Task[];
    onCheckedChange: (id : number , checked : boolean) => void;
}

function TaskList({tasks, onCheckedChange} : Props){

    if(tasks.length==0)
        return ( <div className="empty-state">📝 Brak zadań - dodaj pierwsze zadanie!</div> ) ;

    const items = []
    for(let i=0 ; i < tasks.length ; i++){
        if(tasks[i].visible==true)
             items.push(<TaskItem key={tasks[i].id} task={tasks[i]} ids={[]} onCheckedChange={onCheckedChange}></TaskItem>)
       
    }

    return <ul className="task-list">{items}</ul>

    //return (<ul>
  //          { tasks.map( (task) => <TaskItem key={task.id} task={task} ></TaskItem>)}
   //         </ul>)
}
export default TaskList
