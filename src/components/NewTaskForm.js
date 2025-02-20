import React, { useState } from "react";

function NewTaskForm({ categories = [], onTaskFormSubmit }) {
  const defaultCategory = categories.length > 1 ? categories[1] : ""; // Avoid undefined access
  const [text, setText] = useState("");
  const [category, setCategory] = useState(defaultCategory);

  function handleSubmit(e) {
    e.preventDefault();
    if (text.trim() === "") return;

    const newTask = { text, category };
    onTaskFormSubmit(newTask);

    setText("");
    setCategory(defaultCategory);
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
          type="text" 
          name="text" 
          value={text} 
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select 
          name="category" 
          value={category} 
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories
            .filter((cat) => cat !== "All") // Assuming "All" shouldn't be an option
            .map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

       


