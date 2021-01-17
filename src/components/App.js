import React, { useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";



function App() {
  const [ tasksArr, setTasks] = useState(TASKS)
  const [selectCat, setSeletCat] = useState("All")

 function handleDelete(taskToDelete) {
    const newArr = tasksArr.filter(task => 
      task.text !== taskToDelete
    )
    setTasks(newArr)
  }

  function onTaskFormSubmit(newTask) {
    const newTasks = [...tasksArr, newTask]

    setTasks(newTasks)
  }
  

  const filteredArr = tasksArr.filter(task => {
    return selectCat === "All" || task.category === selectCat
    })

  

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectCat = {selectCat} setSelectCat={setSeletCat}/>
      <NewTaskForm categories= {CATEGORIES} onTaskFormSubmit = {onTaskFormSubmit} />
      <TaskList tasks ={filteredArr} onDelete={handleDelete}/>
    </div>
  );
}

export default App;
