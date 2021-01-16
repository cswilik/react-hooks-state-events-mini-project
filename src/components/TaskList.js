import React, { useState} from "react";
import Task from "./Task"

function TaskList({tasks}) {
  const [tasksVarr, setTasksVarr] = useState(" ")


// function handleDelete(textToDelete) {
//       const newArr = tasks.filter((task) => {
//       return task.text !==textToDelete
//       }  
//   )
    

}


  console.log(tasks)
  const taskElements = tasks.map(task => {
    return <Task key={task.text} category={task.category} text={task.text} onDelete={handleDelete}/>
  })
  return (
    <div className="tasks">
      {taskElements}
    </div>
  );
}

export default TaskList;
