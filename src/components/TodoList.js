import React, { useState } from "react";

const Form = () => {
  const [todo, setTodo] = useState("");
  const [listTodo, setListTodo] = useState([]);
  const handleInputChange = (e) => {
    setTodo(e.target.value);
  };

  const handleAdd = () => {
    setListTodo((prev) => [
      ...prev,
      { id: Math.floor(Math.random() * 10000), todo },
    ]);
    setTodo("");
  };

  const handleAddKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAdd();
    }
  };

  const handleDelete = (id) => {
    let currentListTodo = listTodo;
    currentListTodo = currentListTodo.filter((item) => item.id !== id);
    setListTodo(currentListTodo);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a Todo..."
        className="task-input"
        required
        onChange={handleInputChange}
        onKeyDown={handleAddKeyDown}
        value={todo}
      />
      <button className="add-btn" type="button" onClick={handleAdd}>
        +
      </button>
      <ul>
        {listTodo.map((item) => {
          return (
            <li key={item.id} className="list-item">
              {item.todo}
              <button
                className="btn-delete"
                onClick={() => handleDelete(item.id)}
              >
                <i className="fa fa-trash"></i>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Form;
