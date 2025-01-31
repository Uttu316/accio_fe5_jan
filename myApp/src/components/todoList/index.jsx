import { useState } from "react";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const onInput = (e) => {
    const { value } = e.target;
    setInput(value);
  };
  const onAdd = () => {
    setTasks((prev) => [...prev, input]);
    setInput("");
  };

  const onDelet = (ind) => {
    const newTasks = [...tasks];
    newTasks.splice(ind, 1);
    setTasks(newTasks);
  };
  return (
    <div>
      <p>To-Do List</p>

      <div>
        <input value={input} onChange={onInput} />
        <button onClick={onAdd}>Add Todo</button>
      </div>
      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
            <button onClick={() => onDelet(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
