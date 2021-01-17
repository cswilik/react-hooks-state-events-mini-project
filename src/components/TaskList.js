import React from "react";
import Task from "./Task"

function TaskList({tasks, onDelete}) {
  

  const taskElements = tasks.map(task => {
    return <Task key={task.text} task={task} onDelete={onDelete}/>
  })
  return (
    <div className="tasks">
      {taskElements}
    </div>
  );
}

export default TaskList;
