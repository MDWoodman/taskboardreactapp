
import './taskboardapp.css';
import Layout from "./components/Layout";
import Header from "./components/Header";
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import type {Task} from './types/Task';
import { useState } from 'react';


function TaskBoardApp() {


const [tasks , setTaskState] = useState<Task[]>([]);

const addTask=(task : Task) => {

  var id = Math.floor(Math.random() * 1000000);
  var title = task.title;
  var completed = false;


  var newTask : Task = {id,title,completed,selected:false};
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

  return (
    <Layout>
      <Header title="TaskBoard"  description="Zarzadzanie zadaniami na wesoło"></Header>
      <TaskForm onAdd={addTask} onClose={onCloseTask} onDelete={onDeleteTask}></TaskForm>
      <TaskList tasks={tasks} onCheckedChange={onToggleSelected}></TaskList>

    </Layout>
  );
}

export default TaskBoardApp;
