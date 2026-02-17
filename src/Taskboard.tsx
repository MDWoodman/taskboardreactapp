
import React from 'react';
import './taskboardapp.css';
import Layout from "./components/Layout";
import Header from "./components/Header";
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import type {Task} from './types/Task';
import { useState } from 'react';
import FilterTasks from './components/FilterTasks';


function TaskBoardApp() {


const [tasks , setTaskState] = useState<Task[]>([]);

const addTask=(task : Task) => {

  var id = Math.floor(Math.random() * 1000000);
  var title = task.title;
  var completed = false;


  var newTask : Task = {id,title,completed,selected:false , visible:true};
  setTaskState([...tasks , newTask]);
  
};


const onCloseTask=() =>{

 for(let i=0 ; i < tasks.length ; i++){
    if(tasks[i].selected === true){
      tasks[i].completed = true;
       tasks[i].selected = false;
    }
 }

 
   setTaskState([...tasks]);
}

const onDeleteTask=() =>{
  const filteredTasks = tasks.filter(task => task.selected === false);
  setTaskState(filteredTasks);
}

const onToggleSelected = (id: number, checked: boolean) => {
  const updatedTasks = tasks.map(task =>
    task.id === id ? { ...task, selected: checked } : task
  );
  setTaskState(updatedTasks);
};

const onFilterChange=(filter : string) => 
{
  console.log("Wybrany filtr: " + filter);
  const updatatedTasks = tasks.map(task => 
    {
      if(filter=="all") return {...task , visible : true}
      if(filter=="open") 
           if(task.completed==true) return {...task , visible : false }
           else return {...task , visible : true }
      if(filter=="ended") 
            if(task.completed==false) return {...task , visible : false }
            else return {...task , visible : true }
      return task;
    });
    
  setTaskState(updatatedTasks);
  setFilter(filter);
};


 

const [filter , setFilter] = React.useState('all');

  return (
    <Layout>
      <Header title="TaskBoard"  description="Zarzadzanie zadaniami na wesoło"></Header>
      <TaskForm onAdd={addTask} onClose={onCloseTask} onDelete={onDeleteTask}></TaskForm>
      <FilterTasks filter={filter} onFilterChangeProps={onFilterChange}></FilterTasks>
      <TaskList tasks={tasks} onCheckedChange={onToggleSelected}></TaskList>

    </Layout>
  );

}
export default TaskBoardApp;
