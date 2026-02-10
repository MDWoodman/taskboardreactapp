
import './taskboardapp.css';
import Header from "./components/Header";
import Layout from "./components/Layout";

import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import type {Task} from './types/Task';
import { useState } from 'react';


function TaskBoardApp() {

const seedtasks : Task[] =
[
{id:1 , title:"Zadanie testowe 1" , completed:true},
{id:2 , title:"Zadanie testowe 2" , completed:false}
];

const [tasks , setTaskState] = useState<Task[]>([]);

const addTask=(task : Task) => {

  var id = Math.floor(Math.random() * 1000000);
  var title = task.title;
  var completed = false;


  var newTask : Task = {id,title,completed};
  setTaskState([...tasks , newTask]);
  
};




  return (
    <Layout>
      <Header title="TaskBoard"  description="Zarzadzanie zadaniami na wesoło"></Header>
      <TaskForm onAdd={addTask}></TaskForm>
      <TaskList tasks={tasks}></TaskList>

    </Layout>
  );
}

export default TaskBoardApp;
