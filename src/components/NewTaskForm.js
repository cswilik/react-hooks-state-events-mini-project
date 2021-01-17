import React, {useState} from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [ text, setText] = useState("")
  const [ category, setCat] = useState("Code")

 const catElements = categories.map(cat => {
    return <option key={cat}>{cat}</option>
  })

  
  function handleSubmit(evt) {
    evt.preventDefault()
    const newTask = {
      text,
      category
    }
    
    onTaskFormSubmit(newTask)
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={(evt) => setText(evt.target.value)} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(e) => {setCat(e.target.value)}} >
          {catElements}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
